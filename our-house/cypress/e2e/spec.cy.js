// Check the home page has the right header and login button
context("Home Page", () => {
  beforeEach(()=>{
    cy.visit("https://final-project-front-end-the-gits.vercel.app/");
  });

  it("looking for main page", () => {
    cy.get("h1").contains("Our House");
  });
  it("login button", ()=> {
    cy.get("button").contains("Login")
  })
});

context("MVP walk through with Auth0", ()=>{
  beforeEach(()=>{
    // run custom command to login on every test
    cy.login(Cypress.env("EMAIL"), Cypress.env("PASSWORD"));
  });

  // Simply test the app logs in successfully
  it("testing auth0 login works correctly", ()=>{
    cy.visit("https://final-project-front-end-the-gits.vercel.app/UserHome")
    cy.get("h2");
  })

  // User can click on the card to go into the shopping lists page
  it("test user can click on the shopping list card", () => {
    cy.visit("https://final-project-front-end-the-gits.vercel.app/UserHome");
    cy.get('a[href="/ShopName"]').first().click()
  })

  // once in the shop lists user can create a new one
  it("test the input so the user can create lists", () => {
    cy.visit("https://final-project-front-end-the-gits.vercel.app/ShopName");
    cy.wait(200);
    cy.get('input[type="text"]').type('Tesco');
    cy.get("button").contains('Add').click();
    cy.wait(200);
  })

  // inside the shop list a user can add items
  it("test the input so the user can add items to the shop list", () => {
    cy.visit("https://final-project-front-end-the-gits.vercel.app/ShopName");
    cy.wait(1000)
    cy.get('a').last().click();
    // add some apples
    cy.get('input[type="text"]').type('Apples');
    cy.get("button").contains('Add').click();
    cy.get("li p").contains('Apples');
    // add some Tomato sauce
    cy.get('input[type="text"]').type('Tomato sauce');
    cy.get("button").contains('Add').click();
    cy.get("li p").contains('Tomato sauce');
    // add some Orange juice
    cy.get('input[type="text"]').type('Orange juice');
    cy.get("button").contains('Add').click();
    cy.get("li p").contains('Orange juice');
  })

  // list items can be marked as done
  it("the user can mark single item as completed", () => {
    cy.visit("https://final-project-front-end-the-gits.vercel.app/ShopName");
    cy.wait(1000)
    cy.get('a').last().click();
    // mark first item as done
    cy.get(".theme-shoppinglist-item").first().should('have.class', 'undefined')
    cy.get(".theme-shoppinglist-item p").first().click();
    // mark last item as done
    cy.get(".theme-shoppinglist-item:last-child").first().should('have.class', 'undefined')
    cy.get(".theme-shoppinglist-item:last-child p").first().click();
    // uncheck first item as done
    cy.get(".theme-shoppinglist-item").first().not('have.class', 'undefined');
    cy.get(".theme-shoppinglist-item p").first().click();
  })

  // tests that the previously created item can be removed
  it("the user can remove single item from shop list", () => {
    cy.visit("https://final-project-front-end-the-gits.vercel.app/ShopName");
    cy.wait(1000)
    cy.get('a').last().click();
    // remove the orange juice
    cy.get("li p").contains('Orange juice');
    cy.get("li:last-child() div div svg").parent().last().click();
    cy.get("li p").contains('Orange juice').should('not.exist')
    // remove the tomato sauce
    cy.get("li p").contains('Tomato sauce');
    cy.get("li:last-child() div div svg").parent().last().click();
    cy.get("li p").contains('Tomato Sauce').should('not.exist')
    // remove the apples
    cy.get("li p").contains('Apples');
    cy.get("li:last-child() div div svg").parent().last().click();
    cy.get("li p").contains('Apples').should('not.exist')
  })
})





