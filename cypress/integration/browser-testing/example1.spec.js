// The objective in this test is demonstrate the best practice related browser test were not need clicked in the link for check redirect new page. When the element has attributes "target" and "_blank" is possible check behavior with this attributes. Obs: "target" related link access when click and "_blank" to open link in new tab.

describe('Best practices related Browser Testing Example 1', () => {

  beforeEach(() => {
    cy.visit('https://notes-serverless-app.com');

  });

  it('Verify open login page in actual scream', () => {
    cy.get('.btn-info').should('have.attr', 'href', '/login').and('not.have.attr', 'target', '_blank');

  });

});