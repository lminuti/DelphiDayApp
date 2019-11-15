Ext.define('DelphiDayApp.view.tracks.List', {
    extend: 'Ext.Panel',
    xtype: 'tracks-list',

    requires: [
        'Ext.Toolbar',
        'Ext.dataview.List',
        'Ext.tab.Panel',
        'DelphiDayApp.view.tracks.ListController',
        'DelphiDayApp.store.FarneseTracks',
        'DelphiDayApp.store.ViscontiTracks',
        'DelphiDayApp.store.StudioTracks',
        'DelphiDayApp.store.Rooms'
    ],

    controller: 'tracks-list',

    title: 'Tracks',

    layout: 'fit',

    padding: 15,

    items: [{
        xtype: 'tabpanel',
        tabBarPosition: 'top',
        items: [{
            title: 'Sala 1',
            layout: 'fit',
            items: {
                xtype: 'list',
                disableSelection: true,       
                //itemCls: 'demo-item-border',        
                itemCls: 'demo-shadow-item',
                store: {
                    type: 'farnese-tracks'
                },
                itemTpl: 
                    '<div class="list-container">' +
                    '  <div class="list-item-left"><img src="/resources/{image}"></div>' +
                    '  <div class="list-item-right"><b>{title}</b><br>{speaker}<br><br>{time}<br>' +
                    '  <img class="list-item-lang" src="/resources/flags/{lang}.png"></div>' +
                    '  </div>' +
                    '</div>',
                listeners: {
                    childtap: 'onListSelect'
                }
            }

        },{
            title: 'Sala 2',
            layout: 'fit',
            items: {
                xtype: 'list',
                disableSelection: true,       
                //itemCls: 'demo-item-border',        
                itemCls: 'demo-shadow-item',
                store: {
                    type: 'visconti-tracks'
                },
                itemTpl: 
                    '<div class="list-container">' +
                    '  <div class="list-item-left"><img src="/resources/{image}"></div>' +
                    '  <div class="list-item-right"><b>{title}</b><br>{speaker}<br><br>{time}<br>' +
                    '  <img class="list-item-lang" src="/resources/flags/{lang}.png"></div>' +
                    '  </div>' +
                    '</div>',
                listeners: {
                    childtap: 'onListSelect'
                }
            }
        },{
            title: 'Sala 3',
            layout: 'fit',
            items: {
                xtype: 'list',
                disableSelection: true,       
                //itemCls: 'demo-item-border',        
                itemCls: 'demo-shadow-item',
                store: {
                    type: 'studio-tracks'
                },
                itemTpl: 
                    '<div class="list-container">' +
                    '  <div class="list-item-left"><img src="/resources/{image}"></div>' +
                    '  <div class="list-item-right"><b>{title}</b><br>{speaker}<br><br>{time}<br>' +
                    '  <img class="list-item-lang" src="/resources/flags/{lang}.png"></div>' +
                    '  </div>' +
                    '</div>',
                listeners: {
                    childtap: 'onListSelect'
                }
            }
        }]

    }]

});
