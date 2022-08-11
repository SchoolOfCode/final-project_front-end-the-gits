import React, { useState } from "react";
import styles from "../styles/ShoppingListItem.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useUser } from "@auth0/nextjs-auth0";
import { useUserMeta } from "../utils/UserMetaContext";


const ShoppingListItem = ({
  name,
  completed,
  id,
  deleteListItem,
  toggleItemAsCompleted,
}) => {
  const { user, error, isLoading } = useUser();
  const metaUser = useUserMeta()

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  // to style the list item when completed
  let markAsDone = completed ? "completed" : "todo";

  return (
    <li
      className={`${styles.shoppingListItem} ${styles[markAsDone]} theme-shoppinglist-item`}
    >
      <div className={styles.left}>
        <p
          key={id}
          onClick={() => {
            toggleItemAsCompleted(id);
          }}
        >
          {name}
        </p>
      </div>
      <div className={styles.right}>
        <div
          className={styles.background}
          style={{ backgroundColor: metaUser.user_metadata.theme_id }}
        >
          <img src={metaUser.user_metadata.avatar_id} alt="user avatar icon" />
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
