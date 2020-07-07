import { Router, Request, Response, NextFunction } from 'express';
import { first } from 'rxjs/operators';
import { ErrorCodes, RaidenError } from 'raiden-ts';
import { Cli } from '../types';

import {
  validateAddressParameter,
  isInvalidParameterError,
  isTransactionWouldFailError,
} from '../utils/validation';
import {
  flattenChannelDictionary,
  transformSdkChannelFormatToApi,
  filterChannels,
  proofzkBalances,
} from '../utils/channels';

function isConflictError(error: RaidenError): boolean {
  return (
    [ErrorCodes.RDN_UNKNOWN_TOKEN_NETWORK, ErrorCodes.CNL_INVALID_STATE].includes(error.message) ||
    isTransactionWouldFailError(error)
  );
}

async function getAllChannels(this: Cli, _request: Request, response: Response) {
  const channelDictionary = await this.raiden.channels$.pipe(first()).toPromise();
  const channelList = flattenChannelDictionary(channelDictionary);
  const formattedChannels = channelList.map((channel) => transformSdkChannelFormatToApi(channel));
  response.json(formattedChannels);
}

async function getChannelsForToken(this: Cli, request: Request, response: Response) {
  const channelDictionary = await this.raiden.channels$.pipe(first()).toPromise();
  const channelList = flattenChannelDictionary(channelDictionary);
  const filteredChannels = filterChannels(channelList, request.params.tokenAddress);
  const formattedChannels = filteredChannels.map((channel) =>
    transformSdkChannelFormatToApi(channel),
  );
  response.json(formattedChannels);
}

async function getChannelsForTokenAndPartner(this: Cli, request: Request, response: Response) {
  const channelDictionary = await this.raiden.channels$.pipe(first()).toPromise();
  const channel = channelDictionary[request.params.tokenAddress]?.[request.params.partnerAddress];

  if (channel) {
    response.json(transformSdkChannelFormatToApi(channel));
  } else {
    response.status(404).send('The channel does not exist');
  }
}

async function openChannel(this: Cli, request: Request, response: Response, next: NextFunction) {
  try {
    // TODO: We ignore the provided `reveal_timeout` until #1656 provides
    // a better solution.
    await this.raiden.openChannel(request.body.token_address, request.body.partner_address, {
      settleTimeout: request.body.settle_timeout,
      deposit: request.body.total_deposit,
    });
    const channelDictionary = await this.raiden.channels$.pipe(first()).toPromise();
    const newChannel =
      channelDictionary[request.body.token_address]?.[request.body.partner_address];
    response.status(201).json(transformSdkChannelFormatToApi(newChannel));
  } catch (error) {
    if (isInvalidParameterError(error)) {
      response.status(400).send(error.message);
    } else if (error.code === 'INSUFFICIENT_FUNDS') {
      response.status(402).send(error.message);
    } else if (isConflictError(error)) {
      response.status(409).send(error.message);
    } else {
      next(error);
    }
  }
}

export function makeChannelsRouter(this: Cli): Router {
  const router = Router();

  router.get('/', getAllChannels.bind(this));

  router.get(
    '/:tokenAddress',
    validateAddressParameter.bind('tokenAddress'),
    getChannelsForToken.bind(this),
  );

  router.get(
    '/:tokenAddress/:partnerAddress',
    validateAddressParameter.bind('tokenAddress'),
    validateAddressParameter.bind('partnerAddress'),
    getChannelsForTokenAndPartner.bind(this),
  );

  router.put('/', openChannel.bind(this));

  router.patch('/:tokenAddress/:partnerAddress', (_request: Request, response: Response) => {
    let state;
    if(_request.body.state === 'closed') {
      state = 'closed';
    } else {
      state = _request.body.total_deposit;
    }
    response.status(201).json(proofzkBalances(state));
  });

  return router;
}

