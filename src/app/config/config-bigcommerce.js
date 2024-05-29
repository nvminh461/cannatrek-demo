const BigCommerce = require('node-bigcommerce');
const dotenv = require('dotenv').config();

const configBigcommerce = new BigCommerce({
    clientId: process.env.CLIENT_ID,
    accessToken: process.env.ACCESS_TOKEN,
    storeHash: process.env.STORE_HASH,
    responseType: 'json',
    apiVersion: 'v3',
});

module.exports = configBigcommerce;
