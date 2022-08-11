import React from "react";
import styles from "../styles/InputBar.module.css";
import { useState } from "react";

const InputBar = ({ title, name, handleClick, placeholderText }) => {
  const [input, setInput] = useState("");

  return (
    <div className={styles.inputContainer}>
      <h2 className={styles.heading}>{title}</h2>
      <div className={`${styles.inputBar} theme-input-bar`}>
      <input
        className={styles.input}
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder={placeholderText}
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
