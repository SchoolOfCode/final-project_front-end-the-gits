import React from 'react'
import styles from '../styles/ShoppingList.module.css'
import Navbar from '../components/Navbar.js'
import InputBar from '../components/InputBar.js'
import ShoppingListItem from '../components/ShoppingListItem.js'
import { useState } from 'react'

const ShoppingList = () => {
  const [listItems, setListItems] = useState(["bread", "milk", "chocolate"])

  // takes in a value from the input component
  const updateShoppingList = (value) => {
    setListItems([...listItems, value])
  }

  const props = {
    name: "Lidl"
  }
  
  // Input bar create locally... to be replaced by component
  return (
    <div className={styles.shoppinglist}>
    <Navbar/>
    <h1>{props.name} Shopping List</h1>
    <input type="text"/>
    <button onClick={ () => {
      const value = document.querySelector('input')
      updateShoppingList(value.value)
    }}></button>
    {/* <InputBar updateShoppingList={updateShoppingList}/> */}
    <ul>
      {listItems.map((item, index) => (
        <ShoppingListItem name={item} key={index}/>))}
    </ul>

    </div>
  )
}

export default ShoppingList