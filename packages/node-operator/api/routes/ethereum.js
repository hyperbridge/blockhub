const router = require('express').Router();
const handler = require('../middleware/handler');

const ethereumController = require('../controllers/ethereum');

router.get('/peers', handler(ethereumController.get_peers));


module.exports = router;
