#language: pt

Funcionalidade: Bebidas


Como usuario, desejo cadastrar, 
editar, deletar e listar Bebidas

Contexto: Background name
Dado  endpoint

@bebidas
Cenario: Deve cadastrar bebida
Quando envio a requisicao cadastrar a bebida
Entao recebo o status 201
E valido os dados de retorno da bebida cadastrada

@bebidas
Cenario: Deve listar bebida
Quando envio a requisicao para listar a bebida
Entao recebo o status 200

@bebidas
Cenario: Deve editar bebida
Quando envio a requisicao para editar a bebida
Entao recebo o status 200
E validos os dados de retorno 

@bebidas
Cenario: Deve excluir bebida
Quando envio a requisicao para excluir a bebida
Entao recebo o status 204
 


