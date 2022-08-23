import React from 'react'
import ChoresItem from "../components/ChoresItem"
import { useState, useEffect } from 'react'
import InputBar from "../components/InputBar"
import styles from "../styles/Chores.module.css"
import { useUser } from "@auth0/nextjs-auth0/";


const Chores = () => {
  // initial state for the list of chores
  const [listItems, setListItems] = useState([]);
    // calling the Auth0 hook
    const { user, isLoading } = useUser();
    // store all the data fetched
    const [fetchData, setFetchData] = useState(null);
  // to render the page depending on weather the fetching is complete
  const [isPageLoading, setIsPageLoading] = useState(true);
  // temporaty state, tracks the value of the input box
  const [input, setInput] = useState("");
  
  useEffect(() => {
    async function fetchChores() {
      const response = await fetch(`${process.env.URL}/chores/${user.sub}`);
      const data = await response.json();
      if (response?.error){
        setListItems([])
      } else {
        setListItems(data);
      }
      
      console.log(data)
      setIsPageLoading(false);
    }
    // once user auth0 has loaded get the database items
    if (!isLoading){
      fetchChores()
    }
    ;
  }, [isLoading]);

  // let the user know if the page still loading
  if (isPageLoading) {
    return <h2 className="loading">Loading...</h2>;
  }



  // creates a list of the items which have been completed
  const completedList = listItems.filter ((item) => {
    if (item.completed === true) {
      return true
    } 
    else {
      return false
    }
  })
    
  // creates a list of the items which a yet to be completed
  const choresTodo = listItems.filter ((item) => {
    if (item.completed === false) {
      return true
    } 
    else {
      return false
    }
  })

  // takes in a value from the input component and updates the list state
  const updateShoppingList = async (value) => {
    
    const newItem = {
      item: value, 
      sub: user.sub,
      completed: false,
      username: user.name, 
    }
    const data = await fetch(`${process.env.URL}/chores`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });
    
    const response = await data.json()
    
    console.log(response)
    setListItems([response, ...listItems]);
  }

  // uses the item id to remove it from the list
  const deleteListItem = async (id) => {
    const newListItems = listItems.filter((item) => {
      if (item._id === id) {
        return false
      }
      else {
        return true
      }
    });
    setListItems(newListItems)
     // remove item from the database
     const data = await fetch(`${process.env.URL}/chores`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id}),
    });
  }

  // uses item id to toggled between true or false
  const toggleItemAsCompleted = (id) => {
    let newListItems = [];
    const dbItem = {id};
    // find item by id, update the completed key:value and exit loop
    for (let i = 0; i < listItems.length; i++) {
        console.log(id)
        console.log(listItems[i]._id)
      if (listItems[i]._id === id) {
        // create updated list
        newListItems = [
          ...listItems.slice(0, i),
          { ...listItems[i], completed: !listItems[i].completed },
          ...listItems.slice(i + 1, listItems.length),
        ];
        // create db object to udpate
        dbItem.completed = !listItems[i].completed;
        break;
      }
    }
    // update the local state
    setListItems(newListItems);
  }

  return (
    <div className={styles.ShoppingNamelist}>
      <div className={styles.heading}>
        {/* the input bar is here while we work on the streatch goal */}
        <InputBar 
            title= "Chores"
            handleClick={updateShoppingList}
        />
      </div>
      <div className={styles.choresWrapper}>
          <div className={styles.choresList}>
            <div className={styles.todoItems}>
              {choresTodo.map((item, index) => (
                <ChoresItem name={item.item} key={index} id={item._id} deleteListItem={deleteListItem} toggleItemAsCompleted={toggleItemAsCompleted} completed={item.completed}/>))}
            </div>
            <div className={styles.completedItems}>
              {completedList.map((item, index) => (
                <ChoresItem name={item.item} key={index} id={item._id} deleteListItem={deleteListItem} toggleItemAsCompleted={toggleItemAsCompleted} completed={item.completed}/>))}
            </div>
          </div>
      </div>
    </div>
  )
}

export default Chores