Ext.define('DelphiDayApp.view.hardware.PushNotification', {
    extend: 'Ext.Panel',
    xtype: 'push-notification',

    referenceHolder: true,

    tools: [{
        type: 'left',
        docked: 'left',
        handler() {
            this.up('panel').destroy();
        }
    }],

    title: 'Push Notification',

    padding: 5,

    layout: 'vbox',

    items: [{
        reference: 'sendSelfNotificationButton',
        xtype: 'button',
        text: 'Send self notification'
    },{
        reference: 'sendToAllButton',
        xtype: 'button',
        text: 'Send to all'
    }],

    sendSelfNotification() {
        OneSignal.sendSelfNotification();
    },

    sendToAll() {
        Ext.Ajax.request({
            url: 'https://app.infocer.net/cgi-bin/appdelphiday-push.cgi',
            success(response, opts) {
                Ext.Msg.alert('Push', response.responseText);
            },

            failure(response, opts) {
                Ext.Msg.alert('Error', 'HTTP ERROR: ' + response.status);
                console.log('server-side failure with status code ' + response.status);
                console.log(response);
            }            
        });
    },

    initialize() {
        this.callParent();
        this.lookup('sendSelfNotificationButton').on('tap', this.sendSelfNotification, this);
        this.lookup('sendToAllButton').on('tap', this.sendToAll, this);
    }

});
