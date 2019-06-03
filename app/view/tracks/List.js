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
        'DelphiDayApp.store.StudioTracks'
    ],

    controller: 'tracks-list',

    title: 'Tracks',

    layout: 'fit',

    padding: 15,

    items: [{
        xtype: 'tabpanel',
        tabBarPosition: 'top',
        items: [{
            title: 'Farnese',
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
            title: 'Visconti',
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
            title: 'Studio',
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
