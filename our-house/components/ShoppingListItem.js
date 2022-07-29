import React from 'react'
import styles from '../styles/ShoppingListItem.module.css'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri';

/*
Props needed
 - text of the list item
 - completed?
 - profile icon stored as a number

Behviours
 - edit button (icon)
 - delete button (icon)
*/
const ShoppingListItem = ({name, completed, icon}) => {
  return (
    <li>
      <div className={styles.left}>{name}</div>
      <div className={styles.right}>
        <img src="/user_avatar_1.svg" alt="user avatar icon" />
        <button>
          <FiEdit />
        </button>
        <button>
          <RiDeleteBin6Line />
        </button>
      </div>
    </li>
  )
}

export default ShoppingListItem