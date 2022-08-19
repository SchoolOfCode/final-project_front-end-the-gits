import React, { useState, useEffect } from "react";
import styles from "../styles/ShopName.module.css";
import ShopNameItem from "../components/ShopNameItem";
import ShoppingListItem from "../components/ShoppingListItem";
import InputBar from "../components/InputBar";
import { useUser } from "@auth0/nextjs-auth0/";


const ShopName = () => {
  // calling the Auth0 hook
  const { user, isLoading } = useUser();
  // store all the data fetched
  const [fetchData, setFetchData] = useState(null);
  // list of shop list names
  const [shopName, setShopName] = useState("");
  // all the list items
  const [listItems, setListItems] = useState([]);
  // to render the page depending on weather the fetching is complete
  const [isPageLoading, setIsPageLoading] = useState(true);
  // the name of the shop the user clicked on so we can render the right list
  const [nameClicked, setNameClicked] = useState(null);
  
  // use an effect to get ALL the shopping list items
  useEffect(() => {
    async function fetchShoppingLists() {
      const response = await fetch(`${process.env.URL}/shopping-list/${user.sub}`);
      const data = await response.json();
      setFetchData(data);
      // only sort the list into shop names if there was not fetching error
      if (!data?.error && !fetchData?.error){
        setShopName([...new Set(data.map((shop) => shop.shoppingListName))]);
      }
      setIsPageLoading(false);
    }
    // once user auth0 has loaded get the database items
    if (!isLoading){
      fetchShoppingLists()
    }
    ;
  }, [isLoading]);

  // let the user know if the page still loading
  if (isPageLoading) {
    return <h2>Loading...</h2>;
  }

  // takes the items from DB and create a list of shop names
  function compareName(name) {
    if (!fetchData.error) {
      const newListItems = fetchData.filter((item) => {
        if (item.shoppingListName === name) {
          return true;
        } else {
          return false;
        }
      });
      setListItems(newListItems);
    }}

  // using the input value and the rendered shop name add new item to the list
  const updateShoppingList = async (value, shopName) => {
    // updates the local state only
    const id = String(Math.floor(Math.random() * 100 + 3));
    console.log(id)
    const newItem = {
      item: value,
      _id: id,
      completed: false,
      icon: "user_avatar_1.svg",
    };
    setListItems([newItem, ...listItems]);

    // update the DB
    const newShopItem = {
      item: value,
      shoppingListName: shopName,
      completed: false,
      username: user.name,
      sub: user.sub
    };

    const data = await fetch(`${process.env.URL}/Shopping-List`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newShopItem),
    });
  };

  const updateListOfShops = (value) => {
    setShopName([value, ...shopName]);
  };

  // removes a single item from a shopping list
  const deleteListItem = async (id) => {
    console.log(id)
    const newListItems = listItems.filter((item) => {
      // try item.id
      console.log(item.id)
      console.log(item._id)
      if (item._id === id) {
        return false;
      } else {
        return true;
      }
    });
    // update local state
    setListItems(newListItems);
    console.log(listItems)

    // remove item from the database
    const data = await fetch(`${process.env.URL}/Shopping-List`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id}),
    });
  };

  // using the name of the shop remove it from the list of shops
  const deleteShop = async (shops) => {
    // update local state
    const newListOfShops = shopName.filter((name) => {
      if (shops === name) {
        return false;
      } else {
        return true;
      }
    })
    setShopName(newListOfShops);

    // remove shop from the database
    const data = await fetch(`${process.env.URL}/Shopping-List/remove-shop`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({shopName: shops}),
    });
  }

  // uses item id to toggled between true or false
  const toggleItemAsCompleted = async (id) => {
    let newListItems = [];
    const dbItem = {id};
    // find item by id, update the completed key:value and exit loop
    for (let i = 0; i < listItems.length; i++) {
      if (listItems[i]._id === id) {
        // create updated list
        newListItems = [
          ...listItems.slice(0, i),
          { ...listItems[i], completed: !listItems[i].completed },
          ...listItems.slice(i + 1, listItems.lenght),
        ];
        // create db object to udpate
        dbItem.completed = !listItems[i].completed;
        break;
      }
    }
    // update the local state
    setListItems(newListItems);

    // update the DB with item completed
    
    const data = await fetch(`${process.env.URL}/Shopping-List`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dbItem)
    })
  };
  
  return (
    <div className={styles.ShoppingNamelist}>
       <div className={styles.shopBox}>
      {nameClicked ? (
        <div >
          <InputBar
            title={`${nameClicked} Shopping list`}
            name={nameClicked}
            handleClick={updateShoppingList}
            placeholderText="Add item"
          />
          <div className={styles.items}>
          {listItems.length > 0 ? (listItems.map((item, index) => (
            <ShoppingListItem
              completed={item.completed}
              name={item.item}
              key={index}
              id={item._id}
              deleteListItem={deleteListItem}
              toggleItemAsCompleted={toggleItemAsCompleted}
            />
          ))
          ): (
            <div className={styles.noItems}>
              <h2>No items</h2>
            </div>
          )}</div> 
          
        </div>
      ) : (
        <div className={styles.shopNames}>
          <div className={styles.inputBar}>
          <InputBar
            title="Create and Save lists"
            name={nameClicked}
            handleClick={updateListOfShops}
            placeholderText="Enter shop name"
          />
          </div>
          {shopName ? (
            <div className={styles.cardContainer}>
            
            {shopName.map((item, index) => (
              <ShopNameItem
                name={item}
                key={index}
                id={item.id}
                deleteListItem={deleteShop}
                toggleItemAsCompleted={toggleItemAsCompleted}
                setNameClicked={setNameClicked}
                setListItems={setListItems}
                compareName={compareName}
              />
            ))}
          </div>
          ) : (
            <div>
              <h2>No shops added</h2>
            </div>
          )}
         
        </div>
      )}
      </div>
    </div>
  );
};

export default ShopName;
