Cypress.Commands.add('cadastro', dados =>{
    cy.visit('automation-practice-form')
    cy.get('#firstName').invoke('val',dados.nome).should('have.value',dados.nome)
    cy.get('#lastName').invoke('val',dados.sobrenome).should('have.value', dados.sobrenome)
    cy.get('#userEmail').type(dados.email).should('have.value', dados.email)
    cy.get('#gender-radio-3').last().check({force: true}).should('be.checked')
    cy.get('#userNumber').type(dados.telefone).should('have.value', dados.telefone)
    cy.get('#subjectsContainer').type(dados.departamento).should('contain', dados.departamento)
    cy.get('input[type="checkbox"]').last().check({force:true})
    cy.get('input[type="file"]').selectFile({contents: 'cypress/fixtures/teste.txt'}, {action: 'drag-drop'})
      .should($input => {
        expect($input[0].files[0].name).to.equal('teste.txt')
      })
    cy.get('#currentAddress').type(`${Cypress._.repeat('Testando Conhecimentos', 10)}`)
    cy.get('#state').click().contains('Haryana').click()
    cy.get('#city').click().contains('Panipat').click()
    cy.contains('Submit').click()
})
Cypress.Commands.add('cadastro_Genero', dados =>{
  cy.visit('automation-practice-form')
    cy.get('#firstName').invoke('val',dados.nome).should('have.value',dados.nome)
    cy.get('#lastName').invoke('val',dados.sobrenome).should('have.value', dados.sobrenome)
    cy.get('#userEmail').type(dados.email).should('have.value', dados.email)
    cy.get('#userNumber').type(dados.telefone).should('have.value', dados.telefone)
    cy.contains('Submit').click()
})

Cypress.Commands.add('verifica_Cadastro', ()=>{
  cy.contains('Thanks for submitting the form').should('be.visible')
  cy.contains('Close').click()
  cy.contains('Student Registration Form').should('be.visible')
})

Cypress.Commands.add('campos_Obrigatórios', () =>{
    cy.visit('automation-practice-form')
    cy.contains('Submit').click()
})

Cypress.Commands.add('alerta', valor =>{
    cy.get('.form-control:invalid').should('be.visible').should('have.length', valor)
})

Cypress.Commands.add('alerta_Radio', () =>{
  cy.get('.custom-control-input:invalid~.custom-control-label').should('be.visible')
})