/// <reference types="Cypress" />
import data from '../data/documents.js'


describe('Praticando Form', () => {
    var dados = ''

    beforeEach(() => {
        dados= data.dados()
    })

    it('Verificando campos obrigatórios', () => {
        cy.campos_Obrigatórios()
        cy.alerta(3)
    })

    it('Cadastrar com sucesso', () => {
        cy.cadastro(dados)
        cy.verifica_Cadastro()
    });

    it('Tentar cadastrar com nome em branco', () => {
        dados.nome = ''
        cy.cadastro(dados)
        cy.alerta(1)
    })

    it('Tentar cadastrar com sobrenome em branco', () => {
        dados.sobrenome = ""
        cy.cadastro(dados)
        cy.alerta(1)
    })

    it('Tentar cadastrar com telefone em branco', () => {
        dados.telefone = 'A'
        cy.cadastro(dados)
        cy.alerta(1)
    })

    it.only('Tentar cadastrar sem selecionar o gênero', () => {
        cy.cadastro_Genero(dados)
        cy.alerta_Radio()
    })





})