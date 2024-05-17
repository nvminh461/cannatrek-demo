const BigCommerce = require('node-bigcommerce');
const logger = require('../middlewares/logger');
const dotenv = require('dotenv').config();
const updateEnvFile = require('../helpers/env-updater');

const bigCommerce = new BigCommerce({
    clientId: process.env.CLIENT_ID,
    secret: process.env.CLIENT_SECRET,
    callback: process.env.CALLBACK_URI,
    responseType: 'json',
});

class authController {

    // GET /auth
    async auth(req, res) {
        try {
            logger.info(bigCommerce);
            const data = await bigCommerce.authorize(req.query);
            logger.info(data);
            let token = data.access_token;
            let storeHash = data.context.split('/')[1];
            updateEnvFile('ACCESS_TOKEN', token);
            updateEnvFile('STORE_HASH', storeHash);
            res.redirect('/load');
        } catch (err) {
            logger.error(err);
        }
    }
}

module.exports = new authController;
