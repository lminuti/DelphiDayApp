Ext.define('DelphiDayApp.view.hardware.SpeechSynthesis', {
    extend: 'Ext.Panel',
    xtype: 'speech-synthesis',

    referenceHolder: true,

    tools: [{
        type: 'left',
        docked: 'left',
        handler() {
            speechSynthesis.onvoiceschanged = undefined;
            this.up('panel').destroy();
        }
    }],

    title: 'Speech Synthesis',

    //layout: 'fit',

    padding: 5,

    items: [{
        reference: 'text',
        xtype: 'textfield',
        label: 'Text',
        value: 'Hello world'
    },{
        reference: 'voice',
        xtype: 'combobox',
        label: 'Voice',
        queryMode: 'local',
        displayField: 'name',
        valueField: 'lang',
        forceSelection: true,
        editable: false,
        store: {
            fields: ['lang', 'name']
        }
    },{
        reference: 'play',
        xtype: 'button',
        text: 'Play',
        ui: 'action'
    }],

    initialize() {
        this.callParent();

        const synth = window.speechSynthesis;
        const voiceCombo = this.lookup('voice');
        let voices;
        const populateVoiceList = () => {
            voices = synth.getVoices() || [];
            voices.forEach(v => {
                voiceCombo.getStore().add({
                    lang: v.lang,
                    name: v.name,
                    voice: v
                });
            });
        };

        setTimeout(populateVoiceList, 500);    

        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = populateVoiceList;
        }


        this.lookup('play').on('tap', () => {
            if (synth.speaking) {
                console.error('already speaking duhhhh!!!');
                return;
            }
            const text = this.lookup('text').getValue();
            const lang = voiceCombo.getValue();

            if (text !== '' && lang) {
                const utterThis = new SpeechSynthesisUtterance(text);
                utterThis.onerror = function (event) {
                    console.error('SpeechSynthesisUtterance.onerror');
                };

                utterThis.voice = voiceCombo.getSelection().get('voice'); //voices.find(v => v.lang === lang);
                utterThis.lang = lang;
                utterThis.pitch = 1;
                utterThis.rate = 1;
                synth.speak(utterThis);
            }
        }, this);
    }


});