import React from 'react'
import styles from '../styles/ShoppingList.module.css'
import Navbar from '../components/Navbar.js'
import InputBar from '../components/InputBar.js'
import ShoppingListItem from '../components/ShoppingListItem.js'


const ShoppingList = () => {
  const props = {
    name: "Lidl"
  }
  const items = ["bread", "milk", "chocolate"]

  return (
    <div className={styles.shoppinglist}>
    <Navbar/>
    <h1>{props.name} Shopping List</h1>
    <InputBar/>
    <ul>
      {items.map((item) => (
        <ShoppingListItem name={item} key={item.id}/>))}
    </ul>

    </div>
  )
}

export default ShoppingList