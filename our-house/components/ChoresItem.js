import React from "react";
import styles from "../styles/ChoresItem.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useUser } from "@auth0/nextjs-auth0";
import { useUserMeta } from "../utils/UserMetaContext";

// Chores component takes in 5 props, 3 are values and 2 are functions
// 'name' is the actual chore to be completed
// uses styled component to display the delete icon
const ChoresItem = ({
  name,
  completed,
  id,
  deleteListItem,
  toggleItemAsCompleted,
}) => {
  // to dynamically style the list item when completed
  let markAsDone = completed ? "completed" : "todo";

  // hooks to check if there are any errors with user authentication
  const { error, isLoading } = useUser();
  // loads the latest user metadata
  const metaUser = useUserMeta()

  // lets the user know if app is loading or there was an error and skip the rest
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

export default ChoresItem;
