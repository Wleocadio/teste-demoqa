Cypress.Commands.add('smallModal', () =>{
    cy.visit('modal-dialogs')
    cy.contains('button', 'Small modal').click()
    cy.get('.modal-content').should('be.visible').should('contain','This is a small modal. It has very less content')
    cy.get('#closeSmallModal').click()

})

Cypress.Commands.add('largeModal', ()=>{
    cy.visit('modal-dialogs')
    cy.contains('button', 'Large modal').click()
    cy.get('.modal-content').should('be.visible').should('contain','Large Modal')
    cy.contains('button','Close').click()
})

Cypress.Commands.add('modalVerificar', ()=>{
    cy.get('#modalWrapper').should('contain','Small modal').and('contain','Large modal')
})