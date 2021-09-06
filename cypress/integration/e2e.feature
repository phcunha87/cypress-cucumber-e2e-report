#language: pt

Funcionalidade: Realizar cadastro

    Eu como usuário, quero realizar meu cadastro de modo que possa usufruir dos meus acessos
@cadastro
Cenario: Deve realizar o cadastro
Dado que acesso a pagina de cadastro
Quando preencho nome e sobrenome
E preencho endereço
E e-mail
Entao preencho numero de telefone
E escolho o genero
E meus hobbies
Entao seleciono idioma
E seleciono minhas habilidades
E seleciono meu país
Quando informo minha data de nascimento
E escolho minha senha
E confirmo minha senha
Entao clico no botão enviar

@focus
Esquema do Cenario: Deve realizar multiplos cadastros
Dado que acesso a pagina de cadastro
Quando preencho "<nome>" e "<sobrenome>"
E preencho endereco "<endereco>"
E o email "<email>"
Entao preencho numero de telefone "<telefone>"
E escolho o genero
E meus hobbies
Entao seleciono idioma
E seleciono minhas habilidades
E seleciono meu país
Quando informo minha data de nascimento
E escolho minha senha
E confirmo minha senha
Entao clico no botão enviar

Exemplos:
|nome     |sobrenome   |endereco    |email                         |telefone  |
|Automação|cypress     |Rua Columbia|testes@qualityassurance.com.br|5599995555|
|QA testes|Javascript  |Rua Ao lado |testes@qa.com.br              |5599994444|
|Qualidade|Testes      |Rua Mais um |qa@qa.com.br                  |5599993333|

