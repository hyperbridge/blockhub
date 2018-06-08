import { Injectable } from '@angular/core';

var Web3 = require('web3');

declare let require: any;
declare let window: any;

let tokenAbi = require('./contracts/tokenContract.json');

@Injectable()
export class ContractsService {
  private _account: string = null;
  private _web3: any;

  private _tokenContract: any;
  private _tokenContractAddress: string = "0x627306090abaB3A6e1400e9345bC60c78a8BEf57";

  constructor() {
    if (typeof window.web3 !== 'undefined') {
      const provider = new window.web3.providers.HttpProvider("http://localhost:8545");
      // Use Mist/MetaMask's provider
      this._web3 = new Web3(provider); //window.web3.currentProvider);

      // if (this._web3.version !== "1.0.0-beta.34") {
      //   alert('Please connect to the Rinkeby network');
      // }
    } else {
      console.warn(
        'Please use a dapp browser like mist or MetaMask plugin for chrome'
      );
    }

    this._tokenContract = new this._web3.eth.Contract(tokenAbi.abi, this._tokenContractAddress) //this._web3.eth.contract(tokenAbi).at(this._tokenContractAddress);
  }
  private async getAccount(): Promise<string> {
    if (this._account == null) {
      this._account = await new Promise((resolve, reject) => {
        this._web3.eth.getAccounts((err, accs) => {
          if (err != null) {
            alert('There was an error fetching your accounts.');
            return;
          }

          if (accs.length === 0) {
            alert(
              'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
            );
            return;
          }
          resolve(accs[0]);
        })
      }) as string;

      this._web3.eth.defaultAccount = this._account;
    }

    return Promise.resolve(this._account);
  }

  public async getUserBalance(): Promise<number> {
    let account = await this.getAccount();

    return new Promise((resolve, reject) => {
      let _web3 = this._web3;
      this._tokenContract.methods.balanceOf(account).call({ gas: 3000000 }, (err, result) => {
        if (err != null) {
          reject(err);
        }

        resolve(this._web3.utils.fromWei(result));
      });
    }) as Promise<number>;
  }
}