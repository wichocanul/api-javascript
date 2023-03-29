const express = require('express');

const router = express.Router();

router.get('/', (req, resp) => {
  const { limit, ofset } = req.query;
  if(limit && ofset) {
    resp.json(
      {
        limit,
        ofset
      }
    );
  } else {
    resp.send('No hay parametros');
  }
})

module.exports = router;