Ext.define('DelphiDayApp.store.Rooms', {
    extend: 'Ext.data.Store',

    alias: 'store.rooms',

    fields: [
        'name'
    ],

    autoLoad: true,

    proxy: {
        type: 'ajax',
        
        // @sw-cache
        url: 'data/Rooms.json',
        pageParam: false,
        startParam: false,
        limitParam: false,
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});