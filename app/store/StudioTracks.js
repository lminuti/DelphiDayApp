Ext.define('DelphiDayApp.store.StudioTracks', {
    extend: 'Ext.data.Store',

    alias: 'store.studio-tracks',

    fields: [
        'title', 'speaker', 'detail', 'time'
    ],

    data: { 
        items: [{ 
            title: 'SQL Server Query Store e Automatic Tuning', 
            speaker: 'Sergio Govoni', 
            detail: 'Avete mai provato un\'<strong>applicazione</strong> talmente <strong>lenta</strong> da essere inutilizzabile? Avete mai <strong>aggiornato</strong> un\'<strong>applicazione database</strong> all\'ultima versione di SQL Server e incontrato problemi di performance dovuti all\'utilizzo di un diverso <strong>piano di esecuzione</strong> per determinate query? L\'utilizzo di un piano di esecuzione non ottimale o la presenza di query non ottimizzate, possono causare questi inconvenienti. Query Store, rilasciato con <strong>SQL Server 2016</strong>, semplifica l\'identificazione e la <strong>soluzione</strong> di questi problemi; memorizza tutti i piani di esecuzione utilizzati per una determinata query con le relative statistiche di attesa. Automatic Tuning, attraverso l\'analisi dei dati raccolti da <strong>Query Store</strong>, può forzare automaticamente l\'utilizzo di uno specifico piano di esecuzione, creare indici mancanti, eliminare <strong>indici non utilizzati</strong> o doppi! In questa sessione imparerete come funziona Query Store e quali opzioni possono essere attivate per il <strong>tuning automatico</strong> delle query.',
            time: '14:30 - 15:30',
            image: 'speakers/sergio-govoni.jpg',
            lang: 'it'
        },{ 
            title: 'var Delphi := Delphi + 1; (parte 1)', 
            speaker: 'Maurizio Del Magno', 
            detail: `<strong>Evolve</strong> the language with the language itself! <strong>SmartPointers</strong> e <strong>TVirtualInterface</strong> (passando per <strong>Generics</strong> e <strong>Anonymous Methods</strong>). Cosa sono? Come si usano? Vedremo un <strong>caso d'uso</strong> apparentemente impossibile realmente affrontato e risolto con queste tecniche.<br />
                  Nulla &egrave; come sembra...<br />
                   ... il trucco c'&egrave; ma non si vede.
            `,
            time: '15:30 - 16:30',
            image: 'speakers/maurizio-del-magno.jpg',
            lang: 'it'
        },{ 
            title: 'var Delphi := Delphi + 1; (parte 2)', 
            speaker: 'Maurizio Del Magno', 
            detail: `<strong>Evolve</strong> the language with the language itself! <strong>SmartPointers</strong> e <strong>TVirtualInterface</strong> (passando per <strong>Generics</strong> e <strong>Anonymous Methods</strong>). Cosa sono? Come si usano? Vedremo un <strong>caso d'uso</strong> apparentemente impossibile realmente affrontato e risolto con queste tecniche.<br />
                  Nulla &egrave; come sembra...<br />
                   ... il trucco c'&egrave; ma non si vede.
            `,
            time: '17:00 - 18:00',
            image: 'speakers/maurizio-del-magno.jpg',
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
