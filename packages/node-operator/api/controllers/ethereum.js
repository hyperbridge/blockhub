const { promisify } = require('util');

exports.get_peers = req => new Promise((resolve, reject) => {
  req.web3.net.getPeerCount((err, peerCount) => {
    if (err) reject(err);
    resolve({ peerCount });
  });
});

/*
exports.get_peers = async req => {
  const peerCount = await promisify(req.web3.net.getPeerCount());
  return { peerCount };
};
*/