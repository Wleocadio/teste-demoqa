/// <reference types="Cypress" />


describe('Testando Alert', () => {

    it('Clique no botão para ver o alerta', () => {
        cy.alerta()
    })

    it('Ao clicar no botão, o alerta aparecerá após 5 segundos', () => {
        cy.alertaCincoSegundos()
    })

    it('Ao clicar no botão, o alerta não esperará 5 segundos para aparecer', () => {
        cy.alertaSegundos()
    })
})

    it('Ao clicar no botão, a caixa de confirmação aparecerá e o Cypress no botão ok', () => {
        cy.alertaConfirmacaoOk()
        cy.messageAlerta('You selected Ok')
    })

    it('Ao clicar no botão, a caixa de confirmação aparecerá e o Cypress no botão cancelar', () => {
        cy.alertaConfirmacaoCancelar()
        cy.messageAlerta('You selected Cancel')
    });

    it('Ao clicar no botão, a caixa de prompt será exibida', () => {
        const text = 'Comando executado com sucesso'
        cy.alertaPrompt(text)
        cy.messageAlerta(text)
    })