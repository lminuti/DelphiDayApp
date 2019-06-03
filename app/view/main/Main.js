/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('DelphiDayApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit',
        'Ext.field.ComboBox',
        'Ext.data.ChainedStore',
        'DelphiDayApp.view.main.MainController',
        'DelphiDayApp.view.tracks.List',
        'DelphiDayApp.view.info.Info',
        'DelphiDayApp.view.hardware.Hardware',
        'DelphiDayApp.view.speakers.List'
    ],

    controller: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        }
    },

    tabBarPosition: 'bottom',

    items: [
        {
            title: 'Tracks',
            iconCls: 'x-fa fa-microphone',
            layout: 'card',
            items: [{
                xtype: 'tracks-list'
            }]
        },{
            title: 'Speakers',
            iconCls: 'x-fa fa-users',
            layout: 'fit',
            items: [{
                xtype: 'speakers-list'
            }]
        },{
            title: 'Info',
            iconCls: 'x-fa fa-info',
            layout: 'fit',
            items: [{
                xtype: 'info'
            }]
        },{
            title: 'Hardware',
            iconCls: 'x-fa fa-cog',
            layout: 'card',
            items: {
                xtype: 'hardware'
            }
        }
    ]
});
