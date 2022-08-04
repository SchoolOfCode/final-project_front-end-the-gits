import React from "react";
import styles from "../styles/ShopName.module.css"


const InputBar = ({name, updateShoppingList}) => {
  return (
    <div>
      <h1 className={styles.heading}>{name}</h1>
      <input type="text" />
      <button
        onClick={() => {
          const value = document.querySelector("input");
          updateShoppingList(value.value, name);
        }}
      ></button>
    </div>
  );
};

export default InputBar;
