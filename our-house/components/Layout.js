import React from 'react'
import Navbar from './Navbar'
import styles from '../styles/UserHome.module.css'
import { useRouter } from "next/router";
import Footer from "./Footer"


export const Layout = ({ children }) => {
  // so we can check which page was loaded
  const router = useRouter();

  // on landing page dont load the navbar or profile bar
  if (router.pathname === '/') {
    return (
      <div>{children}</div>
    )
  } else {
    // load navbar and profile bar
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
        <Footer />
      </div>
    )
  }

}
