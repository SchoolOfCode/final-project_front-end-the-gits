import React from "react";
import styles from "../styles/InputBar.module.css";
import { useState } from "react";

const InputBar = ({ title, name, handleClick }) => {
  const [input, setInput] = useState("");

  return (
    <div className={styles.inputContainer}>
      <h1 className={styles.heading}>{title}</h1>
      <div className={`${styles.inputBar} theme-input-bar`}>
      <input
        className={styles.input}
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button className={styles.button}
        onClick={() => {
          const value = document.querySelector("input");
          handleClick(value.value, name);
          setInput("");
        }}
      >Add</button>
    </div>
    </div>
  );
};

export default InputBar;
