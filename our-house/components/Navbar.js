import React from "react";
import Link from "next/link";
import { RiMoneyPoundBoxLine } from 'react-icons/ri';
import { GoCalendar } from 'react-icons/go'
import { FaBirthdayCake } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GiVacuumCleaner } from 'react-icons/gi';

const Navbar = () => {
  const iconSize = "3em";
  return (
    <nav className="navbar">
      <a>
        <img src="/vercel.svg"></img>
      </a>
      <ul>
        <li>
          <Link href="/shopname">
            <a><AiOutlineShoppingCart size={iconSize} /></a>
          </Link>
        </li>
        <li>
          <Link href="/events">
            <a><GoCalendar size={iconSize} /></a>
          </Link>
        </li>
        <li>
        <Link href="/birthdays">
            <a><FaBirthdayCake size={iconSize} /></a>
          </Link>
          </li>
          
        <li>
          <Link href="/chores">
            <a><GiVacuumCleaner size={iconSize} /></a>
          </Link>
        </li>
        <li>
        <Link href="/Bills">
            <a><RiMoneyPoundBoxLine size={iconSize} /></a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

//homepage/shoppinglist/tesco
