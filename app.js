/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'DelphiDayApp.Application',

    name: 'DelphiDayApp',

    requires: [
        // This will automatically load all classes in the DelphiDayApp namespace
        // so that application classes do not need to require each other.
        'DelphiDayApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'DelphiDayApp.view.main.Main'
});
