/**
 * ViewController para la vista kataExtJS.view.disponibles.Disponibles
 */
Ext.define('kataExtJS.view.disponibles.DisponiblesController', {
    extend: 'Ext.app.ViewController',
    alias : 'controller.disponibles',

    /**
     * Ejecucion inicial, donde podemos inicializar datos o añadir listeners de
     * eventos de applicacion entre otros.
     */
    init: function () {
        var that = this, store;
        store = that.getStore('disponibles');
        store.on('datachanged', function () {
            that.getViewModel().set('disponiblesLength', store.count());
        });
    },

    /**
     * Se dispara cuando se realiza doble click sobre un registro del tipo
     * kataExtJS.model.MarvelComic dentro del contexto de la vista
     * kataExtJS.view.disponibles.Disponibles
     *
     * @param {kataExtJS.view.marvelcomic.List} marvelComicList
     * @param {kataExtJS.model.MarvelComic} mcomic
     */
    listDblClicked: function (marvelComicList, mcomic) {
        this.includeInMyCollection(marvelComicList, mcomic);
    },

    /**
     * Incluye un cómic de marvel a nuestra colección
     *
     * @param {kataExtJS.view.marvelcomic.List} marvelComicList
     * @param {kataExtJS.model.MarvelComic} mcomic comic de marvel que vamos a añadir a nuestra coleccion
     */
    includeInMyCollection: function (marvelComicList, mcomic) {
        //A partir de los datos del mccomic, creamos una instancia de kataExtJS.model.ColeccionComic
        var myNewComic = Ext.create('kataExtJS.model.ColeccionComic', {
            'idComic'    : mcomic.get('id'),
            'title'      : mcomic.get('title'),
            'description': mcomic.get('description'),
            'pageCount'  : mcomic.get('pageCount'),
            'buyDate'    : new Date(), //el modelo hará el parseo correspondiente para el guardado en servidor (ver modelo)
            'salesDate'  : mcomic.get('salesDate'),
            'series'     : mcomic.get('series'),
            'price'      : mcomic.get('price'),
            'creators'   : mcomic.get('creators'),
            'characters' : mcomic.get('characters')
        });

        //guardamos esta instancia en el servidor
        myNewComic.save({
            /**
             * Función de callback cuando se ha completado el proceso de guardado
             * @param {kataExtJS.model.ColeccionComic} nc nuestro nuevo cómic
             * @param {Ext.data.operation.Operation} operation
             * @param {Boolean} success indica si la operacion se ha ejecutado correcta o incorrectamente
             */
            callback: function (nc, operation, success) {
                var marvelComicsStore = marvelComicList.getStore();
                if(success) {
                    //si el guardado ha ido correctamente, eliminamos el registro
                    //de la lista de cómics de marvel disponibles
                    marvelComicsStore.remove(marvelComicsStore.findRecord('id', nc.get('idComic')));

                    //lanzamos un evento de aplicación notificando que disponemos de un nuevo cómic (nc)
                    //en nuestra colección
                    kataExtJS.app.fireEvent("addToCollection", nc);
                }
            }
        });
    }
});
