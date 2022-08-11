import React from "react";
import styles from "../styles/ChoresItem.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useUser } from "@auth0/nextjs-auth0";

const ChoresItem = ({
  name,
  completed,
  id,
  deleteListItem,
  toggleItemAsCompleted,
}) => {
  // to style the list item when completed
  let markAsDone = completed ? "completed" : "todo";
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <li
      className={`${styles.shoppingListItem} ${styles[markAsDone]} theme-chores-item`}
    >
      <div className={styles.left}>
        <span
          key={id}
          onClick={() => {
            toggleItemAsCompleted(id);
          }}
        >
          {name}
        </span>
      </div>
      <div className={styles.right}>
        <p className={styles.createdBy}>Created by</p>
        <div
          className={styles.background}
          style={{ backgroundColor: user.user_metadata.theme_id }}
        >
          <img src={user.user_metadata.avatar_id} alt="user avatar icon" />
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

export default ChoresItem;
