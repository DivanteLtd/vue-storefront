/* eslint no-undef: 0 */
describe('register path', () => {
  it('should register user', () => {
    cy.visit('/');
    cy.get('[data-testid=accountButton]').click();
    cy.get('[data-testid=registerLink]').click();
    cy.get('[name=email]').type('xxtest@testxx.com');
    cy.get('[name=first-name]').type('Firstname');
    cy.get('[name=last-name]').type('Lastname');
    cy.get('[name=password]').type('Password123');
    cy.get('[name=password-confirm]').type('Password123');
    cy.get('#terms').check({ force: true });
    cy.get('[data-testid="errorMessage"]').should('not.exist');
    cy.get('[data-testid=subscribeSubmit]', { timeout: 5000 }).click();
    cy.get(`[data-testid=notificationMessage]`).should('exist').contains(
      'You are logged in!');
  });
});
