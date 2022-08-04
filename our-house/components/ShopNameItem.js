import React from 'react'
import { useEffect, useState } from 'react';
import styles from '../styles/ShopNameItem.module.css'
import { FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { GiRecycle } from 'react-icons/gi';
import { MdAddCircleOutline } from 'react-icons/md';
import Link from 'next/link'


const ShopNameItem = ({name, icon, id, deleteListItem, toggleItemAsCompleted, setNameClicked, setListItems, compareName}) => {
    // const [listByName, setListByName] = useState("")
    // useEffect(() => {
    //     async function fetchShoppingListsByName(){
    //     const response = await fetch("https://the-gits.herokuapp.com/api/v1/shopping-list/" + name)
    //     const data = await response.json()
        
    //     setListItems(data)
    //     console.log(data)
       
    //     }
    //     fetchShoppingListsByName()
    //   }, [listByName])
    
    function handleClick(){
        setNameClicked(name)
        compareName(name)
        // setListByName(name)
    }
    return (
    <div className={styles.shopItemContainer}>
        <div className={styles.background}>
                <img src='/user_avatar_1.svg' alt="user avatar icon" width={55} />
        </div>
        <div className={styles.shopNameItem} >
            <div className={styles.cardTop}></div>
            
                    <a>
            <button onClick={handleClick} className={styles.cardText}>
                    <p>
                        Terry's
                    </p> 
                    <div className={styles.shopName}>
                        {name} 
                    </div>
                    <p>
                        list
                    </p>
            </button>
            </a>
            
            <div className={styles.icons}>
                    <div className={styles.iconLeft}>
                    </div>
                    
                    
                    <div className={styles.iconRight}>
                        <div className={styles.edit}>
                        <FaRegEdit />
                        </div>
                        <div className={styles.delete} onClick={() => {
                        deleteListItem(name)
                        }}>
                        <RiDeleteBin6Line />
                        </div>
                    </div>
           
            </div>

            
                    
                    
            </div>
            <div className={styles.avatarsNotification}>
                  <div className={styles.avatarBox1}>
                      <div className={styles.notification1}>1</div>
                      <img className={styles.usersAvatar} src='/user_avatar_1.svg' width={20}  />
                      
                  </div>
                  <div className={styles.avatarBox2}>
                      <div className={styles.notification2}>2</div>
                      <img className={styles.usersAvatar} src='/user_avatar_1.svg'   />                      
                  </div>
                  <div className={styles.avatarBox3}>
                      <div className={styles.notification3}>4</div>
                      <img className={styles.usersAvatar} src='/user_avatar_1.svg'   />                      
                  </div>
                  <div className={styles.avatarBox4}>
                      <div className={styles.notification4}>2</div>
                      <img className={styles.usersAvatar} src='/user_avatar_1.svg'   />                      
                  </div>
                </div>
        </div>
  )
}
export default ShopNameItem

