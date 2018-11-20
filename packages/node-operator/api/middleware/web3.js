const Web3 = require('web3');

const web3Setup = async (req, res, next) => {

  const web3 = new Web3(new Web3.providers.HttpProvider(
    process.env.ETH_PROVIDER || 'http://localhost:8545'
  ));


  const connect = false;

  if (connect && await web3.isConnected()) {
    /*
    const [networkId, accounts] = await Promise.all([
      web3.eth.net.getNetworkId(),
      web3.eth.getAccounts()
    ]);
    */
    const { coinbase, accounts } = web3.eth;
    const balance = await web3.eth.getBalance(web3.eth.coinbase);
    
    req.web3 = web3;
    req.web3Data = {
      accounts,
      coinbase,
      balance
    }
  }
  next();
};

module.exports = web3Setup;