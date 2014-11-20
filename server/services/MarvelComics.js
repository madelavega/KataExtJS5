/**
 * Están dados de alta los siguientes servicios:
 * GET /services/MarvelComics devuelve la lista de cómis de marvel. Admite el parametro
 *                            userId (en nuestra aplicación con cualquier valor) para recibir
 *                            los cómics que aún no han sido añadidos a mi colección
 */
exports.MarvelComics = (function () {
    'use strict';

    var readMyCollection, marvelComics = require("./../data/marvelComics.json"),
        fs = require('fs'),
        Q = require('q');

    readMyCollection = function () {
        var d = Q.defer();

        //leemos del sistema de ficheros
        fs.readFile('./data/collection.json', 'utf8', function (err, data) {
            if (err) {
                d.reject(err);
            } else {
                d.resolve(JSON.parse(data));
            }
        });

        return d.promise;
    };

    return function (router) {
        router.route('/marvelComics')
            .get(function (req, res) {
                var userId = req.query.userId;
                if (userId) {
                    // si recibimos el parámetro de request userId,
                    // devolvemos la lista que resulta de eliminar los
                    // comics de marvel con ids que coincidan con
                    //la propiedad 'idComic' de mi colección
                    readMyCollection().then(function (collection) {
                            res.json(marvelComics.filter(function (mcomic) {
                                var ids;
                                ids = collection.map(function (comic) {
                                    return comic.idComic;
                                });
                                return ids.indexOf(mcomic.id) === -1;
                            }))
                        }
                    );
                } else {
                    //si no, devolvemos todos
                    res.json(marvelComics);
                }
            });
    }
}());