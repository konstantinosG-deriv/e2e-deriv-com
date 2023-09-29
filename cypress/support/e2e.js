Cypress.Commands.add('visitResponsive', (path, size) => {
    //Custom command that allows us to use baseUrl + path and detect with this is a responsive run or not.
    cy.log(path)
    if (size === undefined)
        size = Cypress.env("viewPortSize")

    if (size == 'small')
        cy.viewport('iphone-xr')
    else if (size == 'medium')
        cy.viewport('ipad-2')
    else
        cy.viewport('macbook-16')

    cy.visit(path)

    if (path.includes('region')) //Wait for relevent elements to appear (based on page)
        {
            cy.log('Home page Selected')
            cy.findByRole('button', { name: 'whatsapp icon' }).should('be.visible', { timeout: 30000 }) //For the home page, this seems to be the best indicator that a page has fully loaded. It may change in the future.
        }

});






  