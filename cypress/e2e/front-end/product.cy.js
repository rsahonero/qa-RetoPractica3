describe('Product feature', () => {
    it("TC-001: FE | Add new product to cart", () => {
        cy.visit("http://www.testingyes.com/onlineshop/"); 
        cy.get('[data-id-product="5"] > .thumbnail-container > .thumbnail > img').click();
        cy.get('.add > .btn').click();
        cy.get('.btn-secondary').click();
        cy.get('.blockcart').click();
        cy.get('.product-image > img').should('be.visible');
        cy.screenshot();
     });

     it("TC-002: FE | Delete product from the cart", () => {
        cy.visit("http://www.testingyes.com/onlineshop/"); 
        cy.get('[data-id-product="5"] > .thumbnail-container > .thumbnail > img').click();
        cy.get('.add > .btn').click();
        cy.get('.btn-secondary').click();
        cy.get('.blockcart').click();
        cy.get('.remove-from-cart > .material-icons').click();
        cy.get('.product-image > img').should('not.exist');
        cy.screenshot();
     });
   


});