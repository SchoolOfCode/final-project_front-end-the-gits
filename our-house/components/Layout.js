import React from 'react'
import Navbar from './Navbar'
// import styles from '../styles/Profile.module.css'
import { useRouter } from "next/router";
import Profile from './Profile';

import Footer from "./Footer";



export const Layout = ({ children }) => {
  // so we can check which page was loaded
  const router = useRouter();

  // on landing page dont load the navbar or profile bar

 

  if (router.pathname === '/' || router.pathname === '/UserProfile' ) {
    return (
      <div>{children}
      <Footer />
      </div>
    )
  } else {
    // load navbar and profile bar
    return (
      <div>
      {/* //   <div className={styles.profile}>
      //     <div className={styles.bar}>
      //       <div className={styles.right}>
      //         <h2> Welcome back, Lee</h2>   
      //       </div>
      //       <img src='/user_avatar_1.svg' width={20} height={70} alt='lee' />
      //     </div>
      //   </div> */}
        <Profile />
        <Navbar/>
        {children}
        <Footer />
      </div>
    )
  }

}
