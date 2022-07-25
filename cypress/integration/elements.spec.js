/// <reference types="Cypress" />
import data from '../data/documents.js'


describe('Testando elementos', () => {
     var dados = ''
     
     const alerta = 1

     beforeEach(() => {
          //cy.elements()
          dados = data.dados()
     });

     it('Testando Text Box', () => {
          cy.textBox(dados)
          cy.verifica_TextBox(dados)
     })


     it('Testando check box', () => {
          cy.checkBox()
          cy.verifica_CheckBox()

     })

     it('Testando Radio Button', () => {
          cy.radioButton()
     })   
     it('Cadastrando formulario com sucesso', () => {
          cy.webTables(dados)
          cy.verifica_nome(dados)
     })
     it('Web Tables verificando campos obrigatórios', () => {
          cy.webTables_Erro()
          cy.alerta(6)
     })
     it('Formulário com idade invalida', () => {
          dados.idade = "oi"
          
          cy.webTables(dados)
          cy.alerta(alerta)
     })
     it('Formulário com e-mail invalido', () => {
          dados.email = "email.email"
          cy.webTables(dados)
          cy.alerta(alerta)

     })
     it('Preenchendo, Editando e Excluindo os campos Web Tables', () => {
          cy.webTables(dados)
          cy.verifica_nome(dados)
          cy.edit_WebTables(dados)
          cy.excluindo_WebTables(dados)
     });

     it('Testando Botões', () => {
          cy.buttons()
     })

     it('Clicando nos links de APIS', () => {
          cy.link_Apis()
     })

     it('Verificando Imagens', () => {
          cy.verifica_Imagem()

     });

     it('Link valido', () => {
        //  cy.link_valido()
     })

     it('Upload arquivo', () => {
          cy.upload()
     });

     it('Propriedades dinamicas', () => {
          cy.clock()
          
          cy.visit('dynamic-properties')
          cy.tick(6000)
          cy.get('#visibleAfter').should('be.visible')
          cy.contains('This text has random Id').should('be.visible')
          
          
     });
  

})