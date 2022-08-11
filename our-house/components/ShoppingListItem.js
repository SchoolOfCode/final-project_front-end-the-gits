import React, { useState } from "react";
import styles from "../styles/ShoppingListItem.module.css";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useUser } from "@auth0/nextjs-auth0";
import { GiRecycle } from "react-icons/gi";

const ShoppingListItem = ({
  name,
  completed,
  icon,
  id,
  deleteListItem,
  toggleItemAsCompleted,
}) => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  // to style the list item when completed
  let markAsDone = completed ? 'completed' : 'todo';

  return (
    <li className={`${styles.shoppingListItem} ${styles[markAsDone]} theme-shoppinglist-item`}>
      <div className={styles.left}>
        <p key={id} onClick={() => { toggleItemAsCompleted(id); }}>
          {name}
        </p>
      </div>
      <div className={styles.right}>
<<<<<<< HEAD
       
        <div className={styles.background}>
          <img src="/user_avatar_1.svg"  alt="user avatar icon" />
=======
        {/* <div className={styles.edit}>
          <FiEdit />
        </div> */}
        <div className={styles.background} style={{ backgroundColor: user.user_metadata.theme_id }}>
          <img src={user.user_metadata.avatar_id} width={24} alt="user avatar icon" />
>>>>>>> 5140dc409f03b4b9b1517683d91020f170068ffa
        </div>
        <div
          className={styles.delete}
          onClick={() => {
            deleteListItem(id);
          }}
        >
          <RiDeleteBin6Line />
        </div>
      </div>
    </li>
  );
};

export default ShoppingListItem;
