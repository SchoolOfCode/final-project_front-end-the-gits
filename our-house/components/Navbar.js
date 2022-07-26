import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/NavBar.module.css";

const Navbar = () => {
  // state only for mobile menu works with the revealMenu function
  const [isMenuOpen, setIsMenuOpen] = useState({
    opened: false,
    className: "close",
  });
  

  // Only for mobile menus
  function revealMenu() {
    if (isMenuOpen.opened === false) {
      setIsMenuOpen({ opened: true, className: "open" });
    } else {
      setIsMenuOpen({ opened: false, className: "close" });
    }
  }

 

  return (
    <>
      <nav className={`${styles.navbar} ${styles[isMenuOpen.className]} theme-navbar`}>
        <button
          onClick={() => {
            revealMenu();
          }}
          className={`${styles["mobile-menu-button"]} theme-mobile-button`}
        ></button>

        <Link href="/UserHome">
          <a>
            <div className={styles.logoBox}>
              <img
                className={styles["navbar-logo"]}
                src="/logo_navbar.svg"
              ></img>
            </div>
          </a>
        </Link>
        <div className={styles.navContainer}>
          <Link href="/ShopName">
            <a>
              <div className={styles.iconContainer}>
                <div className={styles.notification}>3</div>
                <img
                  className={styles["svg-icons"]}
                  src="/shopping_icon.svg"
                  width={70}
                ></img>
              </div>
            </a>
          </Link>

          <Link href="/Chores">
            <a>
              <div className={styles.iconContainer}>
                <div className={styles.notification}>2</div>
                <img
                  className={styles["chores"]}
                  src="/chores_icon.svg"
                  width={70}
                ></img>
              </div>
            </a>
          </Link>

          <Link href="/Appointments">
            <a>
            <div className={styles.iconContainerNoNotification}>
                {/* <div className={styles.notification}>1</div> */}
                <img
                  className={styles["svg-icons"]}
                  src="/appointments_icon.svg"
                  width={70}
                ></img>
              </div>
            </a>
          </Link>

          <Link href="/Bills">
            <a>
              <div className={styles.iconContainer}>
                <div className={styles.notification}>4</div>
                <img
                  className={styles["svg-icons"]}
                  src="/bills_icon.svg"
                  width={70}
                ></img>
              </div>
            </a>
          </Link>

          <Link href="/School">
            <a>
            <div className={styles.iconContainerNoNotification}>
                {/* <div className={styles.notification}>1</div> */}
                <img
                  className={styles["svg-icons"]}
                  src="/school_icon.svg"
                  width={70}
                ></img>
              </div>
            </a>
          </Link>

          <Link href="/Social">
            <a>
              <div className={styles.iconContainer}>
                <div className={styles.notification}>2</div>
                <img
                  className={styles["svg-icons"]}
                  src="/glasses_icon.svg"
                  width={70}
                ></img>
              </div>
            </a>
          </Link>

          <Link href="/Birthdays">
            <a>
              <div className={styles.iconContainer}>
                <div className={styles.notification}>2</div>
                <img
                  className={styles["svg-icons"]}
                  src="/birthday_icon.svg"
                  width={70}
                ></img>
              </div>
            </a>
          </Link>

          <Link href="/Finances">
            <a>
            
              <div className={styles.iconContainerNoNotification}>
            
                <img
                  className={styles["svg-icons"]}
                  src="/finances_icon.svg"
                  width={70}
                ></img>
              </div>
            </a>
          </Link>
          <Link href="/api/auth/logout">
            <a href="/api/auth/logout">
              <button className={styles.buttons}>Logout</button>
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
