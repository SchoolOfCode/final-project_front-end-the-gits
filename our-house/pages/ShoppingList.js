import React from 'react'
import styles from '../styles/ShoppingList.module.css'
import Navbar from '../components/Navbar.js'
import InputBar from '../components/InputBar.js'
import ShoppingListItem from '../components/ShoppingListItem.js'
import { useState } from 'react'

const ShoppingList = () => {

  const [listItems, setListItems] = useState(["bread", "milk", "chocolate"])


  const handleClick = (value) => {
    setListItems([...listItems, value])

  }


  const props = {
    name: "Lidl"
  }
  

  return (
    <div className={styles.shoppinglist}>
    <Navbar/>
    <h1>{props.name} Shopping List</h1>
    <input type="text"/>
    <button onClick={ () => {
      const value = document.querySelector('input')
      handleClick(value.value)
    }}></button>
    {/* <InputBar handleClick={handleClick}/> */}
    <ul>
      {listItems.map((item, index) => (
        <ShoppingListItem name={item} key={index}/>))}
    </ul>

    </div>
  )
}

export default ShoppingList