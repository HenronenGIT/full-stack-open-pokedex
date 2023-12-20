describe("Navigation", function () {
  it("front page can be opened", function () {
    cy.visit("http://localhost:5001");
    cy.contains("ivysaur");
    cy.contains('ivysaur').click();
    cy.url().should('include', '/pokemon/ivysaur');
    cy.contains('chlorophyll');

  });
});
