Ext.define('DelphiDayApp.view.tracks.ListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.tracks-list',

    requires: [
        'DelphiDayApp.view.tracks.Detail'
    ],

    pushView(xtype, config) {
        const parentView = this.getView().up();
        const view = parentView.add(Ext.apply({ xtype }, config));
        parentView.setActiveItem(view);
    },    

    onListSelect(sender, location) {
        //Ext.Msg.alert(location.record.get('title'), location.record.get('detail'));
        this.pushView('tracks.detail', {
            title: location.record.get('title'),
            html: location.record.get('detail')
        });
    }
});
