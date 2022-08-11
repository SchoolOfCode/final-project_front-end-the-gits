context("Home Page", () => {
  beforeEach(()=>{
    cy.visit("https://final-project-front-end-the-gits.vercel.app/");
  });

  it("looking for main page", () => {
    cy.get("h1").contains("Our House");
  });
  it("login button", ()=> {
    cy.get("button").contains("Login / Sign-up")
  })
});

context("Auth0 login", ()=>{
  beforeEach(()=>{
    cy.login(Cypress.env("EMAIL"), Cypress.env("PASSWORD"));
  });
  it("testing auth0 login works correctly", ()=>{
    cy.get("h2").contains("Mumtaz");
  })
})





