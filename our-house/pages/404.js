import Link from "next/link";
import styles from "../styles/404.module.css"


const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.notFoundContainer}>
        <div className={styles.topLine}>
          <img src="/user_avatar_1.svg" alt="" />
          <h1>Oooops!</h1>
        </div>
        <div className={styles.h2Box}>
            <h2>This App is under construction</h2>
        </div>
        <div className={styles.pBox}>
            <p>Return to the <Link href="/UserHome"><a> <span> Homepage</span></a></Link></p>
        </div>
      </div>
    </div> 
    );
}
 
export default NotFound;