"use client";

import React, { useEffect, useState } from "react";

// IMPORTS DE STYLES
import styles from "../styles/Header.module.css";

// IMPORTS NEXT/
import Link from "next/link";

import Cookies from "js-cookie";
import Image from "next/image";

export default function Header() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const links = [
    {
      title: "Accueil", // Home
      href: "/",
    },
    {
      title: "À propos", // About
      href: "/about",
    },
    {
      title: "Services", // Service
      href: "/service",
    },
    {
      title: "Blog", // Blog
      href: "/blog",
    },
    {
      title: "Contact", // Contact
      href: "/contact",
    },
  ];

  useEffect(() => {
    // Vérifier si le admin_token existe dans les cookies
    const token = Cookies.get("admin_token");
    setIsAdmin(!!token); // Si le token existe, définir isAdmin à true
  }, []);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        {/* Afficher le logo uniquement si la largeur de l'écran est supérieure à 767px */}
        <Link href="/" className={`${styles.logo} ${styles.hideLogoMobile}`}>
          <Image
            src="/logo1.png"
            priority
            alt="logo du site"
            className={styles.logoImg}
            width={250}
            height={250}
            style={{ width: "auto", height: "auto" }}
          />
        </Link>

        {/* Icône de hamburger */}
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <span className={isMenuOpen ? styles.barOpen : ""}></span>
          <span className={isMenuOpen ? styles.barOpen : ""}></span>
          <span className={isMenuOpen ? styles.barOpen : ""}></span>
        </div>

        {/* Menu standard */}
        <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}>
          {/* Afficher le logo à l'intérieur du menu sur les petits écrans */}
          <div
            className={`${styles.mobileLogo} ${
              isMenuOpen ? styles.showLogo : ""
            }`}
          >
            <Link href="/" className={styles.logoLink}>
              <Image
                src="/logo1.png"
                priority
                alt="logo du site"
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
