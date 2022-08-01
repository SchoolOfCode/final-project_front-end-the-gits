import React from 'react'
import Navbar from './Navbar'
import styles from '../styles/UserHome.module.css'


export const Layout = ({ children }) => {
  return (
    <div>
        <div className={styles.profile}>
        <div className={styles.bar}>
            <div className={styles.right}>
                <h2> Welcome back, Lee</h2>
                
            </div>
        <img src='/user_avatar_1.svg' width={20} height={70} alt='lee' />
        </div>
      </div>
    <Navbar/>
    {children}
    </div>
  )
}
