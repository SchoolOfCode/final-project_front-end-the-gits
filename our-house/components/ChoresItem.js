import React from 'react'
import styles from '../styles/ChoresItem.module.css'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { GiRecycle } from 'react-icons/gi';

const ChoresItem = ({
    name,
    completed,
    icon,
    id,
    deleteListItem,
    toggleItemAsCompleted,
  }) => {
  
    // to style the list item when completed
    let markAsDone = completed ? 'completed' : 'todo';

  
    console.log(completed)
  
    return (
      <li className={`${styles.shoppingListItem} ${styles[markAsDone]} theme-chores-item`}>
        <div className={styles.left}>
          <span key={id} onClick={() => { toggleItemAsCompleted(id); }}>
            {name}
          </span>
        </div>
        <div className={styles.right}>
         <p className={styles.createdBy}>Created by</p>
          <div className={styles.background}>
            <img src="/user_avatar_1.svg" alt="user avatar icon" />
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

