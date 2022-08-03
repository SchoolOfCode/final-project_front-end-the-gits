import React,{useState} from "react";
import Link from "next/link";
import styles from "../styles/NavBar.module.css"
// Temporary placeholder icons.
import { RiMoneyPoundBoxLine } from 'react-icons/ri';
import { GoCalendar } from 'react-icons/go'
import { FaBirthdayCake } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GiVacuumCleaner } from 'react-icons/gi';


const Navbar = () => {
  // state only for mobile menu works with the revealMenu function
  const [isMenuOpen, setIsMenuOpen] = useState({opened: false, className: "close"})
  
  // Only for mobile menus
  function revealMenu (){
    if (isMenuOpen.opened === false) {
      setIsMenuOpen({opened: true, className: "open"})
    } else{
      setIsMenuOpen({opened: false, className: "close"})
    }
  }

  return (
    <nav className={`${styles.navbar} ${styles[isMenuOpen.className]}`}>
          <Link href="/UserHome">
          

          
          <a>
          <div className={styles.logoBox}>
            <img className={styles["navbar-logo"]} src="/logo_navbar.svg"></img>
            </div>
          </a>
          </Link>
      <div className={styles.navContainer}>
          <Link href="/shoppinglist">
              <a>
              <div className={styles.iconContainer}>
                 <div className={styles.notification}>3</div>
                  <img className={styles["svg-icons"]} src="/shopping_icon.svg" width={70}></img>
              </div>
            </a>
            </Link>

          <Link href="/bills">
            
          <a>
              <div className={styles.iconContainer}>
                 <div className={styles.notification}>3</div>
                  <img className={styles["svg-icons"]} src="/shopping_icon.svg" width={70}></img>
              </div>
            </a>
           
          </Link>
          
            <Link href="/birthdays">
            <a>
              <div className={styles.iconContainer}>
                 <div className={styles.notification}>3</div>
                  <img className={styles["svg-icons"]} src="/shopping_icon.svg" width={70}></img>
              </div>
            </a>
              
              </Link>
             
              
            
              <Link href="/chores">
              <a>
              <div className={styles.iconContainer}>
                 <div className={styles.notification}>3</div>
                  <img className={styles["svg-icons"]} src="/shopping_icon.svg" width={70}></img>
              </div>
            </a>
              </Link>
            
            <Link href="/Bills">
            <a>
              <div className={styles.iconContainer}>
                 <div className={styles.notification}>3</div>
                  <img className={styles["svg-icons"]} src="/shopping_icon.svg" width={70}></img>
              </div>
            </a>
              </Link>

              <Link href="/Bills">
            <a>
              <div className={styles.iconContainer}>
                 <div className={styles.notification}>3</div>
                  <img className={styles["svg-icons"]} src="/shopping_icon.svg" width={70}></img>
              </div>
            </a>
              </Link>

              <Link href="/Bills">
            <a>
              <div className={styles.iconContainer}>
                 <div className={styles.notification}>3</div>
                  <img className={styles["svg-icons"]} src="/shopping_icon.svg" width={70}></img>
              </div>
            </a>
              </Link>

              <Link href="/Bills">
            <a>
              <div className={styles.iconContainer}>
                 <div className={styles.notification}>3</div>
                  <img className={styles["svg-icons"]} src="/shopping_icon.svg" width={70}></img>
              </div>
            </a>
              </Link>
            
          <button onClick={revealMenu} className={styles["mobile-menu-button"]}></button>
      </div>
    </nav>
  );
};

export default Navbar;
