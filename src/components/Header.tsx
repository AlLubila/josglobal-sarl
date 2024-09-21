"use client";

import React, { useEffect, useState } from "react";

// STYLES IMPORTS
import styles from "../styles/Header.module.css";

// NEXT/ IMPORTS
import Link from "next/link";

import Cookies from "js-cookie";
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
    },
  ];

  useEffect(() => {
    // Check if the admin_token exists in cookies
    const token = Cookies.get("admin_token");
    setIsAdmin(!!token); // If token exists, set isAdmin to true
  }, []);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        {/* Only show logo if screen width is more than 767px */}
        <Link href="/" className={`${styles.logo} ${styles.hideLogoMobile}`}>
          <Image
            src="/logo1.png"
            priority
            alt="website's logo"
            className={styles.logoImg}
            width={250}
            height={250}
            style={{ width: "auto", height: "auto" }}
          />
        </Link>

        {/* Hamburger Icon */}
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <span className={isMenuOpen ? styles.barOpen : ""}></span>
          <span className={isMenuOpen ? styles.barOpen : ""}></span>
          <span className={isMenuOpen ? styles.barOpen : ""}></span>
        </div>

        {/* Standard Menu */}
        <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}>
          {/* Show logo inside menu on small screens */}
          <div
            className={`${styles.mobileLogo} ${
              isMenuOpen ? styles.showLogo : ""
            }`}
          >
            <Link href="/" className={styles.logoLink}>
              <Image
                src="/logo1.png"
                priority
                alt="website's logo"
                className={styles.logoImg}
                width={200}
                height={200}
                style={{ width: "auto", height: "auto" }}
              />
            </Link>
          </div>

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
          <Link href="/admin/dashboard" className={styles.adminLink}>
            Admin
          </Link>
        )}
      </div>
    </div>
  );
}
