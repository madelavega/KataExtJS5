Ext.define('kataExtJS.view.micoleccion.Coleccion', {
    extend  : 'Ext.panel.Panel',
    requires: ['Ext.layout.container.Form', 'kataExtJS.view.micoleccion.List', 'Ext.form.field.Number', 'Ext.form.field.Date', 'Ext.form.field.Time'],

    xtype: 'coleccion',

    controller: 'coleccion',
    viewModel : {
        type: 'coleccion'
    },
    layout    : {
        type: 'border'
    },
    items     : [
        {
            xtype    : 'form',
            region   : 'north',
            reference: 'comicDetail',
            layout   : {
                type : 'hbox',
                align: 'stretch'
            },
            split    : true,
            height   : 255,
            title    : 'Detalle',
            bind     : {
                title: 'Detalle {comic.title}'
            },

            items: [
                {
                    flex       : .5,
                    layout     : 'form',
                    defaultType: 'textfield',
                    defaults   : {
                        readOnly  : true,
                        margin    : '10 10 10 10',
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
                            fieldLabel: 'Fecha de compra',
                            bind      : '{comic.buyDate}'
                        },
                        {
                            xtype     : 'timefield',
                            fieldLabel: 'Hora de compra',
                            bind      : '{comic.buyDate}'
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
                    margin    : '10 10 10 10',
                    bind      : '{comic.description}',
                    flex      : .5,
                    fieldLabel: 'Descripción'
                }

            ]
        },
        {
            xtype    : 'coleccionlist',
            reference: 'coleccionlist',
            region   : 'center',
            title    : 'Mi colección',
            width    : 550,
            bind     : {
                store: '{comics}',
                title: 'Mi colección [{comicsLength}]'
            },
            tbar     : [
                {
                    text     : 'Añadir',
                    listeners: {
                        click: 'onAddClicked'
                    }
                }

            ]

        }
    ]
});
