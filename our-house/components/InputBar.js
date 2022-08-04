import React from "react";
import styles from "../styles/ShopName.module.css";
import { useState } from "react";

const InputBar = ({ title, name, handleClick }) => {
  const [input, setInput] = useState("");

  return (
    <div>
      <h1 className={styles.heading}>{title}</h1>
      <input
        className={styles.input}
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button
        onClick={() => {
          const value = document.querySelector("input");
          handleClick(value.value, name);
          setInput("");
        }}
      ></button>
    </div>
  );
};

export default InputBar;
