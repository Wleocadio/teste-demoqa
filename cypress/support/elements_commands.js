Cypress.Commands.add('elements', () => {

    cy.visit('https://demoqa.com/')
    cy.get('.top-card h5').contains('Elements').click()

})


Cypress.Commands.add('textBox', dados =>{
    cy.get('.menu-list span').contains('Text Box').click()
    cy.get('#userName').type(dados.nome).should('have.value', dados.nome)
    cy.get('#userEmail').type(dados.email).should('have.value', dados.email)
    cy.get('#currentAddress').type(dados.endereco_atual).should('have.value', dados.endereco_atual)
    cy.get('#permanentAddress').type(dados.endereco_per).should('have.value', dados.endereco_per)
    cy.get('.btn-primary').contains('Submit').click()

})
Cypress.Commands.add('verifica_TextBox', dados =>{
    cy.get('.border p').should('have.length', 4).should( p =>{
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
Cypress.Commands.add('checkBox', () =>{
    const longText = "You have selected : home desktop notes commands documents workspace react angular veu office public private classified general downloads wordFile excelFile"
    cy.get('.element-group span').contains('Check Box').click()
    cy.get('.rct-options [title="Expand all"]').click()
    cy.get('.rct-node-parent input[type="checkbox"]').should('have.length', 17)
      .each(checkbox =>{
        cy.wrap(checkbox).check({force: true})
        cy.wrap(checkbox).should('be.checked')
    })    
})

Cypress.Commands.add('verifica_CheckBox', () => {
    cy.get('.text-success').should('be.visible').should('have.length', 17)
})

Cypress.Commands.add('radioButton', ()=>{
    cy.get('.element-group span').contains('Radio Button').click()
    cy.get('.custom-control input[type="radio"]').should('have.length', 3)
      .each(radio => {
        cy.wrap(radio).check({force:true})
        cy.wrap(radio).should('be.checked')
      })
    cy.get('#noRadio').should('be.disabled')
})

Cypress.Commands.add('webTables', dados =>{
    cy.get('.element-group span').contains('Web Tables').click()
    cy.get('.col-md-7 #addNewRecordButton').click()
    cy.get('#firstName').type(dados.nome).should('have.value', dados.nome)
    cy.get('#lastName').type(dados.sobrenome).should('have.value', dados.sobrenome)
    cy.get('#userEmail').type(dados.email).should('have.value', dados.email)
    cy.get('#age').type(dados.idade).should('have.value', dados.idade)
    cy.get('#salary').type(dados.salario).should('have.value', dados.salario)
    cy.get('#department').type(dados.departamento).should('have.value', dados.departamento)
    cy.get('#submit').contains('Submit').click()
    cy.get('.rt-tr-group').should('contain',dados.nome)
   
    
})

Cypress.Commands.add('edit_WebTables', dados =>{
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
    cy.get('.rt-tr-group').should('contain',dados.departamento)
})
Cypress.Commands.add('excluindo_WebTables', dados =>{
    cy.contains(dados.nome)
    .parent('.rt-tr')
    .within(() => {
// all searches are automatically rooted to the found tr element
    cy.get('.rt-td').eq(1).contains(dados.sobrenome)
    cy.get('.rt-td .action-buttons').find('span').eq(1).click()
    
})
})

Cypress.Commands.add('webTables_Erro', () =>{
    cy.get('.element-group span').contains('Web Tables').click()
    cy.get('.col-md-7 #addNewRecordButton').click()
    cy.get('#submit').contains('Submit').click()
    
    
})
