Ext.define('DelphiDayApp.store.ViscontiTracks', {
    extend: 'Ext.data.Store',

    alias: 'store.visconti-tracks',

    fields: [
        'title', 'speaker', 'detail', 'time'
    ],

    data: { 
        items: [{ 
            title: 'Alexa, parla con Delphi!', 
            speaker: 'Marco Breveglieri', 
            detail: 'Scopriamo assieme le <strong>potenzialit&agrave;</strong> degli <strong>assistenti digitali</strong>, come <strong>Amazon Echo</strong> e <strong>Google Home</strong>, quali sono gli scenari in cui possono essere utilizzati e come farli <strong>colloquiare</strong> con le nostre <strong>applicazioni Delphi</strong>, rendendole capaci di <strong>ascoltare</strong>, parlare e mostrare.',
            time: '11:00 - 12:00',
            image: 'speakers/marco-breveglieri.jpg',
            lang: 'it'
        },{ 
            title: 'Firebird 4.0... it\'s time to replicate! replicate! replicate!', 
            speaker: 'Fabio Codebue', 
            detail: 'In questa sessione vedremo una presentazione delle <strong>novit&agrave;</strong> della <strong>versione 4</strong> di <strong>Firebird</strong> con esempi per configurare la <strong>replica dei dati</strong>.',
            time: '14:30 - 15:30',
            image: 'speakers/fabio-codebue.jpg',
            lang: 'it'
        },{ 
            title: 'PWA per lo sviluppo mobile', 
            speaker: 'Luca Minuti - Paolo Rossi', 
            detail: 'Con l\'evoluzione delle <strong>capacit&agrave; dei browser</strong> moderni la differenza tra applicazioni <strong>native</strong> e applicazioni <strong>web</strong> &egrave; sempre pi&ugrave; sottile. In questo talk vedremo alcune delle nuove possibilit&agrave; offerte dallo sviluppo web e come sfruttarle con <strong>Delphi</strong> e <strong>ExtJS</strong> per realizzare facilmente e velocemente app mobile davvero <strong>multipiattaforma</strong>!',
            time: '15:30 - 16:30',
            image: 'speakers/paolo-rossi.jpg',
            lang: 'it'
        },{ 
            title: 'Cr1tt0gr4f14 con plugin per Firebird 4.0', 
            speaker: 'Fabio Codebue', 
            detail: 'Partendo delle novit&agrave; per la <strong>crittografia</strong> introdotte nel <strong>linguaggio SQL</strong> per la crittografia intraprenderemo un percorso che ci porta alla costruzione di un semplice <strong>plugin in Delphi</strong> per la crittografia del database in <strong>Firebird 4.0</strong>',
            time: '17:00 - 18:00',
            image: 'speakers/fabio-codebue.jpg',
            lang: 'it'
        }]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
