describe('', () => {
    it('TC-005: BE | View product details', () => {
        cy.request("GET", "http://www.testingyes.com/onlineshop/art/5-19-today-is-a-good-day-framed-poster.html#/19-dimension-40x60cm")
            .its('body')
            .should('include', 'Today is a good day Framed poster')
    });
});