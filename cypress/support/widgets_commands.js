
Cypress.Commands.add('sectionOne', ()=>{
    cy.visit('accordian')
    cy.get('.card #section1Heading').dblclick()
    cy.get('.card-body p').contains('ncluding versions of Lorem Ipsum.').should('be.visible')

})

Cypress.Commands.add('sectionTwo', ()=>{
    cy.visit('accordian')
    cy.contains('.card','Where does it come from?').click()
    cy.get('.accordian-container .collapse.show').should('be.visible')
    

})

Cypress.Commands.add('sectionThree', ()=>{
    cy.visit('accordian')
    cy.get('#accordianContainer .accordion').find('.card').eq(2).click()
    cy.get('.accordian-container .collapse.show').should('be.visible').should('contain',' (injected humour and the like)')

})

Cypress.Commands.add('autoComplete', ()=>{
    cy.visit('auto-complete')
    cy.get('#autoCompleteMultipleContainer').type('b').contains('Black').click()
    cy.get('#autoCompleteMultipleContainer').type('Y{downArrow}{enter}')
    cy.get('#autoCompleteMultipleContainer').type('R{enter}')
    cy.get('#autoCompleteMultipleContainer').should('contain','Black').and('contain','Yellow').and('contain','Red')

    cy.get('#autoCompleteSingle .auto-complete__control').type('M{enter}')
    cy.get('#autoCompleteSingle .auto-complete__control').should('contain','Magenta')
})

Cypress.Commands.add('datePicker', ()=>{
    cy.visit('date-picker')
    cy.get('#datePickerMonthYearInput').clear().should('be.visible').type('02/01/1999{enter}',{wait: 3000}).should('have.value','02/01/1999')
    cy.get('#dateAndTimePickerInput').clear().should('be.visible').type('March 01, 2000 9:15 AM{enter}',{wait: 3000}).should('have.value','March 1, 2000 9:15 AM')
})

Cypress.Commands.add('slider', valor=>{
    cy.visit('slider')
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
    cy.get('input[type="range"]').then(($range) =>{
        const range= $range[0]
        nativeInputValueSetter.call(range, valor)
        range.dispatchEvent(new Event('change', {value: valor, bubbles: true}))
        expect($range).to.value(valor)
    })
})

Cypress.Commands.add('progressBar', ()=>{
    cy.visit('progress-bar')
    cy.get('#startStopButton').should('be.visible').click()
    cy.wait(2000);
    cy.get('#progressBar').should('contain','33')
    cy.get('#startStopButton').click()
})

Cypress.Commands.add('tabs',()=>{
    cy.visit('tabs');
    cy.get('#tabsContainer').contains('Use').click()
    cy.contains('injected humour and the like').should('be.visible')

    cy.get('#tabsContainer').contains('What').click()
    cy.contains('including versions of Lorem Ipsum').should('be.visible')

    cy.get('#tabsContainer').contains('Origin').click()
    cy.contains('1914 translation by H. Rackham').should('be.visible')
})

Cypress.Commands.add('toolTips', ()=>{
    cy.visit('tool-tips');
    cy.get('#toolTipButton').trigger('mouseover')
    cy.get('.tooltip-inner').should('be.visible').should('contain','You hovered over the Button')

    cy.get('#toolTipTextField').trigger('mouseover')
    cy.get('.tooltip-inner').should('be.visible').should('contain','You hovered over the text field')

    
})

Cypress.Commands.add('subMenu',()=>{
    cy.visit('menu#');
    cy.contains('Main Item 2').trigger('mousedown', {button: 2}).trigger('mousedown',{butto:1})
})

Cypress.Commands.add('selectMenu',()=>{
    cy.visit('select-menu')
    cy.get('#withOptGroup').click().contains('A root option').click()
    cy.get('.css-1uccc91-singleValue').should('contain','A root option')

    cy.get('#selectOne').type('P{enter}').should('contain','Prof.')

    cy.get('#oldSelectMenu').select('Indigo',{force:true}).should('contain','Indigo')

    cy.get('input[type="text"]').eq(2).type('G{enter}',{force:true}).type('{esc}',{force:true})

    cy.get('#cars').select('Opel').invoke('val').should('contain','opel')

})