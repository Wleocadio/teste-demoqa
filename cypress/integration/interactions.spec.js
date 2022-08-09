/// <reference types="Cypress" />


describe('Testando menu Interactions', () => {
    
    it('Sortable list', () => {
        cy.sortableList()
    })

    it('Sortable grid', () => {
        cy.sortableGrid()
    })

    it('Selectable', () => {
        cy.selectable()
    })

    it('Resizable', () => {
        cy.resizable()
    })

    it.only('Droppable', () => {
        cy.droppable()
        
    })


})