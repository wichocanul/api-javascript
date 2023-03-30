const ProductsService = require('../services/product.service');
const service = new ProductsService();

const index = async (req, resp) => {
  const products = await service.find();

  resp.status(404).json(products); // 200
}

const show = async (request, response) => {
  try {
    const { id } = request.params;
    // request.query http://localhost:300/api/products?startDate=2023-03-30&endDate=2023-03-30
    const {startDate, endDate} = request.query;

    if (!id) {
        response.status(404);

        response.send({
            message: "user not found"
        });

        return
    }
    const product = await service.findOne(id);
    response.json(product);
  } catch (error) {
    response.status(500)
    response.send({
        error: {
            message: "ha ocurrido un error",
        }
    })
  }
}

const create = async (req, resp) => {
  const body = req.body;
  const newProduct = await service.create(body);
  resp.status(201).json({
    message: 'created',
    data: newProduct,
  });
}

module.exports = { index, show, create }