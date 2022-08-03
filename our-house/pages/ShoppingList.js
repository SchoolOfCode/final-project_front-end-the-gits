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
  const updateShoppingList = async (value, shopName) => {
    const id = String(Math.floor(Math.random()*100+3))
    const newItem = {name: value, id: id, completed: false, icon:"user_avatar_1.svg"}
    console.log('sdfsdfs',[...listItems, newItem])
    setListItems([newItem, ...listItems])

    const newShopItem = {item: value, shoppingListName: shopName, completed: false, username: user.name}


    const data = await fetch(`${process.env.URL}/Shopping-List`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newShopItem),
    })
    console.log(`${process.env.URL}/Shopping-List`)
  }

  const deleteListItem = async (id) => {
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
    console.log(id)
    const data = await fetch("https://the-gits.herokuapp.com/api/v1/Shopping-List", {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id: id}),
    })
  }

  // uses item id to toggled between true or false
  const toggleItemAsCompleted = (id) => {
    // let newListItems = [];
    // // find item by id, update the completed key:value and exit loop
    // for(let i=0; i < listItems.length; i++) {
    //   if (listItems[i].id === id) {
    //     newListItems = [
    //       ...listItems.slice(0,i),
    //       {...listItems[i], completed: !listItems[i].completed },
    //       ...listItems.slice(i+1, listItems.length)
    //     ];
    //     break;
    //   }

    // }
    // setListItems(newListItems);
    let updatedShopList = listItems.map((item) =>{
      if(item.id === id){
        item.completed = !item.completed;
        console.log(item.completed)
      }
      return item
    })
    setListItems(updatedShopList)
    console.log(updatedShopList)
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
    <h1>{props.name} Shopping List</h1>
    <input type="text"/>
    <button onClick={ () => {
      const value = document.querySelector('input')
      updateShoppingList(value.value, props.name)
    }}></button>
    {/* <InputBar updateShoppingList={updateShoppingList}/> */}
    <div className={styles.items}>
      {listItems.map((item, index) => (
        <ShoppingListItem name={item.item} key={index} id={item.id} deleteListItem={deleteListItem} toggleItemAsCompleted={toggleItemAsCompleted} />))}
    </div>

    </div>
  )
}

export default ShoppingList