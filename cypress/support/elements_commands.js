
Cypress.Commands.add('elements', () => {

    cy.visit('https://demoqa.com/')
    cy.get('.top-card h5').contains('Elements').click()

})


Cypress.Commands.add('textBox', dados => {
    cy.visit('text-box')
    cy.get('#userName').type(dados.nome).should('have.value', dados.nome)
    cy.get('#userEmail').type(dados.email).should('have.value', dados.email)
    cy.get('#currentAddress').type(dados.endereco_atual).should('have.value', dados.endereco_atual)
    cy.get('#permanentAddress').type(dados.endereco_per).should('have.value', dados.endereco_per)
    cy.get('.btn-primary').contains('Submit').click()

})
Cypress.Commands.add('verifica_TextBox', dados => {
    cy.get('.border p').should('have.length', 4).should(p => {
        expect(p[0]).to.contain.text(dados.nome)
        expect(p[1]).to.contain.text(dados.email)
        expect(p[2]).to.contain.text(dados.endereco_atual)
        expect(p[3]).to.contain.text(dados.endereco_per)
    })
    // .should(function ($p) {
    //    expect($p[0]).to.contain(`Name:${dados.nome}`)
    //    expect($p[1]).to.contain(`Email:${dados.email}`)
    //    expect($p[2]).to.contain(`Current Address :${dados.endereco_atual}`)
    //    expect($p[3]).to.contain(`Permananet Address :${dados.endereco_per}`)
    //})
})
Cypress.Commands.add('checkBox', () => {
    const longText = "You have selected : home desktop notes commands documents workspace react angular veu office public private classified general downloads wordFile excelFile"
    cy.visit('checkbox')
    cy.get('.rct-options [title="Expand all"]').click()
    cy.get('.rct-node-parent input[type="checkbox"]').should('have.length', 17)
        .each(checkbox => {
            cy.wrap(checkbox).check({ force: true })
            cy.wrap(checkbox).should('be.checked')
        })
})

Cypress.Commands.add('verifica_CheckBox', () => {
    cy.get('.text-success').should('be.visible').should('have.length', 17)
})

Cypress.Commands.add('radioButton', () => {
    cy.visit('radio-button');
    cy.get('.custom-control input[type="radio"]').should('have.length', 3)
        .each(radio => {
            cy.wrap(radio).check({ force: true })
            cy.wrap(radio).should('be.checked')
        })
    cy.get('#noRadio').should('be.disabled')
})

Cypress.Commands.add('webTables', dados => {
    cy.visit('webtables')
    cy.get('.col-md-7 #addNewRecordButton').click()
    cy.get('#firstName').type(dados.nome).should('have.value', dados.nome)
    cy.get('#lastName').type(dados.sobrenome).should('have.value', dados.sobrenome)
    cy.get('#userEmail').type(dados.email).should('have.value', dados.email)
    cy.get('#age').type(dados.idade).should('have.value', dados.idade)
    cy.get('#salary').type(dados.salario).should('have.value', dados.salario)
    cy.get('#department').type(dados.departamento).should('have.value', dados.departamento)
    cy.get('#submit').contains('Submit').click()

})
Cypress.Commands.add('verifica_nome', dados =>{
    cy.get('.rt-tr-group').should('contain', dados.nome)
})

Cypress.Commands.add('edit_WebTables', dados => {
    cy.contains(dados.nome)
        .parent('.rt-tr')
        .within(() => {
            // all searches are automatically rooted to the found tr element
            cy.get('.rt-td').eq(1).contains(dados.sobrenome)
            cy.get('.rt-td').eq(2).contains(dados.idade)
            cy.get('.rt-td').eq(3).contains(dados.email)
            cy.get('.rt-td').eq(4).contains(dados.salario)
            cy.get('.rt-td').eq(5).contains(dados.departamento)
            cy.get('.rt-td .action-buttons .mr-2').click()
        })

    cy.get('#department').clear().type(dados.departamento).should('have.value', dados.departamento)
    cy.get('#submit').contains('Submit').click()
    cy.get('.rt-tr-group').should('contain', dados.departamento)
})
Cypress.Commands.add('excluindo_WebTables', dados => {
    cy.contains(dados.nome) //encontra o campo que contem o nome especificado
        .parent('.rt-tr') // obtem o elemento pai de um conjunto de elementos
        .within(() => { // executa as ações nos elementos filhos

            cy.get('.rt-td').eq(1).contains(dados.sobrenome) // verifica o sobrenome no segunda classe
            cy.get('.rt-td .action-buttons').find('span').eq(1).click() // verifica dentro da classe action e encontra dois span clicando no segundo (eq(1))

        })
})

Cypress.Commands.add('webTables_Erro', () => {
    cy.visit('webtables')
    cy.get('.col-md-7 #addNewRecordButton').click()
    cy.get('#submit').contains('Submit').click()
    //cy.get('.modal-body .col-md-6').should('have.css', 'border-color').and('include', '#dc3545')

})

Cypress.Commands.add('alerta', valor => {
    cy.get('.form-control:invalid').should('be.visible').should('have.length',valor)
})

Cypress.Commands.add('buttons', () => {
    cy.visit('buttons')
    cy.get('#doubleClickBtn').dblclick()
    cy.contains('You have done a double click').should('be.visible')
    cy.get('#rightClickBtn').rightclick()
    cy.contains('You have done a right click').should('be.visible')
    cy.get('.col-md-6 .mt-4').find('.btn').eq(1).click()
    cy.contains('You have done a dynamic click').should('be.visible')
})

Cypress.Commands.add('link_Apis', ()=>{
    cy.visit('links')
    cy.get('#created').click()
    cy.contains('#linkResponse','Link has responded with staus 201 and status text Created').should('be.visible')
    cy.get('#no-content').click()
    cy.contains('Link has responded with staus 204 and status text No Content').should('be.visible')
    cy.get('#moved').click()
    cy.contains('Link has responded with staus 301 and status text Moved Permanently').should('be.visible')
    cy.get('#bad-request').click()
    cy.contains('Link has responded with staus 400 and status text Bad Request').should('be.visible')
    cy.get('#unauthorized').click()
    cy.contains('Link has responded with staus 401 and status text Unauthorized').should('be.visible')
    cy.get('#forbidden').click()
    cy.contains('Link has responded with staus 403 and status text Forbidden').should('be.visible')
    cy.get('#invalid-url').click()
    cy.contains('Link has responded with staus 404 and status text Not Found').should('be.visible')
})

Cypress.Commands.add('verifica_Imagem', ()=>{
    cy.visit('broken')
    //cy.get('.col-md-6').should('have.attr','src','/images/Toolsqa.jpg')
    cy.get('.col-md-6').find('img').eq(0).should('have.attr', 'src').should('include','Toolsqa')
    cy.get('.col-md-6').find('img').eq(1).should('have.attr', 'src').should('include','Toolsqa_1')
})

Cypress.Commands.add('link_valido', ()=>{
    cy.visit('broken')
    cy.contains('Click Here for Valid Link').click()
    //cy.get('.home-banner').find('img').should('have.attr', 'src').should('include','WB')
    
})

Cypress.Commands.add('upload', () =>{
    cy.visit('upload-download');
    cy.get('input[type=file]').selectFile({contents: 'cypress/fixtures/teste.txt'},{action:'drag-drop'})
      .should(($input)=>{
        expect($input[0].files[0].name).to.eq('teste.txt')
      })

})