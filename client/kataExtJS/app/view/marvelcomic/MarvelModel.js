/**
 * ViewModel para la vista kataExtJS.view.marvelcomic.MarvelComics
 */
Ext.define('kataExtJS.view.marvelcomic.MarvelModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.marvel',

    formulas: {
        //realizamos el databinding para mostrar en el formulario los datos del
        //registro seleccionado en la referencia marvellist
        comic: {
            bind: {
                record: '{marvellist.selection}'
            },
            get : function (data) {
                return data.record;
            }
        }
    },

    //damos de alta el store para enlazarlo a la lista
    stores : {
        comics : {
            model: 'kataExtJS.model.MarvelComic',
            autoLoad : true
        }
    }
});