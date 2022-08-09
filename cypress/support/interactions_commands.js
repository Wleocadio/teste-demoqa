

Cypress.Commands.add('sortableList', () => {
    const dataTransfer = new DataTransfer
    cy.visit('sortable')
    //cy.get('.list-group-item').eq(5)
    cy.get('div.list-group-item').eq(5)
        .trigger('mousedown', { which: 1, pageX: 0, pageY: 100 })
        .trigger('mousemove', { which: 1, pageX: 0, pageY: 1, force: true })
        .trigger('mouseup', { force: true })

    cy.get('div.list-group-item').eq(0)
        .trigger('mousedown', { which: 1, pageX: 0, pageY: 100 })
        .trigger('mousemove', { which: 1, pageX: 0, pageY: 500, force: true })
        .trigger('mouseup', { force: true })
})
Cypress.Commands.add('sortableGrid', () => {
    cy.visit('sortable')
    cy.contains('Grid').click()

    cy.get('.create-grid .list-group-item').contains('One')
        .trigger('mousedown', { which: 1, pageX: 0, pageY: 100, force: true })
        .trigger('mousemove', { which: 1, pageX: 100, pageY: 200, force: true })
        .trigger('mouseup', { force: true })

    cy.get('.create-grid .list-group-item').contains('Nine')
        .trigger('mousedown', { which: 1, pageX: 100, pageY: 100, force: true })
        .trigger('mousemove', { which: 1, pageX: -300, pageY: -300, force: true })
        .trigger('mouseup', { force: true })

})

Cypress.Commands.add('selectable', () => {
    cy.visit('selectable')

    cy.get('#verticalListContainer .mt-2').contains('Morbi leo risus').click().should('have.class', 'list-group-item active')
})

Cypress.Commands.add('resizable', () => {
    cy.visit('resizable')

    cy.get('#resizableBoxWithRestriction').invoke('attr', 'style', 'width: 316px; height: 267px;').should('have.attr', 'style', 'width: 316px; height: 267px;')
    cy.get('#resizable').invoke('attr', 'style', 'width: 382px; height: 221px;').should('have.attr', 'style', 'width: 382px; height: 221px;')
})

Cypress.Commands.add('droppable', () => {
    cy.visit('droppable')
    //cy.get('#draggable').invoke('attr', 'style', 'position: relative; left: 262px; top: 54px;')
    cy.get('#draggable')
        .trigger('mousedown', { which: 1, pageX: 100, pageY: 100, force: true })
        .trigger('mousemove', { which: 1, pageX: 380, pageY: 150, force: true })
        .trigger('mouseup', { force: true })

    cy.get('#droppableExample-tab-accept').should('be.visible').click()

    cy.get('#acceptable')
        .trigger('mousedown', { which: 1, pageX: 100, pageY: 100, force: true })
        .trigger('mousemove', { which: 1, pageX: 380, pageY: 120, force: true })
        .trigger('mouseup', { force: true })

    cy.get('#notAcceptable')
        .trigger('mousedown', { which: 1, pageX: 100, pageY: 100, force: true })
        .trigger('mousemove', { which: 1, pageX: 380, pageY: 130, force: true })
        .trigger('mouseup', { force: true })



    cy.contains('Prevent Propogation').should('be.visible').click()

    cy.get('#dragBox')
        .trigger('mousedown', { which: 1, pageX: 100, pageY: 100, force: true })
        .trigger('mousemove', { which: 1, pageX: 380, pageY: 190, force: true })
        .trigger('mouseup', { force: true })

    cy.get('#dragBox')
        .trigger('mousedown', { which: 1, pageX: 100, pageY: 100, force: true })
        .trigger('mousemove', { which: 1, pageX: 140, pageY: 390, force: true })
        .trigger('mouseup', { force: true })

    cy.contains('Revert Draggable').should('be.visible').click()

    cy.get('#revertable')
        .trigger('mousedown', { which: 1, pageX: 100, pageY: 100, force: true })
        .trigger('mousemove', { which: 1, pageX: 380, pageY: 120, force: true })
        .trigger('mouseup', { force: true })

    cy.get('#notRevertable')
        .trigger('mousedown', { which: 1, pageX: 100, pageY: 100, force: true })
        .trigger('mousemove', { which: 1, pageX: 380, pageY: 110, force: true })
        .trigger('mouseup', { force: true })

})