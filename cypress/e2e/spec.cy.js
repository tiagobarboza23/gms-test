/// <reference types="cypress" />



describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatorios', () => {
    cy.visit('http://127.0.0.1:3000/')
    cy.get('#signup-firstname').type('Rafael')
    cy.get('#signup-lastname').type('Tavares')
    cy.get('#signup-email').type('Rafael@teste.com')
    cy.get('#signup-phone').type('219996356874')
    cy.get('#signup-password').type('Teste@2025')
    cy.get('#signup-button').click()
    cy.get('#signup-button').should('contain', 'Cadastro realizado com sucesso!')

  })
})