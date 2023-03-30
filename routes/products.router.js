const express = require('express');


// const ProductsService = require('../services/product.service');
const router = express.Router();
// const service = new ProductsService();

const { index, show, create } = require('../controllers/products');

router.get('/', index);

router.get('/:id', show);

router.post('/', create);

router.put('/:id', async (req, resp, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    resp.json(product);
  } catch (error) {
    next(error);
  }
})

router.delete('/:id', async (req, resp) => {
  const { id } = req.params;
  const productdlt = await service.delete(id);
  resp.json(productdlt);
})


module.exports = router;