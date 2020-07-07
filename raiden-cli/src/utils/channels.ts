import { RaidenChannel, RaidenChannels } from 'raiden-ts';
import { ApiChannel } from '../types';
import { ethers, Wallet } from 'ethers';
import { promises as fs } from 'fs';
import artifact from "../contracts/ZkAssetAdjustable.json";
import erc20_artifact from "../contracts/ERC20Mintable.json";
import ace_artifact from "../contracts/ACE.json";

export function flattenChannelDictionary(channelDict: RaidenChannels): RaidenChannel[] {
  // To flatten structure {token: {partner: [channel..], partner:...}, token...}
  return Object.values(channelDict).reduce(
    (allChannels, tokenPartners) => allChannels.concat(Object.values(tokenPartners)),
    [] as RaidenChannel[],
  );
}

async function getWallet(privateKeyPath: string, password: string): Promise<Wallet> {
  const encryptedKey = await fs.readFile(privateKeyPath, 'utf-8');
  return await Wallet.fromEncryptedJson(encryptedKey, password);
}

export function filterChannels(
  channels: RaidenChannel[],
  tokenAddress?: string,
  partnerAddress?: string,
): RaidenChannel[] {
  let filteredChannels = channels;

  if (tokenAddress) {
    filteredChannels = filteredChannels.filter((channel) => channel.token === tokenAddress);
  }
  if (partnerAddress) {
    filteredChannels = filteredChannels.filter((channel) => channel.token === partnerAddress);
  }

  return filteredChannels;
}

export function transformSdkChannelFormatToApi(channel: RaidenChannel): ApiChannel {
  return {
    channel_identifier: channel.id,
    token_network_address: channel.tokenNetwork,
    partner_address: channel.partner,
    token_address: channel.token,
    balance: channel.balance.toString(),
    total_deposit: channel.ownDeposit.toString(),
    state: channel.state,
    settle_timeout: channel.settleTimeout,
    reveal_timeout: 0, // FIXME: Not defined here. Python client handles reveal timeout differently,
  };
}

export async function proofzkBalances(value) {
  console.log(value)
  console.log("------- invoke channel close, we do the zk proofs --------")
  const privateKeyPath = '/tmp/UTC--2020-07-07T13-56-16.648039000Z--e8b21a66d89401254045bab95b474b52b6fac351'; 
  const encryptedKey = await fs.readFile(privateKeyPath, 'utf-8');
  const wallet = await getWallet(privateKeyPath,'');
  

//console.log(artifact.abi)
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

  // An example Provider
  const provider = ethers.getDefaultProvider('goerli');
  //console.log(provider)    
  
  // An example Signer
  const signer = wallet.connect(provider);
  //console.log(signer)
  console.log("-------- signer ---------")

  const network = await provider.getNetwork();
  
// Read-Only; By connecting to a Provider, allows:
// - Any constant function
// - Querying Filters
// - Populating Unsigned Transactions for non-constant methods
// - Estimating Gas for non-constant (as an anonymous sender)
// - Static Calling non-constant methods (as anonymous sender)
const ZkAssetAdjustable = new ethers.Contract(artifact.networks[5].address, artifact.abi, signer);
//console.log(ZkAssetAdjustable)
console.log("--new ZkAssetAdjustable---")

const erc20 = new ethers.Contract(erc20_artifact.networks[5].address, erc20_artifact.abi, signer)
//console.log(erc20)
console.log("-- ERC20 address ---")

const ace = new ethers.Contract(ace_artifact.networks[5].address, ace_artifact.abi, signer)
//console.log(ace)
console.log("--address ACE---")

const owner = await ace.owner();
console.log(owner, "-- ACE owner---")

const sender = '0xE8B21A66d89401254045bAb95B474B52B6faC351';
// sender should be the ACE owner


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
console.log("ptekey----------- ",encryptedKey)
const bob = secp256k1.accountFromPrivateKey(
  encryptedKey
);
console.log("User A --------pubkey-----", bob.publicKey)
const alicePkey = 'e2268c8bcabf22bf893b4ad696955a48324acf14747b017303167f6649dd4ec0'
const alice = secp256k1.accountFromPrivateKey(
  alicePkey
);
console.log("User B --------pubkey-----", alice.publicKey)

  console.log("User A wants to deposit 100");
  const bobNote1 = await aztec.note.create(bob.publicKey, 100);

  const newMintCounterNote = await aztec.note.create(bob.publicKey, 100);
  const zeroMintCounterNote = await aztec.note.createZeroValueNote();

const mintedNotes = [bobNote1];


  const mintProof = new MintProof(
    zeroMintCounterNote,
    newMintCounterNote,
    mintedNotes,
    sender
  );

 const mintData = mintProof.encodeABI();
// console.log('-------- mintProof ----',mintData)

 const resultValidatorAddress = await ace.getValidatorAddress(JOIN_SPLIT_PROOF);
 console.log('---- has JOIN_SPLIT_VALIDATOR:',resultValidatorAddress )
 const resultValidatorAddress2 = await ace.getValidatorAddress(MINT_PROOF);
 console.log('---- has MINT_VALIDATOR:',resultValidatorAddress2 )
 var options = { from: sender, gasPrice: 1000000000, gasLimit: 85000, value: 0 };
 const receipt = await ZkAssetAdjustable.confidentialMint(MINT_PROOF, mintData, options);
 console.log(receipt, "<-- the receipt of a confidentialMint")

  console.log("completed mint proof");
  console.log("User A successfully deposited 100");

  const aliceTaxiFee = await aztec.note.create(alice.publicKey, 25);

  console.log("The fare comes to 25");
  const bobNote2 = await aztec.note.create(bob.publicKey, 75);
//  console.log("----note2---", bobNote2)
  const sendProofSender = sender;
  const withdrawPublicValue = 0;
  const publicOwner = sender

  const sendProof = new JoinSplitProof(
    mintedNotes,
    [aliceTaxiFee, bobNote2],
    sendProofSender,
    withdrawPublicValue,
    publicOwner
  );
  const sendProofData = sendProof.encodeABI(ZkAssetAdjustable.address);

  const sendProofSignatures = sendProof.constructSignatures(
    ZkAssetAdjustable.address,
    [bob]
  );
  console.log("------- start confidentialTransfer ------")
  const receipt2 =await ZkAssetAdjustable["confidentialTransfer(bytes,bytes)"](
    sendProofData,
    sendProofSignatures,
    options
  );

  console.log("Bob paid sally 25 for the taxi and gets 75 back");

//console.log(sendProofData)
console.log("----- sendProofData -----");

console.log(receipt2, "<-- the receipt of a confidentialTransfer");
  return { result: "show zkBallances" }
}
