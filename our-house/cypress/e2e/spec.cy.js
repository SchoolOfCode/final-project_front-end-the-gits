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
    cy.visit("https://final-project-front-end-the-gits.vercel.app/UserHome")
    cy.get("h2");
  })

  it("test user can click on the shopping list card", () => {
    cy.visit("https://final-project-front-end-the-gits.vercel.app/UserHome");
    cy.get('a[href="/ShopName"]').first().click()
  })

  it("test the input so the user can create lists", () => {
    cy.visit("https://final-project-front-end-the-gits.vercel.app/ShopName");
    cy.get('input[type="text"]').type('Tesco');
    cy.get("button").contains('Add').click();
  })
})





