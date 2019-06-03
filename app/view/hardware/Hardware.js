Ext.define('DelphiDayApp.view.hardware.Hardware', {
    extend: 'Ext.Panel',
    xtype: 'hardware',

    layout: 'vbox',
    title: 'Hardware',

    requires: [
        'DelphiDayApp.view.hardware.*'
    ],

    items: [{
        xtype: 'button',
        text: 'Battery API',
        targetView: 'battery'
    },{
        xtype: 'button',
        text: 'Network info',
        targetView: 'network'
    },{
        xtype: 'button',
        text: 'Media capture',
        targetView: 'capture'
    },{
        xtype: 'button',
        text: 'Speech Synthesis',
        targetView: 'speech-synthesis'
    },{
        xtype: 'button',
        text: 'Share',
        targetView: 'share'
    },{
        xtype: 'button',
        text: 'Device Orientation',
        targetView: 'orientation'
    },{
        xtype: 'button',
        text: 'Push notification',
        targetView: 'push-notification'
    }],

    pushView(xtype) {
        let view = this.parentView.add({xtype});
        this.parentView.setActiveItem(view);
    },

    addEventToButton(button) {
        button.on('tap', (button) => this.pushView(button.targetView));
    },

    initialize() {
        this.callParent();
        this.parentView = this.up();
        this.getItems().each((item) => this.addEventToButton(item));
    }

});
