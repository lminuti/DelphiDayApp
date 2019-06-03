Ext.define('DelphiDayApp.store.FarneseTracks', {
    extend: 'Ext.data.Store',

    alias: 'store.farnese-tracks',

    fields: [
        'title', 'speaker', 'detail', 'time', 'image', 'lang'
    ],

    data: { 
        items: [{ 
            title: 'Benvenuto e presentazione', 
            speaker: 'Paolo Rossi ', 
            detail: 'Una breve presentazione della <b>XVIII edizione del Delphi Day</b>, degli speaker e degli <b>sponsor</b> della giornata, con un accenno alle novità delle prossime edizioni. Tutte le informazioni sullo svolgimento della <b>giornata di conferenza</b> e le info logistiche.',
            time: '09:00 - 9:30',
            image: 'speakers/paolo-rossi.jpg',
            lang: 'it'
        },{ 
            title: 'Lo stato e il futuro di Delphi', 
            speaker: 'Marco Cantù', 
            detail: 'Lo <strong>stato dell\'arte</strong> di Delphi, con particolare riferimento al supporto per l\'ultima versione del sistema operativo di casa Microsoft, <strong>Windows 10</strong>, e <strong>altri sistemi operativi</strong>, e indicazioni per le prossime versioni direttamente dalle parole del <strong>Product Manager</strong> del prodotto.',
            time: '09:30 - 10:30',
            image: 'speakers/marco-cantu.jpg',
            lang: 'it'
        },{ 
            title: 'Coffee Break', 
            speaker: 'Wintech Italia', 
            detail: 'Brought to you by <a href="http://www.ositalia.com/">OSItalia</a>',
            time: '10:30',
            image: 'coffee.png',
            lang: 'null'
        },{ 
            title: 'Fun with Enumerators', 
            speaker: 'Primož Gabrijelčič', 
            detail: `The <strong>for..in</strong> Delphi language construct is a great example for the power of the <strong>Iterator pattern</strong>. It is <strong>simple to use</strong> and simple to extend. With just few easy additions, we can add support for the for..in construct to <strong>any data structure</strong>. In this session I will talk about:
                  <ul>
                    <li><strong>Implementing</strong> support for for..in in your code</li>
                    <li>Reusing <strong>RTL iterators</strong> to do the dirty work</li>
                    <li>Using for..in for <strong>other purposes</strong></li>
                  </ul>
                `,
            time: '11:00 - 12:00',
            image: 'speakers/primoz-gabrijelcic.jpg',
            lang: 'en'
        },{ 
            title: 'ExtReact, ExtAngular and ExtWebComponents', 
            speaker: 'Olga Petrova', 
            detail: 'TBD',
            time: '12:00 - 13:00',
            image: 'speakers/olga-petrova.jpg',
            lang: 'en'
        },{ 
            title: 'Lunch Break', 
            speaker: 'Wintech Italia', 
            detail: 'Brought to you by <a href="https://www.wintech-italia.it/">Wintech Italia</a>.',
            time: '13:00-14:30',
            image: 'steak.png',
            lang: 'null'
        },{ 
            title: 'Documentare le vostre API REST', 
            speaker: 'Paolo Rossi', 
            detail: `In Delphi ci sono diverse librerie per costruire facilmente
                <strong>servizi REST</strong>. Uno dei punti di forza di un servizio REST &egrave; la possibilit&agrave; di <strong>pubblicare all'esterno</strong> il servizio (<strong>API</strong>) per farlo usare da clienti, fornitori o <strong>terze parti</strong>. In questo scenario fornire all'utente della API una <strong>buona documentazione</strong> &egrave; fondamentale anche se sappiamo tutti quanto &egrave; faticoso e time-consuming scrivere e tenere aggiornata la documentazione. In questo talk vedremo come <strong>automatizzare</strong> questo task e (magari usando la libreria giusta) avere la documentazione pubblicata automaticamente.`,
            time: '14:30 - 15:30',
            image: 'speakers/paolo-rossi.jpg',
            lang: 'it'
        },{ 
            title: 'VCL projects modernization', 
            speaker: 'Bogdan Polak', 
            detail: 'A plan for <strong>modernization</strong> classic <strong>VCL projects</strong>, which have reached a size that is <strong>difficult to maintain</strong>. It consists of 4 main phases allowing to <strong>incrementally modernize</strong> the project itself and the team\'s approach too. It allows you to encourage Delphi developers to <strong>change practices</strong> and apply <strong>new techniques</strong>, while providing visibility and control for the management. In long term, will allow to improve programers <strong>satisfaction</strong>, increase <strong>delivery efficiency</strong> and <strong>reduce</strong> the number of errors.',
            time: '15:30 - 16:30',
            image: 'speakers/bogdan-polak.jpg',
            lang: 'en'
        },{ 
            title: 'Coffee Break', 
            speaker: 'Wintech Italia', 
            detail: 'Brought to you by <a href="http://www.technolog.it/">Technolog</a>',
            time: '16:30',
            image: 'coffee.png',
            lang: 'null'
        },{ 
            title: 'Delphi e Redis: accoppiata vincente', 
            speaker: 'Luca Minuti', 
            detail: `<strong>Redis</strong> &egrave; un data store open source dalle <strong>mille risorse</strong>. In questo talk impareremo a conoscerlo e vedremo alcune delle sue caratteristiche principali tramite una <strong>serie di demo</strong>:
                  <ul>
                    <li>Gestione della <strong>cache</strong> tramite <strong>key/value</strong> store</li>
                    <li><strong>Messaggi asincroni</strong> con le code</li>
                    <li><strong>Notifiche</strong> in tempo reale con Publish/Subcribe</li>
                  </ul>

            `,
            time: '17:00 - 18:00',
            image: 'speakers/luca-minuti.jpg',
            lang: 'it'
        },{ 
            title: 'Domande relatori e conclusione lavori', 
            speaker: 'Wintech Italia', 
            detail: 'Le <strong>domande finali</strong> a tutti gli <strong>speaker e sponsor</strong> e un\'anticipazione delle <strong>prossime giornate Delphi Day</strong> (dove e quando) dedicate a voi!',
            time: '18:00 - 18:15',
            image: 'speakers/paolo-rossi.jpg',
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
