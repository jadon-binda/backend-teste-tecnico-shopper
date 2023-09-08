const { Router } = require('express');
const router = Router();
const products = require('./controllers/products');

router.put('/products/:id', products.updateProductPrice);
router.get('/products', products.listProducts);

module.exports = router;