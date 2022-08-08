import React from 'react'
import ChoresItem from "../components/ChoresItem"
import { useState } from 'react'
import InputBar from "../components/InputBar"
import styles from "../styles/ShopName.module.css"


const Chores = () => {
  const [listItems, setListItems] = useState([
    {username:"Abdullahi's", name: "Asda",  id:"1", icon:"user_avatar_1.svg" },
    {username:"Lee's", name: "Lidl", id:"2", icon:"user_avatar_1.svg"}])

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
  const handleSubmit = (e) => { 
      setInput("");
  };
  return (
    <div className={styles.ShoppingNamelist}>
    <div className={styles.heading}>
        <h1>
          Chores
        </h1>
        <InputBar 
            handleClick={updateShoppingList}
        />
    </div>
      <div className={styles.items}>
        {listItems.map((item, index) => (
          <ChoresItem name={item.name} key={index} id={item.id} deleteListItem={deleteListItem} toggleItemAsCompleted={toggleItemAsCompleted} />))}
    </div>
    </div>
  )
}

export default Chores