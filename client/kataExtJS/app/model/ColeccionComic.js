Ext.define('kataExtJS.model.ColeccionComic', {
    extend    : 'Ext.data.Model',
    idProperty: 'id',
    fields    : [
        {name: 'id', type: 'number'},
        {name: 'idComic', type: 'number'},
        {name: 'title', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'pageCount', type: 'number'},
        {name: 'buyDate', type: 'date', dateReadFormat : 'Y-m-dTH:i:sO', dateWriteFormat: 'Y-m-d\\TH:i:sO'},
        {name: 'salesDate', type: 'date', dateReadFormat : 'Y-m-dTH:i:sO', dateWriteFormat: 'Y-m-d\\TH:i:sO'},
        {name: 'series'},
        {name: 'price', type: 'number'},
        {name: 'creators'},
        {name: 'characters'}
    ],
    /**
     * Están dados de alta los siguientes servicios:
     * GET /services/collection obtiene la lista de comics de mi colección
     * POST /services/collection añade un nuevo cómic a mi coleccion
     * PUT /eervices/collection/{id} modifica un cómic de mi colección (aunque de momento no se usa en la aplicación)
     * DELETE /eervices/collection/{id} Elimina el cómic con id 'id' de mi colección
     */
    proxy: {
        type  : 'rest',
        url   : '/services/collection',
        reader: {
            type: 'json'
        }
    }
});