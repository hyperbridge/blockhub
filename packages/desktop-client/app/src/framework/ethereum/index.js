const Web3 = require('web3')
const Token = require('hyperbridge-token')

// declare let require: any
// declare let Promise: any
// declare let window: any

// // declare global {
// //   interface Window {
// //     web3: any;
// //   }
// // }


// type Local = {
//     _account: string,
//     _web3: any,
//     _tokenContract: any,
//     _tokenContractAddress: string
// }

const local = {
    _account: null,
    _provider: null,
    _web3: null,
    _tokenContract: null,
    _tokenContractAddress: "0x627306090abaB3A6e1400e9345bC60c78a8BEf57",
}


export const init = () => {
    console.log('[BlockHub] Initializing Ethereum...')

    return new Promise((resolve, reject) => {
        if (typeof window.web3 !== 'undefined') {
            if (!local._web3) {
                local._provider = new window.web3.providers.HttpProvider("http://localhost:8545")
                // Use Mist/MetaMask's provider
                local._web3 = new Web3(local._provider) //window.web3.currentProvider)
            }

            // if (_web3.version !== "1.0.0-beta.34") {
            //   alert('Please connect to the Rinkeby network')
            // }

            let timeout = setTimeout(() => {
                const err = 'Ethereum not initialized. Please use install MetaMask for Chrome, or use a dapp browser like Mist.'

                reject(err)
            }, 5000)

            web3.eth.net.isListening().then(() => {
                console.log('[BlockHub] Ethereum initialized')

                clearTimeout(timeout)

                local._tokenContract = new local._web3.eth.Contract(Token.api.ethereum.contracts.Token, local._tokenContractAddress) //_web3.eth.contract(tokenAbi).at(_tokenContractAddress)

                resolve()
            }, () => {
                clearTimeout(timeout)

                const err = 'Ethereum not initialized. Please use install MetaMask for Chrome, or use a dapp browser like Mist.'

                reject(err)
            })

        } else {
            const err = 'Ethereum not initialized. Please use install MetaMask for Chrome, or use a dapp browser like Mist.'

            reject(err)
        }
    })
}


// TODO: fix
export const isConnected = () => {
    if (typeof local._web3 === 'undefined')
        return false

    return true
}

export const getAccount = async () => {
    if (local._account == null) {
        local._account = await new Promise((resolve, reject) => {
            local._web3.eth.getAccounts((err, accs) => {
                if (err != null) {
                    console.warn('There was an error fetching your accounts.', err)
                    return
                }

                if (accs.length === 0) {
                    console.warn('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.')
                    return
                }
                resolve(accs[0])
            })
        })

        local._web3.eth.defaultAccount = local._account
    }

    return Promise.resolve(local._account)
}

export const getUserBalance = async () => {
    let account = await getAccount()

    return new Promise((resolve, reject) => {
        local._tokenContract.methods.balanceOf(account).call({ gas: 3000000 }, (err, result) => {
            if (err != null) {
                reject(err)
            }

            resolve(local._web3.utils.fromWei(result))
        })
    })
}