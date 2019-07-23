import Web3 from 'web3';
// import HDWalletProvider from 'truffle-hdwallet-provider'
import Bluebird from 'bluebird';
export const ethereum = {
    infura: {
        accessToken: 'q0dsZEe9ohtOnGy8V0cT'
    },
    activeNetwork: 'local',
    networks: {
        local: {
            provider: function (passphrase, index) {
                // @ts-ignore
                return new HDWalletProvider(passphrase, 'http://localhost:8545', index, 30);
            },
            host: 'localhost',
            port: 8545,
            gas: 6500000,
            gasPrice: 10e9,
            network_id: '*'
        },
        kovan: {
            provider: function (passphrase, index) {
                // @ts-ignore
                return new HDWalletProvider(passphrase, 'https://kovan.infura.io/' + ethereum.infura.accessToken, index);
            },
            network_id: '*',
            gas: 6500000,
            gasPrice: 10e9
        },
        rinkeby: {
            provider: function (passphrase, index) {
                // @ts-ignore
                return new HDWalletProvider(passphrase, 'https://rinkeby.infura.io/' + ethereum.infura.accessToken, index);
            },
            network_id: '*',
            gas: 6500000,
            gasPrice: 10e9
        },
        mainnet: {
            provider: function (passphrase, index) {
                // @ts-ignore
                return new HDWalletProvider(passphrase, 'https://mainnet.infura.io/' + ethereum.infura.accessToken, index);
            },
            network_id: '*',
            gas: 6500000,
            gasPrice: 10e9
        },
        ropsten: {
            provider: function (passphrase, index) {
                // @ts-ignore
                return new HDWalletProvider(passphrase, 'https://ropsten.infura.io/' + ethereum.infura.accessToken, index);
            },
            network_id: 3,
            gas: 6500000,
            gasPrice: 10e9
        }
    }
};
const withTimeout = (millis, promise, originalReject) => {
    const timeout = new Promise((resolve, reject) => setTimeout(() => originalReject(`Could not connect`), millis));
    return Promise.race([
        promise,
        timeout
    ]);
};
export const getCurrentAccount = async (web3) => {
    return new Promise(async (resolve, reject) => {
        try {
            // const currentAccounts = await withTimeout(5000, web3.eth.getAccountsPromise(), () => {
            //     console.log('Could not connect to Ethereum network')
            //     return reject('Could not connect to Ethereum network')
            // })
            // resolve({
            //     address: currentAccounts[0],
            //     privateKey: web3.currentProvider.wallets[currentAccounts[0].toLowerCase()]._privKey.toString('hex')
            // })
            web3.eth.getAccounts((err, currentAccounts) => {
                resolve({
                    address: currentAccounts[0],
                    privateKey: web3.currentProvider.wallets[currentAccounts[0].toLowerCase()]._privKey.toString('hex')
                });
            });
        }
        catch (e) {
            console.log(e);
        }
    });
};
Bluebird.config({
    // Enable warnings
    warnings: true,
    // Enable long stack traces
    longStackTraces: true,
    // Enable cancellation
    cancellation: true,
    // Enable monitoring
    monitoring: true
});
export const create = async (passphrase, index = 0) => {
    console.log('[BlockHub] Initializing wallet...');
    const provider = ethereum.networks[ethereum.activeNetwork].provider(passphrase, index);
    const web3 = new Web3(provider);
    Bluebird.promisifyAll(web3.eth, { suffix: 'Promise' });
    return new Promise(async (resolve, reject) => {
        const account = await getCurrentAccount(web3);
        resolve(Object.assign({ web3,
            provider }, account));
    });
};
//# sourceMappingURL=wallet.js.map