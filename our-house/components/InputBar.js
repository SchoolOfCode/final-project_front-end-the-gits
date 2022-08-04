import React from "react";
import styles from "../styles/ShopName.module.css"
import { useState } from "react";

const InputBar = ({title, name, handleClick}) => {
  const [input, setInput] = useState("");
  // const handleSubmit = (e) => {
  //   // function to handle the submit button
  //   // inbuild function for handling buttons
  //   //  event.preventDefault()
  //   setInput("");
  // };
  return (
    <div>
      <h1 className={styles.heading}>{title}</h1>
      <input type="text" value={input}/>
      <button
        onClick={() => {
          const value = document.querySelector("input");
          handleClick(value.value, name);
          // handleSubmit();
          setInput("")
        }}
      ></button>
    </div>
  );
};

export default InputBar;
