describe('Los estudiantes professor', function() {
    it('Should show searched professors and direct to selected one', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      cy.contains('Buscar un profesor...').click()
      cy.get('#react-select-required_error_checksum--value > div.Select-input > input').type('Mario Lin')
      cy.contains('Mario Linares Vasquez').click()
      cy.url().should('eq', 'https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-linares-vasquez')
    })
    it('Should show searched professors and direct to selected one', function() {
      cy.visit('https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-linares-vasquez')
      cy.get('input[name="ISIS1206"]').check()
      cy.should('not.contain', 'Mario es un muy buen profesor y así mismo es exigente a la hora de calificar.')
      cy.should('not.contain', 'El semestre pasado vi web con Mario, se nota que sabe muy bien los temas y domina Javascript bastante.')
    })
})
