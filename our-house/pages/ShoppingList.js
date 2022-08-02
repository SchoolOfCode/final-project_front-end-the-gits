import React from 'react'
import styles from '../styles/ShoppingList.module.css'
import Navbar from '../components/Navbar.js'
import InputBar from '../components/InputBar.js'
import Profile from '../components/Profile.js'
import ShoppingListItem from '../components/ShoppingListItem.js'
import { useState, useEffect } from 'react'

const ShoppingList = () => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true)
  const [listItems, setListItems] = useState(null)
  
    // {name: "Bread", id:"1", completed: false, icon:"user_avatar_1.svg"},
    // {name: "Milk", id:"2", completed: false, icon:"user_avatar_1.svg"}

  useEffect(() => {
    async function fetchShoppingListItems(){
      const response = await fetch("https://the-gits.herokuapp.com/api/v1/shopping-list")
      const data = await response.json()
      setListItems(data)
      setIsLoading(false)
      console.log(data)
    }
    fetchShoppingListItems()
  }, [])

  if (isLoading){
    return (
      <h2>Loading...</h2>
    )
  }
  

  // takes in a value from the input component
  // check new data structure matches the database item structure
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

  const props = {
    
    name: "Lidl"
  }
  
  // Input bar create locally... to be replaced by component
  return (
    <div className={styles.shoppinglist}>
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
        <img className={styles.listProfile} src='/user_avatar_1.svg' alt="" />
        <h1>
        
        {props.svg} {props.name} SHOP
        </h1>
    </div>
    <div className={styles.inputBar}>
        <input  className={styles.input} type=' text'  onChange={(e) => setInput(e.target.value) } value={input}/>
        <div className={styles.button}  type='submit' onClick={ () => {
          handleSubmit()
          const value = document.querySelector('input')
          updateShoppingList(value.value)
          // setListItems(value.value)
          
        }}><p>Add Item</p></div>
    </div>
    {/* <InputBar updateShoppingList={updateShoppingList}/> */}
    <div className={styles.items}>
      {listItems.map((item, index) => (
        <ShoppingListItem name={item.item} key={index} id={item.id} deleteListItem={deleteListItem} toggleItemAsCompleted={toggleItemAsCompleted} />))}
    </div>

    </div>
  )
}

export default ShoppingList