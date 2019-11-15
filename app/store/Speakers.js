Ext.define('DelphiDayApp.store.Speakers', {
    extend: 'Ext.data.Store',

    alias: 'store.speakers',

    fields: [
        'name', 'title', 'detail', 'image'
    ],

    autoLoad: true,

    proxy: {
        type: 'ajax',
        
        // @sw-cache
        url: 'data/Speakers.json',
        pageParam: false,
        startParam: false,
        limitParam: false,
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});