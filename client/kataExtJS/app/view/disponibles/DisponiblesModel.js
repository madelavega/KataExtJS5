/**
 * ViewModel para la vista kataExtJS.view.disponibles.Disponibles
 */
Ext.define('kataExtJS.view.disponibles.DisponiblesModel', {
    extend: 'Ext.app.ViewModel',
    alias : 'viewmodel.disponibles',

    stores: {
        disponibles: {
            model   : 'kataExtJS.model.MarvelComic',
            autoLoad: true,
            proxy   : {
                type       : 'rest',
                //mandamos el parámetro userId para que el servidio me devuelva solo los posibles comics para el usuario
                extraParams: { userId: 'X' },
                url        : '/services/MarvelComics',
                reader     : {
                    type: 'json'
                }
            }
        }
    }
});