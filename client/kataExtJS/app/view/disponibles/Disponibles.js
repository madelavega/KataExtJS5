Ext.define('kataExtJS.view.disponibles.Disponibles', {
    extend: 'Ext.window.Window',
    xtype : 'disponibles',

    title     : 'Añadir a mi colección',
    layout    : 'fit',
    autoShow  : true,
    modal     : true,
    height    : 500,
    viewModel : {
        type: 'disponibles'
    },
    controller: 'disponibles',
    width     : 800,
    items     : {
        xtype    : 'marvelcomiclist',
        reference: 'disponibleslist',
        bind     : {
            store: '{disponibles}',
            title: 'Listado de comics por comprar [{disponiblesLength}]'
        },
        listeners: {
            //añadimos el listener para el evento itemdblclick que sera manejado por nuestro ViewController
            //kataExtJS.view.disponibles.DisponiblesController
            itemdblclick: 'listDblClicked'
        }
    }
});