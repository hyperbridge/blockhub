const handler = require('./handler');

const checkAuth = async (req, res, next) => {
  /*
    // Auth check middleware logic

  if (authFailed) {
    return {
      msg: 'Authorization failed',
      status: 401
    }
  }

  */

  req.userData = {
    id: '34i384j8azj8j2348'
  }
  next();
};

module.exports = handler(checkAuth);