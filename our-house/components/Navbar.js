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
  const [isOpen, setIsOpen] = useState({opened: false, className: "mobile-menu-button-closed"})
  
  // Only for mobile menus
  function revealMenu (){
    if (isMenuOpen.opened === false) {
      setIsMenuOpen({opened: true, className: "open"})
    } else{
      setIsMenuOpen({opened: false, className: "close"})
    }
  }

  function moveButton (){
    if (isMenuOpen.opened === false) {
      setIsOpen({opened: true, className: "mobile-menu-button"})
    } else{
      setIsOpen({opened: false, className: "mobile-menu-button-closed"})
    }
  }

  return (
    <>
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
                 <div className={styles.notification}>2</div>
                  <img className={styles["svg-icons"]} src="/school_icon.svg" width={70}></img>
              </div>
            </a>
           
          </Link>
          
            <Link href="/birthdays">
            <a>
              <div className={styles.iconContainer}>
                 <div className={styles.notification}>1</div>
                  <img className={styles["svg-icons"]} src="/glasses_icon.svg" width={70}></img>
              </div>
            </a>
              
              </Link>
             
              
            
              <Link href="/chores">
              <a>
              <div className={styles.iconContainer}>
                 <div className={styles.notification}>4</div>
                  <img className={styles["svg-icons"]} src="/bills_icon.svg" width={70}></img>
              </div>
            </a>
              </Link>
            
            <Link href="/Bills">
            <a>
              <div className={styles.iconContainer}>
                 <div className={styles.notification}>1</div>
                  <img className={styles["svg-icons"]} src="/school_icon.svg" width={70}></img>
              </div>
            </a>
              </Link>

              <Link href="/Bills">
            <a>
              <div className={styles.iconContainer}>
                 <div className={styles.notification}>2</div>
                  <img className={styles["svg-icons"]} src="/glasses_icon.svg" width={70}></img>
              </div>
            </a>
              </Link>

              <Link href="/Bills">
            <a>
              <div className={styles.iconContainer}>
                 <div className={styles.notification}>2</div>
                  <img className={styles["svg-icons"]} src="/birthday_icon.svg" width={70}></img>
              </div>
            </a>
              </Link>

              <Link href="/Bills">
            <a>
              <div className={styles.iconContainer}>
                 <div className={styles.notification}>5</div>
                  <img className={styles["svg-icons"]} src="/finances_icon.svg" width={70}></img>
              </div>
            </a>
              </Link>
            
          
      </div>
    </nav>
    <button onClick={() => {revealMenu();
      moveButton()}
    } className={`${styles.mobile_menu_button} ${styles[isOpen.className]}`}></button>
    </>
  );
};

export default Navbar;
