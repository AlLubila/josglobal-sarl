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
                alert("Inscription réussie à la newsletter !");
                setEmail('');
            } else {
                throw new Error("Échec de l'inscription"); // Changed to double quotes
            }
        } catch (error) {
            console.error("Erreur lors de l'inscription à la newsletter :", error); // Changed to double quotes
            alert("Échec de l'inscription. Veuillez réessayer."); // Changed to double quotes
        }
    };

    return (
        <div className={styles.footer}>
            <div className={styles.logoSection}>
                <Image src='/logo1.png' priority alt="logo du site" width={120} height={120} style={{ width: 'auto', height: 'auto' }} />
                <p>©2024 Tous droits réservés</p>
            </div>

            <div className={styles.linksSection}>
                <ul className={styles.linksList}>
                    <li className={styles.linkItem}>
                        <Link href="/privacy-policy" className={styles.linkAnchor}>
                            Politique de confidentialité
                        </Link>
                    </li>
                </ul>
            </div>

            <div className={styles.subscriptionSection}>
                <p>Abonnez-vous à notre newsletter :</p>
                <form onSubmit={handleSubmit} className={styles.subscriptionForm}>
                    <input
                        type="email"
                        placeholder="Entrez votre email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">S&apos;abonner</button> {/* Escaped the single quote */}
                </form>
            </div>

            <div className={styles.socialMediaSection}>
                <p>Suivez-nous :</p>
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
            <Link href='https://www.albilubila.pl/' target="_blank" rel="noopener noreferrer">
            <p className={styles.developerName}>Développé par Albi Lubila</p>
            </Link>
            
        </div>
    );
}
