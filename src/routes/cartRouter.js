const express = require('express');
const router = express.Router();

const cartController = require('../app/controllers/cartController');

router.get('/:cartId', cartController.show);
router.post('/', cartController.create);

module.exports = router;
