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

  it("test the input so the user can add items to the shop list", () => {
    cy.visit("https://final-project-front-end-the-gits.vercel.app/ShopName");
    cy.wait(1000)
    cy.get('a').last().click();
    cy.get('input[type="text"]').type('Apples');
    cy.get("button").contains('Add').click();
    cy.get("li p").contains('Apples');
  })

  it("the user can remove single item from shop list", () => {
    cy.visit("https://final-project-front-end-the-gits.vercel.app/ShopName");
    cy.wait(1000)
    cy.get('a').last().click();
    cy.get("li p").contains('Apples');
    cy.get("li:last-child() div div svg").parent().last().click();
    cy.get("li p").contains('Apples').should('not.exist')
  })
})





