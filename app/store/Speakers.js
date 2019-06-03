Ext.define('DelphiDayApp.store.Speakers', {
    extend: 'Ext.data.Store',

    alias: 'store.speakers',

    fields: [
        'name', 'title', 'detail', 'image'
    ],

    data: { 
        items: [{ 
            name: 'Paolo Rossi ', 
            title: 'Embarcadero & Sencha MVP', 
            detail: 'Docente Delphi da più di 15 anni. Consulente su tecnologie web, mobile e database. Speaker a numerose conferenze Delphi. Autore della libreria Delphi JWT e della libreria REST WiRL',
            image: 'speakers/paolo-rossi.jpg'
        },{ 
            name: 'Marco Cantù', 
            title: 'Embarcadero Technologies', 
            detail: 'Marco is a RAD Studio Product Manager at Embarcadero Technologies, a best-selling Delphi books author, and a Delphi guru',
            image: 'speakers/marco-cantu.jpg'
        },{ 
            name: 'Primož Gabrijelčič', 
            title: 'Embarcadero MVP', 
            detail: 'Primož is a long-time Delphi programmer working with Delphi since its inception. In the past few years his focus was mainly on parallel programming and high availability server solutions wich resulted in extremely popular threading library for Delphi: OmniThreadLibrary.',
            image: 'speakers/primoz-gabrijelcic.jpg'
        },{ 
            name: 'Bogdan Polak', 
            title: 'BSC Polska', 
            detail: 'He\'s working working as Software Engineer at BSC Polska since 2004. Software consultant and coach for Polish RAD Studio industry, including expertises in project optimization for medium and large companies. Speaker on many developer\'s conferences. Author of the workshops, conference talks, expert in ALM area (software architecture, modeling, requirement management, automated quality assurance). Privately he loves sport and active recreation, and the most sailing and skiing.',
            image: 'speakers/bogdan-polak.jpg'
        },{ 
            name: 'Luca Minuti', 
            title: '', 
            detail: 'Lavora con Delphi sin dalla prima versione passando da applicazioni client/server a multi-tier su diverse piattaforme. Ultimamente svilluppa principalmente WebApp per desktop e mobile utilizzando ExtJS per il frontend.',
            image: 'speakers/luca-minuti.jpg'
        },{ 
            name: 'Fabio Codebue', 
            title: 'P-Soft', 
            detail: 'Fabio Codebue is a Full Stack Developer, with several years of experience in PHP and Delphi. He teaches PHP, JavaScript and database foundamentals at University "Santa Giulia" of Brescia. He is specialized on Firebird configuration and optimization. Member of Firebird Foundation Committee from 2004',
            image: 'speakers/fabio-codebue.jpg'
            /*
        },{ 
            name: 'Marco Mottadelli', 
            title: 'Dna Software', 
            detail: 'Marco è titolare di Dna Software Sas, azienda che si occupa di analisi e sviluppo software in diversi ambiti (Retail, sanità, scuole, web, mobile). Utilizza quotidianamente Delphi-Firemonkey come linguaggio di sviluppo spaziando tra le diverse versioni. Nell’ambito web sviluppa applicazioni con Sencha ExtJS. Ha partecipato allo sviluppo di piccole parti di alcune librerie open source conosciute nell\'ambito Delphi (Relax, Stomp client, iORM).',
            image: 'speakers/marco-cantu.jpg'*/
        },{ 
            name: 'Marco Breveglieri', 
            title: 'ABLS Team', 
            detail: 'Marco è co-fondatore di ABLS Team, in particolare, si occupa di sviluppo software e Web con Delphi, Visual Studio e i linguaggi standard del Web. Marco sviluppa e tiene consulenze e corsi di formazione su queste tecnologie.',
            image: 'speakers/marco-breveglieri.jpg'
        },{ 
            name: 'Maurizio Del Magno', 
            title: 'Levante Software', 
            detail: 'Responsabile dello sviluppo del software Levante (gestionale settore termoidraulica) usa Delphi fin dalla prima versione, negli ultimi due anni si è dedicato alla realizzazione di un ORM.',
            image: 'speakers/maurizio-del-magno.jpg'
        },{ 
            name: 'Olga Petrova', 
            title: 'Sales Engineer at Sencha', 
            detail: 'Olga is a Sales Engineer at Sencha and has been a software developer for more than 11 years. She has experience as a front-end developer and has been working with Ext JS since version 1.1. Prior to joining Sencha, she worked at AutoVision GmbH (a subsidiary of Volkwagen AG), Clueda AG, dotplot GmbH, and other software and services companies. Olga graduated from Tyumen State University.',
            image: 'speakers/olga-petrova.jpg'
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