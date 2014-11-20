/*global require: false, console: false*/
(function () {
    'use strict';

    var port = 8080, router,
        controllers,
        express = require('express'),
        app = express(),
        path = require('path'),
        bodyParser = require('body-parser');

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    router = express.Router();
    router.get('/', function (req, res) {
        res.sendfile(path.resolve(__dirname + '/../client') + '/index.html');
    });

    app.use('/services', router);
    app.use(express.static(path.resolve(__dirname + '/../client') + '/'));

    // se definen y cargan los controllers de la aplicacio
    controllers = ['Collection', 'MarvelComics'];
    controllers.forEach(function (controller) {
        require(['.', 'services', controller].join('/'))[controller](router);
    });

    app.listen(port);

    console.log('Listening', port);
}());


