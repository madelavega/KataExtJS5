/**
 * Vista principal que contiene las dos vistas de la aplicación
 */
Ext.define('kataExtJS.view.main.Main', {
    extend  : 'Ext.tab.Panel',
    requires: ['kataExtJS.view.marvelcomic.MarvelComics', 'kataExtJS.view.micoleccion.Coleccion'],
    items   : [
        {
            xtype: 'marvelcomics',
            title: 'Marvel comics'
        },
        {
            xtype: 'coleccion',
            title: 'Mi colección'
        }
    ]
})