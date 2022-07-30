

Cypress.Commands.add('alerta', () => {
    cy.visit('alerts')

    cy.get('#alertButton').should('be.visible').click()
    cy.on('window:alert', (text) =>{
        expect(text).to.contains('You clicked a button')
    })

})

Cypress.Commands.add('alertaCincoSegundos', () => {
    cy.visit('alerts')

    cy.get('#timerAlertButton').should('be.visible').click()
    cy.wait(5000)
    cy.on('window:alert', (text)=>{
        expect(text).to.contains('This alert appeared after 5 seconds')
    })

})

Cypress.Commands.add('alertaSegundos', () => {
    cy.clock()
    cy.visit('alerts')

    cy.get('#timerAlertButton').should('be.visible').click()
    cy.tick(5000)  
    cy.on('window:alert', (text) =>{
        expect(text).to.contains('This alert appeared after 5 seconds')
    })
    
})

Cypress.Commands.add('alertaConfirmacaoOk',()=>{
    cy.visit('alerts')
    cy.get('#confirmButton').should('be.visible').click()
    cy.on('window:alert', (text) =>{
        expect(text).to.contains('Do you confirm action?')
    })

})

Cypress.Commands.add('alertaConfirmacaoCancelar',()=>{
    cy.visit('alerts')
    cy.get('#confirmButton').should('be.visible').click()
    cy.on('window:confirm', (text) =>{
        expect(text).to.contains('Do you confirm action?')
        return false;
    })

})

Cypress.Commands.add('alertaPrompt', text =>{
    cy.visit('alerts')
    cy.window().then(($win) =>{
        cy.stub($win, 'prompt').returns(text)
        cy.get('#promtButton').click()
   })

})


Cypress.Commands.add('messageAlerta', text => {

    cy.get('.text-success').should('be.visible').should('contain',text)
})