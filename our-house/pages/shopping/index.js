import React from 'react'
import Navbar from "../../components/Navbar"
import styles from "../../styles/ShopName.module.css"
import ShopNameItem from "../../components/ShopNameItem"
import { useState } from 'react'


// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://the-gits.herokuapp.com/api/v1/shopping-list`)
  const data = await res.json()
  // console.log(data)
  // Pass data to the page via props
  return { props: { data } }
}


const ShopName = ({data}) => {
  const [listItems, setListItems] = useState(data)
    // [{username:"Abdullahi's", name: "Marks and Spencers",  id:"1", icon:"user_avatar_1.svg" },
    // {username:"Lee's", name: "Waitrose", id:"2", icon:"user_avatar_1.svg"}]

    const [input, setInput] = useState("");
  // takes in a value from the input component

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

          
      <div className={styles.items}>
        {listItems.map((item, index) => (
          <ShopNameItem name={item.shoppingListName} key={index} id={item.id} deleteListItem={deleteListItem} toggleItemAsCompleted={toggleItemAsCompleted} />))}
      </div>


    </div>
  )
}

export default ShopName