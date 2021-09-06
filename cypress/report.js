const report = require('multiple-cucumber-html-reporter');


report.generate({
    jsonDir: './cypress/cucumber-json',
    reportPath: 'cypress/cucumber-report/',
    metadata:{
        browser: {
            name: 'Edge',
            version: '92'
        },
        device: 'Maquina de execução local',
        platform: {
            name: 'Windows',
            version: '10'
        }
    },
    customData: {
        title: 'Informações do Projeto',
        data: [
            {label: 'Projeto', value: 'Cadastro de Usuários'},
            {label: 'Versão', value: '1'},
            {label: 'Ciclo', value: 'B11221.34321'},
            {label: 'Sprint', value: '4'},
            {label: 'Gerado em', value: ''+ new Date()+''}
           
        ]
    }
})

