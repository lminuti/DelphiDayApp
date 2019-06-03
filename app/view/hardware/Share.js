Ext.define('DelphiDayApp.view.hardware.Share', {
    extend: 'Ext.Panel',
    xtype: 'share',

    referenceHolder: true,

    tools: [{
        type: 'left',
        docked: 'left',
        handler() {
            this.up('panel').destroy();
        }
    }],

    title: 'Share',

    padding: 5,

    items: [{
        reference: 'title',
        xtype: 'textfield',
        label: 'Title',
        value: 'DephiDay'
    },{
        reference: 'message',
        xtype: 'textfield',
        label: 'Message',
        value: 'You received a message'
    },{
        reference: 'url',
        xtype: 'textfield',
        label: 'Url',
        value: 'http://www.delphiday.it'
    },{
        reference: 'share-button',
        xtype: 'button',
        text: 'Share!',
        ui: 'action'
    }],

    shareClick() {
        if (navigator.share) {
            navigator.share({
                title: this.lookup('title').getValue(),
                text: this.lookup('message').getValue(),
                url: this.lookup('url').getValue(),
            })
                .then(s=>console.log('Successful share', s))
                .catch(console.log);
        }
    },

    initialize() {
        this.callParent();
        this.lookup('share-button').on('tap', this.shareClick, this);
    }
});
