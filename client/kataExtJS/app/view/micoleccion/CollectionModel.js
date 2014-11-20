/**
 * ViewModel para la vista kataExtJS.view.micoleccion.Coleccion
 */
Ext.define('kataExtJS.view.micoleccion.ColeccionModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.coleccion',

    formulas: {
        //creamos la fórmula para el databinding entre el registro seleccionado de la lista
        //kataExtJS.view.micoleccion.List y el formulario de detalle
        comic: {
            bind: {
                record: '{coleccionlist.selection}'
            },
            get : function (data) {
                return data.record;
            }
        }
    },

    //Creamos nuestro store de instancias de kataExtJS.model.ColeccionComic
    //para alimentar al listado kataExtJS.view.micoleccion.List
    stores : {
        comics : {
            model: 'kataExtJS.model.ColeccionComic',
            autoLoad : true
        }
    }
});