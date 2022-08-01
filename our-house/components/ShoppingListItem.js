import React from 'react'
import styles from '../styles/ShoppingListItem.module.css'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri';

import { GiRecycle } from 'react-icons/gi';


const ShoppingListItem = ({name, completed, icon, id, deleteListItem, toggleItemAsCompleted}) => {


  return (
    <li className={styles.shoppingListItem} >
      <div className={styles.left}>
      <p>{name}</p>
      </div>
      <div className={styles.right}>
        
        <div className={styles.edit}>
          <FiEdit />
        </div>
        <div className={styles.background}>
          <img src='/user_avatar_1.svg' width={24}
          alt="user avatar icon" />
        </div>
        <div className={styles.delete} onClick={() => {
          deleteListItem(id)
        }}>
          <RiDeleteBin6Line />
        </div>
        </div>
    </li>

  )}


export default ShoppingListItem

