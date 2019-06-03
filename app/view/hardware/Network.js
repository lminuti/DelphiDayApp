Ext.define('DelphiDayApp.view.hardware.Network', {
    extend: 'Ext.Panel',
    xtype: 'network',

    referenceHolder: true,

    tools: [{
        type: 'left',
        docked: 'left',
        handler() {
            this.up('panel').destroy();
        }
    }],

    title: 'Network',

    padding: 5,

    items: [{
        reference: 'status',
        xtype: 'textfield',
        label: 'Status',
        readOnly: true
    },{
        reference: 'connectionType',
        xtype: 'textfield',
        label: 'Connection type',
        readOnly: true
    },{
        reference: 'effectiveType',
        xtype: 'textfield',
        label: 'Effective Type',
        readOnly: true
    },{
        reference: 'saveDataMode',
        xtype: 'textfield',
        label: 'saveData mode',
        readOnly: true
    },{
        reference: 'downlink',
        xtype: 'textfield',
        label: 'Downlink',
        readOnly: true
    }],

    initialize() {
        this.callParent();
        let that = this;

        const updateOnlineStatus = (status) => {
            that.lookup('status').setValue( status?'Online':'Offline' );
        };
        window.addEventListener('online', () => updateOnlineStatus(true));
        window.addEventListener('offline', () => updateOnlineStatus(false));
        updateOnlineStatus(navigator.onLine);


        const updateConnectionStatus = () => {
            that.lookup('connectionType').setValue( navigator.connection.type );
            that.lookup('effectiveType').setValue( navigator.connection.effectiveType );
            that.lookup('saveDataMode').setValue( navigator.connection.saveData );
            that.lookup('downlink').setValue( navigator.connection.downlink );
        };

        updateConnectionStatus();
        navigator.connection.addEventListener('change', updateConnectionStatus);
    }

});
