/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('DelphiDayApp.Application', {
    extend: 'Ext.app.Application',

    name: 'DelphiDayApp',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    launch() {
        Ext.get('loading').hide();
    },

    init() {
        // only in production???
        const me = this;
        if (navigator.serviceWorker &&
            navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.onstatechange = (event) => {
                if (event.target.state === 'redundant') {
                    me.onPWAUpdate();
                }
            };
        }
    },

    onAppUpdate() {
        if (!navigator.serviceWorker) {
            Ext.Msg.confirm('Application Update', 'L\'applicazione è stata aggiornata, ricaricare?',
                (choice) => {
                    if (choice === 'yes') {
                        window.location.reload();
                    }
                }
            );
        }
    },

    onPWAUpdate () {
        Ext.Msg.confirm('Application Update', 'Sono presenti degli aggiornamenti, ricaricare?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }

});

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    window.deferredPrompt = e;
}, {once: true});
