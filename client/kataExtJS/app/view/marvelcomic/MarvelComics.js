Ext.define('kataExtJS.view.marvelcomic.MarvelComics', {
    extend  : 'Ext.panel.Panel',
    requires: ['Ext.layout.container.Form', 'kataExtJS.view.marvelcomic.List', 'Ext.form.field.*'],

    xtype: 'marvelcomics',

    controller: 'marvel',
    viewModel : {
        type: 'marvel'
    },
    layout    : {
        type: 'border'
    },
    items     : [
        {
            xtype : 'form',
            region: 'north',
            layout: {
                type : 'hbox',
                align: 'stretch'
            },
            split : true,
            height: 255,
            title      : 'Detalle',
            bind       : {
                title: 'Detalle {comic.title}'
            },

            items      : [

                {
                    flex       : .5,
                    layout     : 'form',
                    defaultType: 'textfield',
                    defaults   : {
                        readOnly  : true,
                        margin: '10 10 10 10',
                        width     : '90%',
                        labelWidth: 150
                    },
                    items      : [
                        {
                            fieldLabel: 'Titulo',
                            bind      : '{comic.title}'
                        },
                        {
                            fieldLabel: 'Número de páginas',
                            xtype     : 'numberfield',
                            bind      : '{comic.pageCount}'
                        },
                        {
                            xtype     : 'datefield',
                            format    : "d.m.Y",
                            fieldLabel: 'Fecha de venta',
                            bind      : '{comic.salesDate}'
                        },
                        {
                            xtype     : 'timefield',
                            fieldLabel: 'Hora de venta',
                            bind      : '{comic.salesDate}'
                        },
                        {
                            fieldLabel: 'Precio',
                            xtype     : 'numberfield',
                            bind      : '{comic.price}'
                        },
                        {
                            fieldLabel: 'Series',
                            bind      : '{comic.series}'
                        }
                    ]
                },
                {
                    xtype     : 'textarea',
                    margin: '10 10 10 10',
                    bind      : '{comic.description}',
                    flex      : .5,
                    fieldLabel: 'Descripción'
                }
            ]
        },
        {
            xtype    : 'marvelcomiclist',
            reference: 'marvellist',
            region   : 'center',
            title    : 'Listado de comics',
            width    : 550,
            bind     : {
                store: '{comics}',
                title: 'Listado de comics [{comics.data.length}]'
            }
        }
    ]
})
;
