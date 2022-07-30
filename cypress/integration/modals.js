/// <reference types="Cypress" />


describe('Testando modals', () => {
    
    it('Small  Modal', () => {
        cy.smallModal()
        cy.modalVerificar()
    })

    it('Large Modal', () => {
        cy.largeModal()
        cy.modalVerificar()

    })
});