'use client';

import React, { useEffect } from 'react';
import styles from '@/styles/Service.module.css';
import { FaCar, FaTshirt, FaTools, FaMobileAlt, FaTractor } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CardSection from '@/components/section/homepage/CardSection';

// Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Service() {
  useEffect(() => {
    // Assurez-vous que les éléments DOM sont disponibles avant d'animer
    const splitSections = document.querySelectorAll(`.${styles.splitSection}`);
    const cards = document.querySelectorAll(`.${styles.card}`);
    const cardsSection = document.querySelector(`.${styles.cardsSection}`);

    if (splitSections.length > 0) {
      splitSections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 100, scale: 0.5, rotateY: -20 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateY: 0,
            duration: 1.5,
            ease: 'bounce.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none none',
              once: true, // L'animation ne joue qu'une seule fois
            },
          }
        );
      });
    } else {
      console.warn('Aucune section divisée trouvée');
    }

    // Assurez-vous que les cartes et la section des cartes existent avant d'animer
    if (cardsSection && cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, scale: 0.5, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: cardsSection,
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true, // L'animation ne joue qu'une seule fois
          },
        }
      );
    } else {
      console.warn('Aucune carte ou section de carte trouvée');
    }
  }, []); // Exécute l'effet une fois, après le montage du composant

  return (
    <div className={styles.container}>
      {/* Première section divisée */}
      <section className={styles.splitSection}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Chaîne d'approvisionnement et réseau</h2>
          <p>
            Notre chaîne d'approvisionnement robuste, en partenariat avec des entreprises de logistique
            de premier plan comme{' '}
            <span style={{ fontWeight: 'bold' }}>MAERSK</span>, assure une livraison fluide et une
            efficacité optimale. Nous gérons l'ensemble du processus logistique, garantissant un
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
            Nous nous concentrons sur la construction de relations durables et la fourniture d'une
            valeur exceptionnelle. Notre équipe dédiée propose des solutions personnalisées,
            des options de personnalisation et un support continu après l'achat. Les services
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
