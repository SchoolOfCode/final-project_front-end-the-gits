import Link from "next/link";
import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.right}>
        <img src="/home_logo_final.svg" alt="" />
      </div>
      <div className={styles.left}>
        <div className={styles.textbox}>
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
        </div>
      </div>
    </div>
  </div>
  );
}
