describe('', () => {
    it("TC-003: FE | Search product accessories", () => {
        cy.visit("http://www.testingyes.com/onlineshop/");
        cy.get('[href="http://www.testingyes.com/onlineshop/6-accessories"]').click();
        cy.get('.ui-autocomplete-input').type('Brown Bear Cushion');
        cy.get('form > button > .material-icons').click();
        cy.get('[data-id-product="10"] > .thumbnail-container > .thumbnail > img').should('be.visible');
        cy.screenshot();
     });
});