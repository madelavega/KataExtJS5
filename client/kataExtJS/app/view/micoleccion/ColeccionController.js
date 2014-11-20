/**
 * ViewController para la vista kataExtJS.view.micoleccion.Coleccion
 */
Ext.define('kataExtJS.view.micoleccion.ColeccionController', {
    extend  : 'Ext.app.ViewController',
    alias   : 'controller.coleccion',
    requires: ['kataExtJS.view.disponibles.Disponibles', 'kataExtJS.view.disponibles.DisponiblesModel', 'kataExtJS.view.disponibles.DisponiblesController'],

    /**
     * Ejecucion inicial, donde podemos inicializar datos o añadir listeners de
     * eventos de applicacion entre otros.
     */
    init: function () {
        var that = this, store;
        store = that.getStore('comics');
        // actualizamos dinamicamente el valor de comicsLength del viewmodel cada
        // vez que cambian los datos del store, para actualizar el contador de registros del
        // título del gird
        store.on('datachanged', function () {
            that.getViewModel().set('comicsLength', store.count());
        });

        // escuchamos el evento de aplicación 'addToCollection', que se dispara cada vez que
        // se añade un nuevo cómic a nuestra colección en el servidor, de forma que podamos actualizar
        // los componentes que interesen
        kataExtJS.app.on('addToCollection', function (myNewComic) {
            store.add(myNewComic);
        });
    },

    /**
     * Se ejecuta cuando hacemos click sobre el boton añadir de la lista de mi coleccion
     */
    onAddClicked: function () {
        // Abrimos una ventana emergente (instancia u objeto heredado de Ext.window.Window) en donde aparecerá la lista (reutilizando
        // kataExtJS.view.marvelcomic.List) de comics que aun
        // están disponibles para añadir a nuestra colección. Esto se hara llamando al servicio
        // services/MarvelComics, pero para que devuelva solo los cómics no añadidos a nuestra colecció
        // se debera pasar como parámetro un 'userId' con el valor que se quiera (se entendera que siempre es el nuestro).

        // Cuando se haga doble click sobre cualquiera de los comics de la lista, estos deberán añadirse a nuestra colección
        // realizando una llamada REST tipo POST al servicio services/collection. También debera reflejarse el nuevo registro en
        // la lista.

        // Sera necesario importar las dependencias, añadiéndolas en la propiedad requires de este controller
        Ext.create('kataExtJS.view.disponibles.Disponibles');
    },

    /**
     * Se ejecuta cuando hacemos click sobre cualquiera de las celdas de la lista.
     *
     * @param {kataExtJS.view.micoleccion.List} list
     * @param {HTMLElement} td
     * @param {HTMLElement} cellIndex
     * @param {kataExtJS.model.ColeccionComic} coleccionComic
     */
    onCellClicked: function (list, td, cellIndex, coleccionComic) {
        // comprobamos qeu el click sea sobre la celda
        if (Ext.get(td).hasCls('delete-column')) {
            this.deleteColeccionComic(coleccionComic);
        }
    },

    /**
     * Elimina un comic de nuestra colección
     *
     * @param {kataExtJS.model.ColeccionComic} coleccionComic
     */
    deleteColeccionComic : function (coleccionComic) {
        var that = this, coleccionList, index, store;

        store = that.getStore('comics');
        index = store.indexOfId(coleccionComic.get('id'));

        // realizamos la peticion de borrado
debugger
        coleccionComic.erase({
            /**
             * Función de callback cuando se ha completado el proceso de borrado
             * @param {kataExtJS.model.ColeccionComic} cb cómic borrado
             * @param {Ext.data.operation.Operation} operation
             * @param {Boolean} success indica si la operacion se ha ejecutado correcta o incorrectamente
             */
            callback : function (cb, operation, success) {
                var selectable;
                if(success) {
                    // comprobamos si existe un registro antes o despues del borrado para seleccionarlo
                    coleccionList = that.getReferences().coleccionlist;
                    selectable = store.getAt(index) || store.getAt(index - 1);
                    if (selectable) {
                        // un objeto del tipo Ext.grid.Panel no tiene acceso directo a los registros seleccionados,
                        // si no que tiene que hacerlo a través de su modelo de selección (Ext.selection.Model)
                        coleccionList.getSelectionModel().select(selectable);
                    }
                }
            }
        });
    }
});
