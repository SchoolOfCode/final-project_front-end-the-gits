import React from 'react'
import styles from '../styles/ShoppingListItem.module.css'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri';
/*
Props needed
 - text of the list item
 - completed?
 - profile icon stored as a number
- id needed from shoppingList to delete
Behaviours
 - edit button (icon)
 - delete button (icon)
 - crossed out
*/
const ShoppingListItem = ({name, completed, icon, id, deleteListItem}) => {
  return (
    <li className={styles.shoppingListItem}>
      <div className={styles.left}>{name}</div>
      <div className={styles.right}>
        <div className={styles.background}>
          <img src='/user_avatar_1.svg' width={24}
          alt="user avatar icon" />
        </div>
        <button>
          <FiEdit />
        </button>
        <button onClick={() => {
          deleteListItem(id)
        }}>
          <RiDeleteBin6Line />
        </button>
      </div>
    </li>
  )
}
export default ShoppingListItem
