describe('Countries', () => {
  it('Search countries', () => {
    cy.visit('http://localhost:3000/country');

    cy.contains('Search Countries');

    cy.contains('Afghanistan');

    cy.get('input').type('Brazil').should('have.value', 'Brazil');

    cy.get('ul').find('h2').should('have.length', 1).contains('Brazil');

    cy.get('input').clear().type('Argentina').should('have.value', 'Argentina');

    cy.get('ul').find('h2').should('have.length', 1).contains('Argentina');

    cy.get('input')
      .clear()
      .type('Dont match')
      .should('have.value', 'Dont match');

    cy.get('ul').find('h2').should('have.length', 0);
  });
});
