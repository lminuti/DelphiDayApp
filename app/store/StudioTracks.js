Ext.define('DelphiDayApp.store.StudioTracks', {
    extend: 'Ext.data.Store',

    alias: 'store.studio-tracks',

    fields: [
        'title', 'speaker', 'detail', 'time'
    ],

    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        
        // @sw-cache
        url: 'data/Room3.json',
        pageParam: false,
        startParam: false,
        limitParam: false,
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
