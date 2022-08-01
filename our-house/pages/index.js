import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

// import  Logo from '../public/logo.svg'  

export default function Home() {
  return (
    <div className={styles.home}>
      
        <div className={styles.left}>
          <h1>Our House</h1>
          <p>Your one stop shop</p>
          <p>to organise your home</p>
          <div className={styles.buttons}>
          {/* <Link href="/api/auth/login">
          <a href="/api/auth/login">Login</a>
        </Link> */}
        
        <Link href="/UserHome">
            <a>
            <button >Login</button>
            </a>
        </Link>
          
          <button className={styles.signup}>Sign Up</button>
          </div>
        </div>
        
        <div className={styles.right}>
        
          <div className={styles.svg}>
            <img src="/logo_8.svg" width={800} height={800}alt=""></img>
          </div>
        </div>
      </div>
  )
}
