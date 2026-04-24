describe('GrabDocs Testing - Group 4', () => {

  it('Test Financials upload and Settings page access', () => {

    // Login
    cy.visit('https://app.grabdocs.com/login');

     cy.get('input').eq(0).type('ocwolfyladejobi@gmail.com');
    cy.get('input').eq(1).type('cWPAEqjZ4UZNNhi');

    cy.contains('Sign in').click();

    cy.url({ timeout: 25000 }).should('not.include', 'login');

    // Financials test
    cy.visit('https://app.grabdocs.com/upload');

    cy.contains('Financials', { timeout: 15000 }).click({ force: true });

    cy.wait(2000);

    cy.contains('Import', { timeout: 10000 }).click({ force: true });

    cy.wait(2000);

    cy.get('input[type="file"]', { timeout: 10000 })
      .selectFile('cypress/fixtures/test.png', { force: true });

    cy.contains('test', { timeout: 15000 }).should('exist');

    // Settings test
    cy.visit('https://app.grabdocs.com/settings');

    cy.url({ timeout: 10000 }).should('include', 'settings');

    cy.contains('Settings', { timeout: 15000 }).should('exist');

  });

});