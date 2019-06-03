Ext.define('DelphiDayApp.view.hardware.Orientation', {
    extend: 'Ext.Panel',
    xtype: 'orientation',

    referenceHolder: true,

    tools: [{
        type: 'left',
        docked: 'left',
        handler() {
            this.up('panel').destroy();
        }
    }],

    title: 'Device Orientation',

    padding: 5,

    html: '<div id="garden">' +
          '  <div id="ball"></div>' +
          '</div>',

    initialize() {
        this.callParent();
    },

    onRender() {
        const ball = document.getElementById('ball'); 
        const garden = document.getElementById('garden');
        //var output = document.getElementById('output');

        const maxX = garden.clientWidth - ball.clientWidth;
        const maxY = garden.clientHeight - ball.clientHeight;

        function handleOrientation(event) {
            let x = event.beta; // In degree in the range [-180,180]
            let y = event.gamma; // In degree in the range [-90,90]
            //let z = event.alpha;

            // Because we don't want to have the device upside down
            // We constrain the x value to the range [-90,90]
            if (x > 90) { 
                x = 90;
            }
            if (x < -90) { 
                x = -90;
            }

            // To make computation easier we shift the range of 
            // x and y to [0,180]
            x += 90;
            y += 90;

            // 10 is half the size of the ball
            // It center the positioning point to the center of the ball
            ball.style.top = (maxX * x / 180 - 10) + 'px';
            ball.style.left = (maxY * y / 180 - 10) + 'px';
        }

        window.addEventListener('deviceorientation', handleOrientation);
    }


});
