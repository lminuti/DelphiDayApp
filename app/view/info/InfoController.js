Ext.define('DelphiDayApp.view.info.InfoController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.info',

    installApp() {
        window.deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        /*
        const choiceResult = await window.deferredPrompt.userChoice;
        addBtn.style.display = 'none';
        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
        } else {
            console.log('User dismissed the A2HS prompt');
        }
        */
        window.deferredPrompt = null;
    },

    checkInstallButton() {
        if (window.deferredPrompt) {
            this.installButton.setDisabled(false);
        }
    },

    init() {
        this.getView().on('painted', this.checkInstallButton, this);
        this.installButton = this.lookup('install-button');
        this.installButton.on('tap', this.installApp, this);

        const grid = this.getView().down('grid');
        if(grid.getStore().getCount() < 1) {
            grid.getStore().loadData([{
                name: 'App',
                value: Ext.manifest.name + ' V' + Ext.manifest.version
            },{
                name: 'ExtJS',
                value: Ext.getVersion().version
            },{
                name: 'Sencha Cmd',
                value: Ext.getVersion('cmd').version
            },{
                name: 'Font Awesome',
                value: Ext.getVersion('font-awesome').version
            },{
                name: 'OS',
                value: Ext.os.name
            },{
                name: 'Browser ID',
                value: Ext.browser.identity
            },{
                name: 'Device type',
                value: Ext.os.deviceType
            },{
                name: 'Screen',
                value: Ext.getBody().getViewSize().width + ' x ' + Ext.getBody().getViewSize().height
            }]);
        }        

    }
    
});
