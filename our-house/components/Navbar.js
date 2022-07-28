import React from "react";
import Link from "next/link";
import { RiMoneyPoundBoxLine } from 'react-icons/ri';
import { GoCalendar } from 'react-icons/go'
import { FaBirthdayCake } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GiVacuumCleaner } from 'react-icons/gi';
import styles from "../styles/NavBar.module.css"

const Navbar = () => {
  const iconSize = "3em";
  return (
    <nav className={styles.navbar}>
      <a>
        <img className={styles["navbar-logo"]} src="/vercel.svg"></img>
      </a>
      <ul className={styles["navbar-ul"]}>
        <li>
          <Link href="/shopname">
            <a><AiOutlineShoppingCart className={styles["list-icons"]}  /></a>
          </Link>
        </li>
        <li>
          <Link href="/events">
            <a><GoCalendar className={styles["list-icons"]}  /></a>
          </Link>
        </li>
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
    </nav>
  );
};

export default Navbar;

//homepage/shoppinglist/tesco
