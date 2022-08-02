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

    it('Movendo Slider', () => {
        const valor = 77
        cy.slider(valor)
    })

    it('Progress Bar', () => {
     cy.progressBar()
    });


    it('Tabs', () => {
       cy.tabs()
        
    })

    it('tool-tips', () => {
        cy.toolTips()
    });

    it('Submenu', () => {
        cy.subMenu()
    });

    it.only('Selecionano menu', () => {
        cy.selectMenu()
    });

});