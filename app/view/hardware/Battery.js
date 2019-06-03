Ext.define('DelphiDayApp.view.hardware.Battery', {
    extend: 'Ext.Panel',
    xtype: 'battery',

    referenceHolder: true,

    tools: [{
        type: 'left',
        docked: 'left',
        handler() {
            this.up('panel').destroy();
        }
    }],

    title: 'Battery',

    padding: 5,

    items: [{
        reference: 'charging',
        xtype: 'textfield',
        label: 'Battery Charging?',
        readOnly: true
    },{
        reference: 'level',
        xtype: 'textfield',
        label: 'Battery Level?',
        readOnly: true
    },{
        reference: 'chargingTime',
        xtype: 'textfield',
        label: 'Battery charging time?',
        readOnly: true
    },{
        reference: 'dischargeTime',
        xtype: 'textfield',
        label: 'Battery discharge time?',
        readOnly: true
    }],

    initialize() {
        this.callParent();
        let that = this;
        navigator.getBattery().then(function (battery) {
            console.log(battery);

            function updateAllBatteryInfo() {
                that.lookup('charging').setValue( (battery.charging ? 'Yes' : 'No') );
                that.lookup('level').setValue( Math.floor(battery.level*100) );
                that.lookup('chargingTime').setValue( battery.chargingTime );
                that.lookup('dischargeTime').setValue( battery.dischargingTime );
            }
            updateAllBatteryInfo();

            that.removeEvents = () => {
                battery.removeEventListener('chargingchange', updateAllBatteryInfo);
                battery.removeEventListener('levelchange', updateAllBatteryInfo);
                battery.removeEventListener('chargingtimechange', updateAllBatteryInfo);
                battery.removeEventListener('dischargingtimechange', updateAllBatteryInfo);
            };

            battery.addEventListener('chargingchange', updateAllBatteryInfo);
            battery.addEventListener('levelchange', updateAllBatteryInfo);
            battery.addEventListener('chargingtimechange', updateAllBatteryInfo);
            battery.addEventListener('dischargingtimechange', updateAllBatteryInfo);

        });    

        this.on('destroy', () => {
            if (this.removeEvents) {
                this.removeEvents();
            }
        }, this);
    }

});
