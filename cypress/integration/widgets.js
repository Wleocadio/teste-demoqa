/// <reference types="Cypress" />


describe('Verificando Widgets', () => {
    
    it('Verificando primeira seção', () => {
        cy.sectionOne()

    })

    it('Verificando segunda seção', () => {
        cy.sectionTwo()

    })

    it('Verificando Terceira seção', () => {
        cy.sectionThree()

    })

    it('Auto Complete', () => {
        cy.autoComplete()

    })

    it('Date Picker', () => {
        cy.datePicker()
        
    });

    it.only('Movendo Slider', () => {
        const valor = 77
        cy.slider(valor)
    });


});