'use client';

import React from 'react';
import styles from '@/styles/Service.module.css';
import { FaCar, FaTshirt, FaTools, FaMobileAlt, FaTractor } from 'react-icons/fa';
import CardSection from '@/components/section/homepage/CardSection';

export default function Service() {
  return (
    <div className={styles.container}>
      {/* Première section divisée */}
      <section className={styles.splitSection}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Chaîne d&apos;approvisionnement et réseau</h2>
          <p>
            Notre chaîne d&apos;approvisionnement robuste, en partenariat avec des entreprises de logistique
            de premier plan comme{' '}
            <span style={{ fontWeight: 'bold' }}>MAERSK</span> et <span style={{ fontWeight: 'bold' }}>STOCK POLSKA</span>, assure une livraison fluide et une
            efficacité optimale. Nous gérons l&apos;ensemble du processus logistique, garantissant un
            transport des biens à temps et en toute sécurité.
          </p>
        </div>
        <div className={`${styles.imageContent} ${styles.supplyChainImg}`}></div>
      </section>

      {/* Deuxième section divisée */}
      <section className={styles.splitSection}>
        <div className={`${styles.imageContent} ${styles.customerSupportImg}`}></div>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Support client et services</h2>
          <p>
            Nous nous concentrons sur la construction de relations durables et la fourniture d&apos;une
            valeur exceptionnelle. Notre équipe dédiée propose des solutions personnalisées,
            des options de personnalisation et un support continu après l&apos;achat. Les services
            supplémentaires incluent le soutien à la marque, la coordination logistique et les
            informations sur le marché.
          </p>
        </div>
      </section>

      {/* Section de cartes */}
      <CardSection/>
    </div>
  );
}
