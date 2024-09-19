'use client'

import React, { useState } from 'react'
import styles from '../styles/Footer.module.css'
import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Subscribed with email: ", email);
    setEmail('');
  }

  return (
    <>
      <div className={styles.footer}>
        <div className={styles.logoSection}>
          <img src='/logo1.png' alt="website's logo" width={120} height={120} />
          <p>©2024 All rights reserved</p>
        </div>

        <div className={styles.linksSection}>
          <ul className={styles.linksList}>
            <li className={styles.linkItem}><Link href="/privacy-policy" className={styles.linkAnchor}>Privacy Policy</Link></li>
            <li className={styles.linkItem}><Link href="/terms-and-conditions" className={styles.linkAnchor}>Legal</Link></li>
            <li className={styles.linkItem}><Link href="/about" className={styles.linkAnchor}>About Us</Link></li>
            <li className={styles.linkItem}><Link href="/contact" className={styles.linkAnchor}>Contact</Link></li>
          </ul>
        </div>

        <div className={styles.subscriptionSection}>
          <p>Subscribe to our newsletter:</p>
          <form onSubmit={handleSubmit} className={styles.subscriptionForm}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className={styles.socialMediaSection}>
          <p>Follow us:</p>
          <div className={styles.icons}>
            <Link href="https://www.facebook.com" aria-label="Facebook">
              <FaFacebookF className={styles.icon} />
            </Link>
            <Link href="https://www.twitter.com" aria-label="Twitter">
              <FaTwitter className={styles.icon} />
            </Link>
            <Link href="https://www.instagram.com" aria-label="Instagram">
              <FaInstagram className={styles.icon} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}