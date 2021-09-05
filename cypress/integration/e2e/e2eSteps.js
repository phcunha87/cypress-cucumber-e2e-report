/// <reference types="cypress"/>


const url = Cypress.config("baseUrl")
import e2ePage from '../../support/pages/e2ePage'
const elementsPage = new e2ePage


Given(/^que acesso a pagina de cadastro$/, () => {
	cy.visit(url)
});

When(/^preencho nome e sobrenome$/, () => {
	elementsPage.preencheOprimeiroNome('Testes')
	elementsPage.preencheOultimoNome('Automatizados')
});

When(/^preencho endereço$/, () => {
	elementsPage.preencheEndereco('Avenida Utinga 933')
});

When(/^preencho numero de telefone$/, () => {
	elementsPage.preencheNumeroTelefone('5599995555')
});

When(/^e-mail$/, () => {
	elementsPage.preencheEmail('qualityassurance@email.com.br')
});

When(/^escolho o genero$/, () => {
	elementsPage.escolherGeneroMasculino()
	
});

When(/^meus hobbies$/, () => {
	elementsPage.escolherHobies()
});

Then(/^seleciono idioma$/, () => {
	elementsPage.selecionarIdioma()
});

When(/^seleciono minhas habilidades$/, () => {
	elementsPage.selecionarHabilidade('Javascript')
});

When(/^seleciono meu país$/, () => {
	elementsPage.selecionarPais('Brazil')
});


When(/^informo minha data de nascimento$/, () => {
	elementsPage.preencherDataNascimento('1987', 'December', '4')
});


When(/^escolho minha senha$/, () => {
	elementsPage.preencheSenha()
});


When(/^confirmo minha senha$/, () => {
	elementsPage.confirmaSenha()
});


Then(/^clico no botão enviar$/, () => {
	elementsPage.botaoEnviar()
});






