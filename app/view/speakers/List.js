Ext.define('DelphiDayApp.view.speakers.List', {
    extend: 'Ext.Panel',
    xtype: 'speakers-list',

    requires: [
        'Ext.Toolbar',
        'Ext.dataview.List',
        'Ext.tab.Panel',
        'DelphiDayApp.store.Speakers'
    ],

    title: 'Speakers',

    layout: 'fit',

    padding: 5,

    items: [{
        xtype: 'list',
        //itemCls: 'demo-item-border', 
        disableSelection: true,       
        itemCls: 'demo-shadow-item',
        store: {
            type: 'speakers'
        },
        itemTpl: 
            '<div class="list-container">' +
            '  <div class="list-item-left"><img src="/resources/{image}"></div>' +
            '  <div class="list-item-right"><b>{name}</b><br>{title}<br><br>{detail}</div>' +
            '  <div class="list-clear"></div>' +
            '</div>'
    }]

});
