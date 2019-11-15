Ext.define('DelphiDayApp.store.FarneseTracks', {
    extend: 'Ext.data.Store',

    alias: 'store.farnese-tracks',

    fields: [
        'title', 'speaker', 'detail', 'time', 'image', 'lang'
    ],

    autoLoad: true,

    proxy: {
        type: 'ajax',

        // @sw-cache
        url: 'data/Room1.json',
        pageParam: false,
        startParam: false,
        limitParam: false,
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
