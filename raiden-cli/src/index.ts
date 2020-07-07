import { promises as fs } from 'fs';
import * as path from 'path';
import inquirer from 'inquirer';
import yargs from 'yargs';
import { LocalStorage } from 'node-localstorage';
import { ethers, Wallet } from 'ethers';
import { Raiden } from 'raiden-ts';
import { CliArguments, Cli } from './types';
import { makeCli } from './cli';
import { setupLoglevel } from './utils/logging';
import DEFAULT_RAIDEN_CONFIG from './config.json';

const { note } = require('aztec.js');
const secp256k1 = require('@aztec/secp256k1');
const aztec = require("aztec.js");
const { JoinSplitProof, MintProof } = aztec;

const utils = require('@aztec/dev-utils');
const {
  proofs: {
    JOIN_SPLIT_PROOF,
    MINT_PROOF,
    BILATERAL_SWAP_PROOF,
    DIVIDEND_PROOF,
    PRIVATE_RANGE_PROOF,
  },
} = utils;

function parseArguments(): CliArguments {
  return yargs
    .usage('Usage: $0 -k <private_json_path> -e <node_url> --port <port>')
    .options({
      privateKey: {
        type: 'string',
        demandOption: true,
        alias: 'k',
        desc: 'JSON Private Key file path',
        coerce: path.resolve,
      },
      password: {
        type: 'string',
        desc:
          'JSON Private Key password. Better passed through "RAIDEN_PASSWORD" env var. Prompted if not provided',
      },
      ethNode: {
        alias: 'e',
        type: 'string',
        default: 'http://parity.goerli.ethnodes.brainbot.com:8545',
        desc: 'ETH JSON-RPC URL',
      },
      store: {
        alias: 's',
        type: 'string',
        default: './storage',
        desc: 'Dir path where to store state',
      },
      config: {
        alias: 'c',
        coerce: JSON.parse,
        desc: 'JSON to overwrite default/curretn config',
      },
      port: {
        type: 'number',
        default: 5001,
        desc: 'Serve HTTP API on given port',
      },
    })
    .env('RAIDEN')
    .help().argv;
}

async function askUserForPassword(): Promise<string> {
  const userInput = await inquirer.prompt<{ password: string }>([
    { type: 'password', name: 'password', message: 'Private Key Password:', mask: '*' },
  ]);
  return userInput.password;
}

async function getWallet(privateKeyPath: string, password: string): Promise<Wallet> {
  const encryptedKey = await fs.readFile(privateKeyPath, 'utf-8');
  return await Wallet.fromEncryptedJson(encryptedKey, password);
}

function createLocalStorage(name: string): LocalStorage {
  const localStorage = new LocalStorage(name);
  Object.assign(globalThis, { localStorage });
  return localStorage;
}

function shutdown(this: Cli): void {
  if (this.server?.listening) {
    this.log.info('Closing server...');
    this.server.close();
  }

  if (this.raiden.started) {
    this.log.info('Stopping raiden...');
    this.raiden.stop();
  } else {
    process.exit(1);
  }
}

function registerShutdownHooks(this: Cli): void {
  process.on('SIGINT', shutdown.bind(this));
  process.on('SIGTERM', shutdown.bind(this));
}

async function main() {
  setupLoglevel();
  const argv = parseArguments();
  const password = argv.password ?? (await askUserForPassword());
  const wallet = await getWallet(argv.privateKey, password);

const abi = [
];

// This can be an address or an ENS name
const address = "0x37e70a2321584958aaC704cf0067473c84393db4";
console.log(address, "-----------------")

// An example Provider
const provider = ethers.getDefaultProvider('goerli');
console.log(provider, "-----------------")

// An example Signer
const signer = wallet.connect(provider);
console.log(signer, "-----------------")


// Read-Only; By connecting to a Provider, allows:
// - Any constant function
// - Querying Filters
// - Populating Unsigned Transactions for non-constant methods
// - Estimating Gas for non-constant (as an anonymous sender)
// - Static Calling non-constant methods (as anonymous sender)
//const erc20 = new ethers.Contract(address, abi, provider);
//console.log(erc20, "---erc20----")


// Read-Write; By connecting to a Signer, allows:
// - Everything from Read-Only (except as Signer, not anonymous)
// - Sending transactions for non-constant functions
//const erc20_rw = new ethers.Contract(address, abi, signer)
//console.log(erc20_rw, "--- erc20_rw ----")

//var sendPromise = erc20_rw.giveMeToken('0x4B9140D7E6f2B96d459caD2d81F1C1c483856a8E', 100000000000);
//console.log(sendPromise, "---Promise----")

//try {
//sendPromise.then(() => {
//  console.log('Ming--------------------------- giveMeToken:');
//});
//} catch (e) {
//   console.log(e);   // uncaught
//  }

//  console.log('Ming------------------------- end ---');

  const encryptedKey = await fs.readFile(argv.privateKey, 'utf-8');
  console.log("ptekey----------- ",encryptedKey)
  const bob = secp256k1.accountFromPrivateKey(
    encryptedKey
  );
  console.log("bob--------pubkey-----", bob.publicKey)

    console.log("Bob wants to deposit 100");
    const bobNote1 = await aztec.note.create(bob.publicKey, 100);

    const newMintCounterNote = await aztec.note.create(bob.publicKey, 100);
    const zeroMintCounterNote = await aztec.note.createZeroValueNote();
    const sender = '0x4B9140D7E6f2B96d459caD2d81F1C1c483856a8E';

  const mintedNotes = [bobNote1];


    const mintProof = new MintProof(
      zeroMintCounterNote,
      newMintCounterNote,
      mintedNotes,
      sender
    );

   const mintData = mintProof.encodeABI();
   console.log('-------- mintProof ----',mintData)

    console.log("completed mint proof");
    console.log("Bob successfully deposited 100");





  const localStorage = createLocalStorage(argv.store);
  const raiden = await Raiden.create(argv.ethNode, wallet.privateKey, localStorage, undefined, {
    ...DEFAULT_RAIDEN_CONFIG,
    ...argv.config,
  });
  const cli = await makeCli(raiden, argv.port);
  registerShutdownHooks.call(cli);
  //cli.raiden.start();
}

main().catch((err) => {
  console.error('Main error:', err);
  process.exit(2);
});
