const express = require('express');
const router = express.Router();

const { index, create } = require('../controllers/morty');

router.get('/', index);

router.post('/', create);

module.exports = router;