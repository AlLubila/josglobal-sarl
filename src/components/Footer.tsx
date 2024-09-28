'use client';
import React, { useState } from 'react';
import styles from '../styles/Footer.module.css';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
    const [email, setEmail] = useState('');
    
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const response = await fetch('/api/newsletter/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
        if (response.ok) {
          alert('Successfully subscribed to the newsletter!');
          setEmail('');
        } else {
          throw new Error('Failed to subscribe');
        }
      } catch (error) {
        console.error('Error subscribing to newsletter:', error);
        alert('Failed to subscribe. Please try again.');
      }
    };

    return (
        <div className={styles.footer}>
            <div className={styles.logoSection}>
                <Image src='/logo1.png' priority alt="website's logo" width={120} height={120} style={{ width: 'auto', height: 'auto' }} />
                <p>©2024 All rights reserved</p>
            </div>

            <div className={styles.linksSection}>
                <ul className={styles.linksList}>
                    <li className={styles.linkItem}><Link href="/privacy-policy" className={styles.linkAnchor}>Privacy Policy</Link></li>
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

            <p className={styles.developerName}>Developed by Albi Lubila</p>
        </div>
    );
}
