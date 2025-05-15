describe('Liens des Compétences', () => {
    it('Doit vérifier les liens externes', () => {
        cy.visit('/#skills');

        cy.get('[data-testid="skill-item"]')
            .should('have.attr', 'href', 'https://developer.mozilla.org/')
            .and('have.attr', 'target', '_blank');
    });
});

describe('Grille de compétences', () => {
    beforeEach(() => {
        cy.visit('/#skills');
    });

    it('Doit afficher des éléments de compétence', () => {
        cy.get('[data-testid="skill-item"]').should('have.length.greaterThan', 0);
    });

    it('Chaque compétence doit avoir un nom lisible', () => {
        cy.get('[data-testid="skill-item"]').each(($el) => {
            cy.wrap($el).invoke('text').should('not.be.empty');
        });
    });
});
