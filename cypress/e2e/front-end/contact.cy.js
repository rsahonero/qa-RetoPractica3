describe('Contact us', () => {
    it("TC-004: FE | Error message in the Contact form when the fields are not filled", () => {
        cy.visit("http://www.testingyes.com/onlineshop/");
        cy.get('#contact-link > a').click();
        cy.get('.form-footer > .btn').click();
        cy.get('.col-xs-12 > ul > li').should('have.text', 'Invalid email address.');
        cy.screenshot();
    });
});