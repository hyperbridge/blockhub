const Web3 = require('web3')
let tokenAbi = require('../../contracts/tokenContract.json')

declare let require: any
declare let window: any

type Local = {
    _account: string,
    _web3: any,
    _tokenContract: any,
    _tokenContractAddress: string
}

const local: Local = {
    _account: null,
    _web3: null,
    _tokenContract: null,
    _tokenContractAddress: "0x627306090abaB3A6e1400e9345bC60c78a8BEf57",
}

export const init = () => {
  if (typeof window.web3 !== 'undefined') {
    const provider = new window.web3.providers.HttpProvider("http://localhost:8545")
    // Use Mist/MetaMask's provider
    local._web3 = new Web3(provider) //window.web3.currentProvider)

    // if (_web3.version !== "1.0.0-beta.34") {
    //   alert('Please connect to the Rinkeby network')
    // }
  } else {
    console.warn(
      'Please use a dapp browser like mist or MetaMask plugin for chrome'
    )
  }

  local._tokenContract = new local._web3.eth.Contract(tokenAbi.abi, local._tokenContractAddress) //_web3.eth.contract(tokenAbi).at(_tokenContractAddress)
}

export const getAccount = async (): Promise<string> => {
  if (local._account == null) {
    local._account = await new Promise((resolve, reject) => {
        local._web3.eth.getAccounts((err, accs) => {
        if (err != null) {
          alert('There was an error fetching your accounts.')
          return
        }

        if (accs.length === 0) {
          alert(
            'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
          )
          return
        }
        resolve(accs[0])
      })
    }) as string

    local._web3.eth.defaultAccount = local._account
  }

  return Promise.resolve(local._account)
}

export const getUserBalance = async (): Promise<number> => {
  let account = await getAccount()

  return new Promise((resolve, reject) => {
      local._tokenContract.methods.balanceOf(account).call({ gas: 3000000 }, (err, result) => {
      if (err != null) {
        reject(err)
      }

      resolve(local._web3.utils.fromWei(result))
    })
  }) as Promise<number>
}