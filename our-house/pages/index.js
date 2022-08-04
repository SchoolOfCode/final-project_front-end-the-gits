import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <div className={styles.home}>
        <div className={styles.right}>
        <img src="/logo_8.svg" alt="" />
        </div>
        <div className={styles.left}>
          <h1>Our House</h1>
          <div className={styles.text}>
            <p>Your one stop shop</p>
            <p>to organise your home</p>
          </div>
          <div className={styles.buttons}>
          <Link href="/api/auth/login">
          <a href="/api/auth/login">
            <button>Login</button>
          </a>
        </Link>
          <button className={styles.signup}>Sign Up</button>
          </div>
        </div>
      </div>
  );
}
