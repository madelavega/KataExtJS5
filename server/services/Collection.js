/**
 * Están dados de alta los siguientes servicios:
 * GET /services/collection obtiene la lista de comics de mi colección
 * POST /services/collection añade un nuevo cómic a mi coleccion
 * PUT /eervices/collection/{id} modifica un cómic de mi colección (aunque de momento no se usa en la aplicación)
 * DELETE /eervices/collection/{id} Elimina el cómic con id 'id' de mi colección
 */
exports.Collection = (function () {
    'use strict';

    var save, collection = require('./../data/collection.json'),
        fs = require('fs'),
        Q = require('q');

    save = function () {
        var d = Q.defer();

        //persistimos en el sistema de ficheros
        fs.writeFile('./data/collection.json', JSON.stringify(collection, null, '\t'), function (err) {
            if (err) {
                console.log(err);
                d.reject(err);
            } else {
                d.resolve();
            }
        });

        return d.promise;
    };

    return function (router) {
        router.route('/collection')
            .post(function (req, res) {
                var sortedIds;

                if (collection.length) {
                    // Si ya hay registros, calculamos cuál será el próximo id, extrayendo
                    // todos los ids y ordenandolos
                    sortedIds = collection.map(function (comic) {
                        return comic.id;
                    }).sort(function (val1, val2) {
                        return val1 > val2;
                    });

                    // incrementamos el id
                    req.body.id = sortedIds[sortedIds.length - 1] + 1;
                } else {
                    // ningún cómic aún, por lo que empezamos con el id 1
                    req.body.id = 1;
                }

                collection.push(req.body);

                //salvamos y devolvemos el registro creado
                save().then(function () {
                    res.json(req.body);
                });
            })
            .get(function (req, res) {
                // devolvemos la lista de mi colección
                res.json(collection);
            });
        router.route('/collection/:id')
            .put(function (req, res) {
                var id = req.params.id;

                // sobreescribimos la colección
                collection = collection.map(function (comic) {
                    // si el id coincide, sobreescribimos
                    if (comic.id === id) {
                        comic = req.body;
                    }
                    return comic;
                });
                save().then(function () {
                    // respondemos a la peticion con los datos del cómic sobreescrito
                    res.json(collection.filter(function (comic) {
                        return comic.id === id
                    })[0]);
                });
            })
            .delete(function (req, res) {
                var id = parseInt(req.params.id);

                // Sobreescribimos la colección con los datos antiguos excepto
                // los del cómic cuyo id coincida con el recogido como parámetro de url
                collection = collection.filter(function (comic) {
                    return comic.id !== id
                });
                save().then(function () {
                    //devolvemos la coleccion
                    res.json(collection);
                });
            });
    }
}());