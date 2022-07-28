import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Profile from '../components/Profile'

export default function Home() {
  return (
    <div>
      <div>Home Page</div>
        <Link href="/api/auth/login">
          <a href="/api/auth/login">Login</a>
        </Link>
        <Link href="/api/auth/logout">
        <a href="/api/auth/logout">Logout</a>
        </Link>
        <Profile />
      </div>
      
  )
}
