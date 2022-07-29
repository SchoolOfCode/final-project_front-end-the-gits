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
    <li>
      <div className={styles.left}>{name}</div>
      <div className={styles.right}>
        <img src={`/${icon}`} alt="user avatar icon" />
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