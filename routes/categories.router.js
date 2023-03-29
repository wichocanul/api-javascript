const express = require('express');

const router = express.Router();

router.get('/:categoryId/product/:productId', (req, resp) => {
  const { categoryId, productId } = req.params;
  resp.json(
    {
      categoryId,
      productId
    }
  )
})

module.exports = router;