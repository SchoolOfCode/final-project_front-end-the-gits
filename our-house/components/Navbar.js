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
     <a>
        <img className={styles["navbar-logo"]} src="/logo_8.svg"></img>
      </a>
      <ul className={styles["navbar-ul"]}>
       <Link href="/shoppinglist">
        <li>
          <a>
          <img className={styles["svg-icons"]} src="/shopping_icon.svg" width={70}></img>
        </a>
          <div className={styles.notification}>3</div>
        </li>
        </Link>
       <Link href="/bills">
        <li>
        <a>
        <img className={styles["svg-icons"]} src="/bills_icon.svg" width={70}>
          
        </img>
        </a>
        <div className={styles.bilsNotification}>3</div>
        </li>
      </Link>
        <li>
        <Link href="/birthdays">
            <a><FaBirthdayCake className={styles["list-icons"]} /></a>
          </Link>
          </li>
          
        <li>
          <Link href="/chores">
            <a><GiVacuumCleaner className={styles["list-icons"]} /></a>
          </Link>
        </li>
        <li>
        <Link href="/Bills">
            <a><RiMoneyPoundBoxLine className={styles["list-icons"]} /></a>
          </Link>
        </li>
      </ul>
      <button onClick={revealMenu} className={styles["mobile-menu-button"]}></button>
    </nav>
  );
};

export default Navbar;
