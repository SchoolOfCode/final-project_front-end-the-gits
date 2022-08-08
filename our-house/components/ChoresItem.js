import React from 'react'
import styles from '../styles/ShoppingListItem.module.css'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { GiRecycle } from 'react-icons/gi';


const ChoresItem = ({name, icon, id, deleteListItem, toggleItemAsCompleted}) => {
  return (
    <div className={styles.shopItemContainer}>
        <div className={styles.background}>
                <img src='/user_avatar_1.svg' alt="user avatar icon" width={55} />
        </div>
        <div className={styles.ChoresItem} >
            <div className={styles.cardText}>
                    <p>
                        Abdullahi's
                    </p> 
                    <div className={styles.shopName}>
                        {name} 
                    </div>
                    <p>
                        list
                    </p>
            </div>
            <div className={styles.icons}>
                <div className={styles.edit}>
                <FiEdit />
                </div>
                <div className={styles.delete} onClick={() => {
                deleteListItem(id)
                }}>
                <RiDeleteBin6Line />
                </div>
            </div>
            </div>
        </div>
  )
}
export default ChoresItem

