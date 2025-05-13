// Exemple : Ajoute une commande pour cliquer sur un élément avec un testid
Cypress.Commands.add('clickByTestId', (testId) => {
    cy.get(`[data-testid="${testId}"]`).click();
  });