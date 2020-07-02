import { RaidenTransfer } from 'raiden-ts';
import { ApiPayment, ApiPaymentEvents } from '../types';

function transformTransferDirectionToPaymentEvent(
  direction: RaidenTransfer['direction'],
): ApiPaymentEvents {
  if (direction === 'sent') return ApiPaymentEvents.sent;
  if (direction === 'received') return ApiPaymentEvents.received;
  throw new Error(`Unexpected transfer direction: ${direction}`);
}

export function transformSdkTransferToApiPayment(transfer: RaidenTransfer): ApiPayment {
  return {
    event: transformTransferDirectionToPaymentEvent(transfer.direction),
    initiator_address: transfer.initiator,
    target_address: transfer.target,
    token_address: transfer.token,
    amount: transfer.value.toString(),
    identifier: transfer.paymentId.toNumber(),
    secret: '', // FIXME: must be first exposed by SDK (#1708)
    secret_hash: transfer.secrethash,
  };
}
