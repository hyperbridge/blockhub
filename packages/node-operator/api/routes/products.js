const router = require('express').Router();
const handler = require('../middleware/handler');

const productsController = require('../controllers/products');

router.get('/:productId', handler(productsController.get_product));

router.post('/', handler(productsController.post_product));

router.patch('/:productId', handler(productsController.patch_product));

router.delete('/:productId', handler(productsController.delete_product));

router.get('/tags/:tagsType/:tags', handler(productsController.get_products_tags));

router.get('/name/:productName', handler(productsController.get_products_name));

router.get('/filters/:properties', handler(productsController.get_products_filters));

module.exports = router;