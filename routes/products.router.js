const express = require('express');


const ProductsService = require('../services/product.service');

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, resp) => {
  const products = await service.find();
  resp.json(products);
})

router.get('/:id', async (request, response, next) => {
  try {
    const { id } = request.params;
    const product = await service.findOne(id);
    response.json(product);
  } catch (error) {
    next(error);
  }
})

router.post('/', async (req, resp) => {
  const body = req.body;
  const newProduct = await service.create(body);
  resp.status(201).json({
    message: 'created',
    data: newProduct,
  });
})

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