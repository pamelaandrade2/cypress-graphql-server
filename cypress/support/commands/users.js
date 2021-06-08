const query = require('../query/users')

Cypress.Commands.add("users",() => {
    cy.request({
        method: 'POST',
        url: '/graphql',
        headers: {
            'Content-Type': 'application/json',
            'accept': '*/*'
        },
        body: JSON.stringify({
            query: query()
        })
    }).then( response => {
        expect(response.status).to.eq(200)
    }).as("users")
})