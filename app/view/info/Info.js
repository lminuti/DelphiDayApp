Ext.define('DelphiDayApp.view.info.Info', {
    extend: 'Ext.Panel',
    xtype: 'info',

    title: 'Informazioni',

    requires: [
        'DelphiDayApp.view.info.InfoController'
    ],

    controller: 'info',

    layout: 'vbox',

    items: [{
        xtype: 'grid',
        flex: 1,
        store: {
            fields: ['name', 'value'],
        },
        hideHeaders: true,
        columns: [{
            text: 'name',
            dataIndex: 'name',
            width: 150
        },{
            text: 'value',
            dataIndex: 'value',
            flex: 1
        }]             
    },{
        xtype: 'button',
        reference: 'install-button',
        text: 'Installa app',
        ui: 'action',
        padding: 20,
        margin: 20,
        disabled: true
    }]

});