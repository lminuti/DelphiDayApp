Ext.define('DelphiDayApp.view.hardware.Capture', {
    extend: 'Ext.Panel',
    xtype: 'capture',

    referenceHolder: true,

    tools: [{
        type: 'left',
        docked: 'left',
        handler() {
            const video = document.getElementById('video');
            video.srcObject.getTracks().forEach(track => track.stop());
            this.up('panel').destroy();
        }
    }],

    title: 'Capture',

    layout: 'fit',

    padding: 5,

    items: [{
        xtype: 'panel',
        html: '<video id="video" style="border: 1px solid black;width: 320px; height: 240px;">Video stream not available.</video>'
    }],

    startCapture() {
        const video = document.getElementById('video');
        let width = 320;
        let height = 0;
        let streaming = false;

        navigator.mediaDevices
            .getUserMedia({ video: true, audio: false })
            .then(function(stream) {
                video.srcObject = stream;
                video.play();
            })
            .catch(function(err) {
                console.log('An error occurred: ' + err);
            });

        video.addEventListener(
            'canplay',
            function(ev) {
                if (!streaming) {
                    height = video.videoHeight / (video.videoWidth / width);
                    if (isNaN(height)) {
                        height = width / (4 / 3);
                    }
                    video.setAttribute('width', width);
                    video.setAttribute('height', height);
                    streaming = true;
                }
            },
            false
        );

    },

    onRender() {
        this.startCapture();        
    }

});
