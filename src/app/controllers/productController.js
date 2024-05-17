const logger = require('../middlewares/logger');
const apiBigcommerce = require('../helpers/api-bigcommerce');

class productController {
    // GET /product
    async index(req, res) {
        try {
            const data = await apiBigcommerce('GET', '/v3/catalog/products');
            res.render('bigcommerce/product/grid', {products: data.data.data});
        } catch (err) {
            logger.error(err);
            res.json(err);
        }
    }
}

module.exports = new productController;
