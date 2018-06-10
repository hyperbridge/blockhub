import { Injectable } from '@angular/core'
import * as ethereum from '../framework/ethereum'
import * as peer from '../framework/peer'

@Injectable()
export class ContractsService {
  constructor() {
    ethereum.init()
    peer.init()
  }

  private async getAccount(): Promise<string> {
    return ethereum.getAccount()
  }

  public async getUserBalance(): Promise<number> {
    return ethereum.getUserBalance()
  }
}