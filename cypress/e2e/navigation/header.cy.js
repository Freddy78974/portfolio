describe('Navigation Portfolio', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Doit naviguer vers la section Profil', () => {
        cy.get('nav a[href="#profil"]').click();
        cy.get('#profil').should('be.visible');
        cy.contains('Node.js').should('exist');
    });

    it('Doit ouvrir le formulaire de contact', () => {
        cy.get('nav a[href="#contact"]').click();
        cy.get('#contact form').should('be.visible');
    });
});