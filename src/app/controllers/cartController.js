const logger = require('../middlewares/logger');
const BigCommerce = require('../config/config-bigcommerce');

class cartController {

    // [POST] /api/v2/cart
    async create(req, res) {
        try {
            const result = await BigCommerce.post(`/carts`, req.body);
            return res.json(result.data);
        } catch (error) {
            logger.error(error);
            return res.status(500).json({message: 'Internal server error'});
        }
    }

    // [GET] /api/v2/cart/:cartId
    async show(req, res) {
        try {
            const result = await BigCommerce.get(`/carts/${req.params.cartId}`);
            return res.json(result.data);
        } catch (error) {
            logger.error(error);
            return res.status(500).json({message: 'Internal server error'});
        }
    }


}

module.exports = new cartController();
