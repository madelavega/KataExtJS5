Ext.define('kataExtJS.view.micoleccion.List', {
    extend   : 'Ext.grid.Panel',
    xtype    : 'coleccionlist',
    columns  : [
        {
            header   : 'Título',
            flex     : 1,
            dataIndex: 'title'
        },
        {
            header   : 'F. Compra',
            dataIndex: 'buyDate',
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
        },
        {
            header   : '',
            xtype    : 'templatecolumn',
            width    : 50,
            tdCls    : 'delete-column',
            sortable : false,
            draggable: false,
            align    : 'center',
            tpl      : '<span style="border-radius: 10px;display: inline-block;width: 17px;height: 17px;background: red;color: white;font-weight: bolder;border: 1px solid #000;font-family: verdana;text-align: center;font-size: 12px;line-height: 14px;cursor: pointer;">X</span>'
        }
    ],
    listeners: {
        cellclick: 'onCellClicked'
    }
});
