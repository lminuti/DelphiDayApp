Ext.define('DelphiDayApp.view.tracks.Detail', {
    extend: 'Ext.Panel',
    xtype: 'tracks.detail',

    tools: [{
        type: 'left',
        docked: 'left',
        handler() {
            this.up('panel').destroy();
        }
    }],

    title: 'Detail',

    layout: 'fit',

    padding: 5,

    innerCls: 'track-details',

    html: 'testtestlòsdk flòskdflòsk dflòskdfòl ksòdfk òslkdf s'
});
