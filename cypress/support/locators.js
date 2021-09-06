const locators = {
    NOME: {
        XP_PRIMEIRO_NOME: "//input[contains(@placeholder,'First Name')]",
        XP_ULTIMO_NOME: "//input[contains(@placeholder,'Last Name')]"
    },
    ENDERECO: {
        XP_ENDERECO: "//textarea[1]"
    },
    TELEFONE: {
        XP_TELEFONE:"//input[@type='tel']"
    },
    EMAIL: {
        XP_EMAIL: "//input[@type='email']"  
    },
    GENERO: {
        XP_GENERO_MASCULINO:"//input[@type='radio' and @value='Male']",
        XP_GENERO_FEMININO:"//input[@type='radio' and @value='Female']"
    },
    HOBIES: {
        CHECKBOX_CRICKET:'#checkbox1',
        CHECKBOX_MOVIES:'#checkbox2',
        CHECKBOX_HOCKEY:'#checkbox3',

    },
    IDIOMAS: {
        LINGUA:'#msdd',
        PORTUGUES: '.ui-autocomplete > :nth-child(29)'
    },
    HABILIDADE:{
        SELECT:'#Skills'
    },
    PAIS: {
        SELECT:'#countries'
    },
    DATA_NASCIMENTO:{
        SELECT_ANO: '#yearbox',
        XP_SELECT_MES:"//select[contains(@placeholder,'Month')]",
        SELECT_DIA:'#daybox'
    },
    SENHA: {
        SENHA:'#firstpassword',
        CONFIMAR_SENHA: '#secondpassword'
    },
    BTN_ENVIAR:{
        ENVIAR:'#submitbtn'
    }




}

export default locators;