import React from 'react'
import styles from '../styles/ShoppingListItem.module.css'


const ShoppingListItem = () => {
  return (
    <li className={styles.shoppingListItem}>
      <div className={styles.left}>{name}</div>
      <div className={styles.right}>
        <div className={styles.background}>
          <img src='/user_avatar_1.svg' alt="user avatar icon" width={28} />
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