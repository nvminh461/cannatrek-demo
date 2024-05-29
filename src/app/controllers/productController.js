const logger = require('../middlewares/logger');
const BigCommerce = require('../config/config-bigcommerce');

class productController {

    // GET /product
    async index(req, res) {
        try {
            const data = await BigCommerce.get('/catalog/products');
            res.render('bigcommerce/product/grid', {
                products: data.data,
                entity: 'product'
            });
        } catch (err) {
            logger.error(err);
            res.json(err);
        }
    }

    // GET /product/create
    create(req, res) {
        res.render('bigcommerce/product/form', {action: 'create'});
    }

    // POST /product/store
    async store(req, res) {
        try {
            const data = await BigCommerce.post('/catalog/products', req.body);
            res.redirect('/product');
        } catch (err) {
            logger.error(err);
            res.json(err);
        }
    }

    // GET /product/:id/edit
    async edit(req, res) {
        try {
            const data = await BigCommerce.get(`/catalog/products/${req.params.id}`);
            res.render('bigcommerce/product/form', {product: data.data, action: 'edit'});
        } catch (err) {
            logger.error(err);
            res.json(err);
        }
    }

    // PUT /product/:id/update
    async update(req, res) {
        try {
            const data = await BigCommerce.put(`/catalog/products/${req.params.id}`, req.body);
            res.redirect('/product');
        } catch (err) {
            logger.error(err);
            res.json(err);
        }
    }

    // GET /product/:id/delete
    async delete(req, res) {
        try {
            const data = await BigCommerce.delete(`/catalog/products/${req.params.id}`);
            res.redirect('/product');
        } catch (err) {
            logger.error(err);
            res.json(err);
        }
    }

    // GET /product/:id
    async show(req, res) {
        try {
            const data = await BigCommerce.get(`/catalog/products/${req.params.id}`);
            res.render('bigcommerce/product/show', {product: data.data});
        } catch (err) {
            logger.error(err);
            res.json(err);
        }
    }
}

module.exports = new productController;
