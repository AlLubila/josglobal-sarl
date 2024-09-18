'use client'

import React, { useEffect, useState } from "react";

// STYLES IMPORTS
import styles from "../styles/Header.module.css";

// NEXT/ IMPORTS
import Link from "next/link";

import Cookies from 'js-cookie';
import Image from "next/image";

export default function Header() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false); 

  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Service",
      href: "/service",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/contact",
    }
  ];

  useEffect(() => {
    // Check if the admin_token exists in cookies
    const token = Cookies.get('admin_token');
    setIsAdmin(!!token);  // If token exists, set isAdmin to true
  }, []);


  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <Link href='/' className={styles.logo}>
        <Image src='/logo1.png' alt="website's logo" width={250} height={250}/>
        </Link>

        {/* Hamburger Icon */}
        <div className={styles.hamburger} onClick={() => setMenuOpen(!isMenuOpen)}>
          <span className={isMenuOpen ? styles.barOpen : ''}></span>
          <span className={isMenuOpen ? styles.barOpen : ''}></span>
          <span className={isMenuOpen ? styles.barOpen : ''}></span>
        </div>

        {/* Standard Menu */}
        <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
          {links.map((link) => (
            <Link 
              href={link.href} 
              key={link.title}
              onClick={() => setMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </div>

        {isAdmin && (
          <Link href='/admin/dashboard' className={styles.adminLink}>Admin</Link>
        )}
      </div>
    </div>
  );
}
