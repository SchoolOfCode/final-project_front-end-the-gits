import React from 'react'
import styles from '../styles/ShoppingList.module.css'
import Navbar from '../components/Navbar.js'
import InputBar from '../components/InputBar.js'
import ShoppingListItem from '../components/ShoppingListItem.js'
import { useState } from 'react'

const ShoppingList = () => {
  const [listItems, setListItems] = useState([
    {name: "Bread", id:"1", completed: false, icon:"user_avatar_1.svg"},
    {name: "Milk", id:"2", completed: false, icon:"user_avatar_1.svg"}])

  // takes in a value from the input component
  const updateShoppingList = (value) => {
    setListItems([value, ...listItems])
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
        <ShoppingListItem name={item.name} key={index} id={item.id} deleteListItem={deleteListItem}/>))}
    </ul>

    </div>
  )
}

export default ShoppingList