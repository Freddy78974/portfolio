describe('Portfolio Navigation', () => {
    it('visits all sections', () => {
      cy.visit('/');
      cy.contains('Compétences').click();
      cy.url().should('include', '#skills');
      cy.contains('Contactez-moi').should('be.visible');
    });
  });