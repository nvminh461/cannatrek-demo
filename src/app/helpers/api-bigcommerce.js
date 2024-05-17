const axios = require('axios');
const dotenv = require('dotenv').config();

const BASE_URL = 'https://api.bigcommerce.com/stores/' + process.env.STORE_HASH;

const apiBigcommerce = (method, endpoint, data = null) => {
    const url = `${BASE_URL}${endpoint}`;

    const headers = {
        'X-Auth-Token': process.env.ACCESS_TOKEN,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    const config = {
        method,
        url,
        headers,
    };

    if (data) {
        config.data = data;
    }

    return axios(config);
};

module.exports = apiBigcommerce;
