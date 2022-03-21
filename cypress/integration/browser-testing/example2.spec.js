// The objective in this test is demonstrate the best practice related browser test were not need clicked in the link for check redirect new page. When the element has attributes "target" and "_blank" is possible check behavior with this attributes. Obs: "target" related link access when click and "_blank" to open link in new tab.

describe('Best practices related Browser Testing Example 2', () => {
  beforeEach(() => {

    // Here call is intercept for test, so it simulates values ​​that will not change as the table is updated
    cy.intercept(
      'GET',
      '**search**',
      { fixture: 'stories' }
    ).as('getStories')

    // When access the link page, wait for alias related call intercept
    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')

  })

  it('Verify first link on table', () => {
    // Here verify if first link have attribute with link related and attribute for open in new tab
    cy.get('.table-row a').first().and('have.attr', 'href', 'https://example.com/lc-jg').and('have.attr', 'target', '_blank')

  })
});