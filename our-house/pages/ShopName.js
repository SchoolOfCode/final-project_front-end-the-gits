import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/ShopName.module.css";
import ShopNameItem from "../components/ShopNameItem";
import { useState, useEffect } from "react";
import ShoppingListItem from "../components/ShoppingListItem";
import InputBar from "../components/InputBar";
import { useUser } from '@auth0/nextjs-auth0/'

const ShopName = () => {
  const {user} = useUser()
  const [fetchData, setFetchData] = useState(null);
  const [shopName, setShopName] = useState(null);
  const [listItems, setListItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [nameClicked, setNameClicked] = useState(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    async function fetchShoppingLists() {
      const response = await fetch(`${process.env.URL}/shopping-list`);
      const data = await response.json();
      setFetchData(data);
      setShopName([...new Set(data.map((shop) => shop.shoppingListName))]);
      setIsLoading(false);
      console.log(data);
      console.log(shopName);
    }
    fetchShoppingLists();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  function compareName(name) {
    const newListItems = fetchData.filter((item) => {
      console.log("item", item.shoppingListName);
      console.log("nameClicked", name);
      if (item.shoppingListName === name) {
        console.log(item);
        return true;
      } else {
        console.log("error");
        return false;
      }
    });

    setListItems(newListItems);
    console.log(fetchData);
  }

  const updateShoppingList = async (value, shopName) => {
    const id = String(Math.floor(Math.random() * 100 + 3));
    const newItem = {
      item: value,
      id: id,
      completed: false,
      icon: "user_avatar_1.svg",
    };
    console.log("sdfsdfs", [...listItems, newItem]);
    setListItems([newItem, ...listItems]);

    const newShopItem = {item: value, shoppingListName: shopName, completed: false, username: user.name}

    const data = await fetch(`${process.env.URL}/Shopping-List`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newShopItem),
    })
  };

  const updateListOfShops = (value) => {
    
    setShopName([value, ...shopName])
  }
  
  const deleteListItem = (id) => {
    const newListItems = listItems.filter((item) => {
      if (item.id === id) {
        return false;
      } else {
        return true;
      }
    });
    setListItems(newListItems);
  };
  // uses item id to toggled between true or false
  const toggleItemAsCompleted = (id) => {
    let newListItems = [];
    // find item by id, update the completed key:value and exit loop
    for (let i = 0; i < listItems.length; i++) {
      if (listItems[i].id === id) {
        newListItems = [
          ...listItems.slice(0, i),
          { ...listItems[i], completed: !listItems[i].completed },
          ...listItems.slice(i + 1, listItems.lenght),
        ];
        break;
      }
    }
    setListItems(newListItems);
  };
  const handleSubmit = (e) => {
    // function to handle the submit button
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
          <img src="/user_avatar_1.svg" width={20} height={70} alt="lee" />
        </div>
      </div>
      <Navbar />
      {/* <div className={styles.inputBar}>
        <input
          className={styles.input}
          type=" text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <div
          className={styles.button}
          type="submit"
          onClick={() => {
            handleSubmit();
            const value = document.querySelector("input");
            updateShoppingList(value.value);
          }}
        >
          <p>Add Item</p>
        </div>
      </div> */}
      {nameClicked ? (
        <div className={styles.items}>
          <InputBar
            title="Shopping list"
            name={nameClicked}
            handleClick={updateShoppingList}
          />
          {listItems.map((item, index) => (
            <ShoppingListItem
              name={item.item}
              key={index}
              id={item.id}
              deleteListItem={deleteListItem}
              toggleItemAsCompleted={toggleItemAsCompleted}
            />
          ))}
        </div>
      ) : (
        <div className={styles.items}>
          <InputBar
            title="Your Shopping Lists"
            name={nameClicked}
            handleClick={updateListOfShops}
          />
          {shopName.map((item, index) => (
            <ShopNameItem
              name={item}
              key={index}
              id={item.id}
              deleteListItem={deleteListItem}
              toggleItemAsCompleted={toggleItemAsCompleted}
              setNameClicked={setNameClicked}
              setListItems={setListItems}
              compareName={compareName}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopName;
