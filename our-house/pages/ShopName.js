import React from 'react'
import Navbar from "../components/Navbar"
import styles from "../styles/ShopName.module.css"
import ShopNameItem from "../components/ShopNameItem"
import { useState, useEffect } from 'react'
import ShoppingListItem from '../components/ShoppingListItem'
// import styles from '../styles/ShoppingList.module.css'
// import styles from '../styles/ShoppingListItem.module.css'
import Link from 'next/link'

/*
  useState to pass unique shop name down.
  useState to store all data to later sort by shop name.
  (which is easier /quicker: sort the data on this page by shop name or 
  do we send a fresh get resquest to the api to request data by shop name - this api already exsits.)

  remove Link to next page.
  add button with onClick to trigger conditional render
  
  import ShoppingListItem component to display the items in a list
  pass the filter by name list to this componet

  link input component to both renders - name of shops and then to the list of items.
  - delete button nolonger has an id property to use to delete the list.


  conditional rendering to show clicked on shopping list. 
  (i.e. when you click on Lidl, you then get your list of items for Lidl).

  merge in post/patch branch and resolve conflicts
  tidy up file tree - don't the shopping folder anymore.


*/

const ShopName = () => {
  // const uniqueShopName = [...new Set(data.map(shop => shop.shoppingListName))];
  // const [nameOfShop, setNameOfShop] = useState(uniqueShopName)
  // setNameOfShop(uniqueShopName)

  // const [page, setPage] = useState(true) 
  const [shopName, setShopName] = useState(null)
  const [listItems, setListItems] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [nameClicked, setNameClicked] = useState(null)
  const [input, setInput] = useState("");
    // {username:"Abdullahi's", name: "Marks and Spencers",  id:"1", icon:"user_avatar_1.svg" },
    // {username:"Lee's", name: "Waitrose", id:"2", icon:"user_avatar_1.svg"}

  useEffect(() => {
    async function fetchShoppingLists(){
    const response = await fetch("https://the-gits.herokuapp.com/api/v1/shopping-list")
    const data = await response.json()
    // const uniqueShopName = [...new Set(data.map(shop => shop.shoppingListName))];
    setListItems(data)
    setShopName([...new Set(data.map(shop => shop.shoppingListName))])
    setIsLoading(false)
    console.log(data)
    console.log(shopName)
    }
    fetchShoppingLists()
  }, [])
  // takes in a value from the input component

  if (isLoading){
    return (
      <h2>Loading...</h2>
    )
  }

  const updateShoppingList = (value) => {
    const id = String(Math.floor(Math.random()*100+3))
    const newItem = {name: value, id: id, completed: false, icon:"user_avatar_1.svg"}
    console.log('sdfsdfs',[...listItems, newItem])
    setListItems([newItem, ...listItems])
  }
  const deleteListItem = (id) => {
    const newListItems = listItems.filter((item) => {
      if (item.id === id) {
        return false
      }
      else {
        return true
      }
    }
    )
    setListItems(newListItems)
  }
  // uses item id to toggled between true or false
  const toggleItemAsCompleted = (id) => {
    let newListItems = [];
    // find item by id, update the completed key:value and exit loop
    for(let i=0; i < listItems.length; i++) {
      if (listItems[i].id === id) {
        newListItems = [
          ...listItems.slice(0,i),
          {...listItems[i], completed: !listItems[i].completed },
          ...listItems.slice(i+1, listItems.lenght)
        ];
        break;
      }
    }
    setListItems(newListItems);
  }
  const handleSubmit = (e) => { // function to handle the submit button
       // inbuild function for handling buttons
      //  event.preventDefault()
      setInput("");
  };

  /*
  onClick added to shop name card
  that conditional renders the new shopping list of items using the ShoppingListItem component
  takes in the name of the shop that was clicked on to filter the data to render.
  use useEffect onClick to change a boolean state
  useState e.target and the turnery operator to control the render. 
  */
  return (
    <div className={styles.ShoppingNamelist}>
    <div className={styles.profile}>
        <div className={styles.bar}>
            <div className={styles.right}>
                <h2> Welcome back, Lee</h2>
            </div>
        <img src='/user_avatar_1.svg' width={20} height={70} alt='lee' />
        </div>
      </div>
    <Navbar/>
    <div className={styles.heading}>
        <h1>
        Shopping Lists
        </h1>
    </div>
      <div className={styles.inputBar}>
          <input  className={styles.input} type=' text'  onChange={(e) => setInput(e.target.value) } value={input}/>
          <div className={styles.button}  type='submit' onClick={ () => {
            handleSubmit()
            const value = document.querySelector('input')
            updateShoppingList(value.value)
          }}><p>Add Item</p></div>
      </div>
      {nameClicked ? <div className={styles.items}>
      {listItems.map((item, index) => (
        <ShoppingListItem name={item.item} key={index} id={item.id} deleteListItem={deleteListItem} toggleItemAsCompleted={toggleItemAsCompleted} />))}
    </div>
      
       : <div className={styles.items}>
        {shopName.map((item, index) => (
          
          
          <ShopNameItem name={item} key={index} id={item.id} deleteListItem={deleteListItem} toggleItemAsCompleted={toggleItemAsCompleted} setNameClicked={setNameClicked} setListItems={setListItems} />
          
        ))}
      </div>}
      


    </div>
  )
        
}

export default ShopName