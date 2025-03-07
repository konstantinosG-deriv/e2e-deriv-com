import '@testing-library/cypress/add-commands'

function checkRegulatorySection()
{
    cy.findByRole('heading', { name: 'Deriv Investments (Europe) Limited' }).should('be.visible')
    cy.findByRole('heading', { name: 'Deriv (FX) Ltd' }).should('be.visible')
    cy.findByRole('img', { name: 'Labuan Fintech Association' }).should('be.visible')
    cy.findByRole('heading', { name: 'Deriv (BVI) Ltd' }).should('be.visible')
    cy.findByRole('img', { name: 'British Virgin Islands Financial Services Commission' }).should('be.visible')
    cy.findByRole('heading', { name: 'Deriv (V) Ltd' }).should('be.visible')
    cy.findByRole('img', { name: 'Vanuata Financial Services Commission' }).should('be.visible')
    cy.findByRole('img', { name: 'Vanuatu Financial Markets Association' }).should('be.visible')
    cy.findByRole('heading', { name: 'Deriv (SVG) LLC' }).should('be.visible')
    cy.findByRole('img', { name: 'Deriv SVG' }).should('be.visible')
    cy.findByRole('heading', { name: 'Deriv.com Limited' }).should('be.visible')
    cy.findByRole('img', { name: 'Deriv Limited' }).should('be.visible')
    cy.findByRole('heading', { name: 'The Financial Commission' }).should('be.visible') 
    cy.findByRole('img', { name: 'The Financial Commission' }).should('be.visible') 
}

function checkViewLicenseLink()
{   
    for(let index= 0; index < 4; index++)
    {
        cy.findAllByRole('link', { name: '(view licence)' }).eq(index).click()
    }
}

describe('QATEST-1644 - Regulatory page', () => {
    it('should validate the content and links in regulatory page for ROW', () => {
       cy.c_visitResponsive(`/regulatory/${Cypress.env('RegionROW')}`)
       cy.findByRole('heading', { name: 'Regulatory information' }).should('be.visible')
       checkRegulatorySection()
       checkViewLicenseLink()
       cy.findByRole('link', { name: 'Labuan Fintech Association' }).click()
       cy.findByRole('link', { name: 'Financial Markets Association' }).click()
       cy.findByRole('link', { name: 'view membership' }).click()
    })
})



