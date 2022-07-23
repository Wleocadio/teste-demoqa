/// <reference types="Cypress" />
import data from '../data/documents.js'


describe('Testando elementos', () => {
    var dados = data.dados()

    beforeEach(() => {
        cy.elements()
    });
    
   it('Text Box', () => {
       cy.textBox(dados)
       cy.verifica_TextBox(dados)
   })


   it('check box', () => {
        cy.checkBox()
        cy.verifica_CheckBox()

   })

   it('Radio Button', () => {
        cy.radioButton()
   })

   it('Preenchendo Web Tables com sucesso', () => {
        cy.webTables(dados)

   })
   it.only('Preenchendo, Editando e Excluindo os campos Web Tables', () => {
        cy.webTables(dados)
        cy.edit_WebTables(dados)
        cy.excluindo_WebTables(dados)
   });

 
   it('Web Tabkes verificando campos obrigatórios', () => {
    cy.webTables_Erro()

});
 

})