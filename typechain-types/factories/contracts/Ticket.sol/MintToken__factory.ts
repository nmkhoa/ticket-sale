/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  MintToken,
  MintTokenInterface,
} from "../../../contracts/Ticket.sol/MintToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "issueToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class MintToken__factory {
  static readonly abi = _abi;
  static createInterface(): MintTokenInterface {
    return new utils.Interface(_abi) as MintTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MintToken {
    return new Contract(address, _abi, signerOrProvider) as MintToken;
  }
}