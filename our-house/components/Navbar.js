import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a>
        <img src="/vercel.svg"></img>
      </a>
      <ul>
        <li>
          <Link href="/shopname">
            <a>Shop Name</a>
          </Link>
        </li>
        <li>
          <Link href="/shoppinglist">
            <a>Shopping List</a>
          </Link>
        </li>
        <li>
        <Link href="/userhome">
            <a>User Home</a>
          </Link>
          </li>
          
        <li>
          <Link href="/shoppinglist">
            <a>Shopping List</a>
          </Link>
        </li>
        <li>
        <Link href="/userhome">
            <a>User Home</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

//homepage/shoppinglist/tesco
