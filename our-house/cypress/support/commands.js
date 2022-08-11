// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => {
    cy.session([email, password], ()=> {
      cy.visit("https://final-project-front-end-the-gits.vercel.app/");
      cy.get("login button").click();
  
      cy.origin(
        "https://dev-addbc3gj.us.auth0.com/",
        {args: [email, password]},
        ([email, password])=>{
          cy.get("#1-email").type(email);
          cy.get("input[type='password']").type(password);
          cy.get("button[type='submit']").click();
        }
      );
      cy.get("h2").should("Mumtaz");
    });
  });