const express = require('express');
const router = express.Router();

const productController = require('../app/controllers/productController');

router.get('/create', productController.create);
router.post('/store', productController.store);
router.get('/:id', productController.show);
router.get('/:id/edit', productController.edit);
router.put('/:id/update', productController.update);
router.delete('/:id/delete', productController.delete);
router.get('/', productController.index);

module.exports = router;
