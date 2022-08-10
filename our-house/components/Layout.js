import React from 'react'
import Navbar from './Navbar'
// import styles from '../styles/Profile.module.css'
import { useRouter } from "next/router";
import Profile from './Profile';
import Footer from "./Footer";
import { UserMetaProvider } from '../utils/UserMetaContext';


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
      <UserMetaProvider>
        <div>
          <Profile />
          <Navbar/>
          {children}
          <Footer />
        </div>
      </UserMetaProvider>
    )
  }

}
