Ext.define('kataExtJS.model.MarvelComic', {
    extend    : 'Ext.data.Model',
    idProperty: 'id',
    fields    : [
        {name: 'id', type: 'number'},
        {name: 'title', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'pageCount', type: 'number'},
        {name: 'salesDate', type: 'date', mapping: 'dates[0].date', dateReadFormat : 'Y-m-dTH:i:sO'},
        {name: 'series', mapping: 'series.name'},
        {name: 'price', type: 'number', mapping: 'prices[0].price'},
        {name: 'creators'},
        {name: 'characters'}
    ],

    /**
     * Están dados de alta los siguientes servicios:
     * GET /services/MarvelComics devuelve la lista de cómis de marvel. Admite el parametro
     *                            userId (en nuestra aplicación con cualquier valor) para recibir
     *                            los cómics que aún no han sido añadidos a mi colección, pudiéndose
     *                            reutilizar para la Kata
     */
    proxy: {
        type  : 'rest',
        url   : '/services/MarvelComics',
        reader: {
            type: 'json'
        }
    }
});