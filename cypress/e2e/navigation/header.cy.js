describe('Navigation Portfolio', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Doit naviguer vers la section Compétences', () => {
        cy.get('nav a[href="#skills"]').click();
        cy.get('#skills').should('be.visible');
        cy.contains('HTML & CSS').should('exist');
    });

    it('Doit ouvrir le formulaire de contact', () => {
        cy.get('nav a[href="#contact"]').click();
        cy.get('#contact form').should('be.visible');
    });
});