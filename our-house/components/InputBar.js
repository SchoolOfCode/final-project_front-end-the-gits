import React from "react";
import styles from "../styles/ShopName.module.css"


const InputBar = ({title, name, handleClick}) => {
  return (
    <div>
      <h1 className={styles.heading}>{title}</h1>
      <input type="text" />
      <button
        onClick={() => {
          const value = document.querySelector("input");
          handleClick(value.value, name);
        }}
      ></button>
    </div>
  );
};

export default InputBar;
