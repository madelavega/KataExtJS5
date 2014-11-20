Ext.define('kataExtJS.view.marvelcomic.List', {
    extend   : 'Ext.grid.Panel',
    xtype    : 'marvelcomiclist',
    columns  : [
        {
            header   : 'Título',
            flex     : 1,
            dataIndex: 'title'
        },
        {
            header   : 'F. Venta',
            dataIndex: 'salesDate',
            xtype    : 'datecolumn',
            format   : 'd.m.Y H:i',
            width    : 150,
            align    : 'center'
        },
        {
            header   : 'Precio',
            dataIndex: 'price',
            align    : 'right',
            xtype    : 'templatecolumn',
            tpl      : '{price}$'
        },
        {
            header   : 'Nª Páginas',
            width    : 150,
            dataIndex: 'pageCount',
            align    : 'right'
        }
    ]
});
