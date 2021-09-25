/// <reference types="cypress"/>

const url = "http://localhost:8080/api/bebidas";

Given(/^endpoint$/, () => {
	cy.request({
		url: url
	
	})
});

When(/^envio a requisicao cadastrar a bebida$/, () => {
	cy.request({ 
		method:'POST',
		url: url,
		body:{
			nome: 'Cerveja da boa',
			quantidade: 15,
			valor:19.00
		}
	}).as('response')
});


Then(/^recebo o status 201$/, () => {
	cy.get('@response').then(res=> {
		expect(res.status).to.be.equal(201)
		
	})
});


Then(/^valido os dados de retorno da bebida cadastrada$/, () => {
	cy.get('@response').then(res=> {
		expect(res.body).to.have.property('id')
		expect(res.body).to.have.property('nome','Cerveja da boa')
		expect(res.body).to.have.property('quantidade',15)
		expect(res.body).to.have.property('valor',19.00)
	})
});


When(/^envio a requisicao para listar a bebida$/, () => {
	cy.request({ 
		method:'GET' ,
		url: url,
	}).as('response')
});

Then(/^recebo o status 200$/, () => {
	cy.get('@response').then(res=> {
		expect(res.status).to.be.equal(200)
	})
});



When(/^envio a requisicao para editar a bebida$/, () => {
	cy.request({
		method: 'GET',
		url :url ,
		
		qs:{
			nome:'Cerveja da boa'
		}

	}).then(res => {
		cy.request({ 
			method:'PUT',
			url:url + "/" + `${res.body[0].id}`,
			body:{	
				nome: 'Cerveja da boa atualizada',
				quantidade: 15,
				valor:19.00
			}
		}).as('response')

	})

});

Then(/^validos os dados de retorno$/, () => {
	cy.get('@response').then(res=> {
		expect(res.status).to.be.equal(200)
		expect(res.body).to.have.property('nome','Cerveja da boa atualizada')
		expect(res.body).to.have.property('quantidade',15)
		expect(res.body).to.have.property('valor',19.00)
	})
});

When(/^envio a requisicao para excluir a bebida$/, () => {
	cy.request({
		url :url,
		method: 'GET',
		qs:{
			nome:'Cerveja da boa atualizada'
		}

	}).then(res => {
		cy.request({ 
			method:'DELETE',
			url:url +"/" + `${res.body[0].id}`,	
		}).as('response')
	})	
});

Then(/^recebo o status 204$/, () => {
	cy.get('@response').then(res=> {
		expect(res.status).to.be.equal(204)
	})
});





