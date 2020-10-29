describe('Countries', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should search countries', () => {
    cy.contains('Search Countries');
    cy.contains('Afghanistan');

    cy.get('input').as('search');
    cy.get('ul').find('h2').as('result');

    cy.get('@search').type('Brazil').should('have.value', 'Brazil');

    cy.get('@result').should('have.length', 1).contains('Brazil');

    cy.get('@search')
      .clear()
      .type('Argentina')
      .should('have.value', 'Argentina');

    cy.get('@result').should('have.length', 1).contains('Argentina');

    cy.get('@search')
      .clear()
      .type('Dont match')
      .should('have.value', 'Dont match');

    cy.get('@result').should('have.length', 0);
  });

  it('should redirect to details page', () => {
    cy.contains('Brazil').click();

    cy.url().should('include', '/country');

    cy.contains(new RegExp('area', 'i'));
    cy.contains(new RegExp('population', 'i'));
    cy.contains(new RegExp('top level domain', 'i'));

    cy.findByRole('link', { name: /go back/ }).as('back');

    cy.get('@back').should('have.attr', 'href').and('include', '/country');

    cy.get('@back').click();

    cy.contains('Search Countries');
    cy.url().should('include', '/country');
  });
});
