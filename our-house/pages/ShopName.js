import React from "react";
import styles from "../styles/ShopName.module.css";
import ShopNameItem from "../components/ShopNameItem";
import { useState, useEffect } from "react";
import ShoppingListItem from "../components/ShoppingListItem";
import InputBar from "../components/InputBar";
import { useUser } from "@auth0/nextjs-auth0/";

const ShopName = () => {
  const { user } = useUser();
  const [fetchData, setFetchData] = useState(null);
  const [shopName, setShopName] = useState(null);
  const [listItems, setListItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [nameClicked, setNameClicked] = useState(null);

  useEffect(() => {
    async function fetchShoppingLists() {
      const response = await fetch(`${process.env.URL}/shopping-list`);
      const data = await response.json();
      setFetchData(data);
      setShopName([...new Set(data.map((shop) => shop.shoppingListName))]);
      setIsLoading(false);
    }
    fetchShoppingLists();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  function compareName(name) {
    const newListItems = fetchData.filter((item) => {
      if (item.shoppingListName === name) {
        return true;
      } else {
        return false;
      }
    });

    setListItems(newListItems);
  }

  const updateShoppingList = async (value, shopName) => {
    const id = String(Math.floor(Math.random() * 100 + 3));
    const newItem = {
      item: value,
      id: id,
      completed: false,
      icon: "user_avatar_1.svg",
    };
    setListItems([newItem, ...listItems]);

    const newShopItem = {
      item: value,
      shoppingListName: shopName,
      completed: false,
      username: user.name,
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
    const newListItems = listItems.filter((item) => {
      if (item._id === id) {
        return false;
      } else {
        return true;
      }
    });
    // update local state
    setListItems(newListItems);

    // remove item from the database
    const data = await fetch(`${process.env.URL}/Shopping-List`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id}),
    });

  };

const deleteShop = async (shops) => {
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
    console.log("ARE WE HERE")
  };

  return (
    <div className={styles.ShoppingNamelist}>
       <div className={styles.shopBox}>
      {nameClicked ? (
        <div className={styles.items}>
          <InputBar
            title="Shopping list"
            name={nameClicked}
            handleClick={updateShoppingList}
          />
          {listItems.map((item, index) => (
            <ShoppingListItem
              completed={item.completed}
              name={item.item}
              key={index}
              id={item._id}
              deleteListItem={deleteListItem}
              toggleItemAsCompleted={toggleItemAsCompleted}
            />
          ))}
        </div>
      ) : (
        <div className={styles.shopNames}>
          <div className={styles.inputBar}>
          <InputBar
            title="Your Shopping Lists"
            name={nameClicked}
            handleClick={updateListOfShops}
          />
          </div>
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
        </div>
      )}
      </div>
    </div>
  );
};

export default ShopName;
