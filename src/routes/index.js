const handleErrors = require("../app/helpers/handel-errors");
const authRouter = require('./authRouter');
const productRouter = require('./productRouter');

function routes(app) {

    app.use('/auth', authRouter);
    // render home page
    app.use('/load', (req, res) => {
        res.render('home');
    });
    // route product
    app.use('/product', productRouter);
    // route error 404
    app.use(function (req, res, next) {
        res.status(404).render('error/_404');
    });
}

module.exports = routes;
