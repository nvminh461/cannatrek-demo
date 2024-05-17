const handleErrors = require("../app/helpers/handel-errors");

function routes(app) {
    // render home page
    app.use('/', (req, res) => {
        res.render('home');
    });

    // route error 404
    app.use(function (req, res, next) {
        res.status(404).render('error/_404');
    });
}

module.exports = routes;
