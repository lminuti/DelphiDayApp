Ext.define('DelphiDayApp.store.ViscontiTracks', {
    extend: 'Ext.data.Store',

    alias: 'store.visconti-tracks',

    fields: [
        'title', 'speaker', 'detail', 'time'
    ],

    autoLoad: true,

    proxy: {
        type: 'ajax',
        
        // @sw-cache
        url: 'data/Room2.json',
        pageParam: false,
        startParam: false,
        limitParam: false,
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
