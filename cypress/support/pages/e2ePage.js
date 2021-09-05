/// <reference types="cypress"/>
import locators from "../../support/locators";

class e2ePage{

    preencheOprimeiroNome(primeiroNome){
        cy.xpath(locators.NOME.XP_PRIMEIRO_NOME).type(primeiroNome)
    }

    preencheOultimoNome(segundoNome){
	cy.xpath(locators.NOME.XP_ULTIMO_NOME).type(segundoNome)
    }

    preencheEndereco(endereco){
        cy.xpath(locators.ENDERECO.XP_ENDERECO).type(endereco)

    }

    preencheNumeroTelefone(numero){
        cy.xpath(locators.TELEFONE.XP_TELEFONE).type(numero)
    }

    preencheEmail(email){
        cy.xpath(locators.EMAIL.XP_EMAIL).type(email)
    }
    escolherGeneroMasculino(){
        cy.xpath(locators.GENERO.XP_GENERO_MASCULINO).click()
    }

    escolherHobies(){
        cy.get(locators.HOBIES.CHECKBOX_CRICKET).click()
	    cy.get(locators.HOBIES.CHECKBOX_MOVIES).click()
	    cy.get(locators.HOBIES.CHECKBOX_HOCKEY).click()
    }

    selecionarIdioma(){
        cy.get(locators.IDIOMAS.LINGUA).click()
	    cy.get(locators.IDIOMAS.PORTUGUES).click()
    }

    selecionarHabilidade(habilidade){
        cy.get(locators.HABILIDADE.SELECT).select(habilidade,{force:true})
    }

    selecionarPais(pais){
        cy.get(locators.PAIS.SELECT).select(pais)
    }

    preencherDataNascimento(ano, mes, dia){
        cy.get(locators.DATA_NASCIMENTO.SELECT_ANO).select(ano)
	    cy.xpath(locators.DATA_NASCIMENTO.XP_MES).select(mes)
	    cy.get(locators.DATA_NASCIMENTO.SELECT_DIA).select(dia)
    }

    preencheSenha(){
        cy.get(locators.SENHA.SENHA).type('123123@Qa')
    }

    confirmaSenha(){
        cy.get(locators.SENHA.CONFIMAR_SENHA).type('123123@Qa')
	  
    }

    botaoEnviar(){
        cy.get(locators.BTN_ENVIAR.ENVIAR).click()
    }


}

export default e2ePage;