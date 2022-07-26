- LogInButton 
    Behaviours:
        - Uses Auth0 to autheniticate user and create an account for them.
- LogInPage 
    Behaviours:
        -component loads landing page that has the Auth0 login with

    Renders:
        <LogInButton>
        <Logo>
        <H1>
        <H2>

- NavBar 
    Behaviours: 
        - Renders a dynamic nav bar on the side of the page that contains a shopping list link and clickable logo that always returns to home page.

    renders:
        <Shopping> - a tag to ShoppingHome page

- Profile
    Behaviours:
        - Renders user profile taken from login/account creation 

- Card 
    props:
        - icon
        - title
        - link
    Renders:
        <div>
        <div>{props.icon}</div>
        <div>{props.title}</div>
        <a {props.link}> 
        </div>

- Home
    Renders: 
        <NavBar>
        <Profile>
        <Card icon= {src = "dsfsfsaf" }
              title= Shopping 
              link = https:localhost3000/ShoppingHome >
        <Card icon=> 
        
- ShoppingHome 
    Renders: 
    <NavBar>
    <Profile>
    <shops> - a tag to ShoppingList 
    <Button> - Create new shopping list

- ShoppingListItem
    - indivual list item added by user

    props - profile? so that it tracks what user added to the shopping list  
    

- ShoppingList
    Renders: 
    <Navbar>
    <Profile>
    <input>
    <button>
    <ShoppingListItem>

