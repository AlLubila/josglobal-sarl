import React, { useEffect } from 'react';
import styles from '@/styles/section/homepage/CardSection.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CardSection() {
    useEffect(() => {
        // S'assurer que les éléments DOM sont disponibles avant d'animer
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
                  once: true, // L'animation ne joue qu'une fois
                },
              }
            );
          });
        } else {
          console.warn('Aucune section fractionnée trouvée');
        }
    
        // S'assurer que les cartes et la section de cartes existent avant d'animer
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
                once: true, // L'animation ne joue qu'une fois
              },
            }
          );
        } else {
          console.warn('Aucune carte ou section de cartes trouvée');
        }
      }, []); 

  return (
    <div>
      <section className={styles.cardsSection}>
        <h2>Offres de services</h2>
        <div className={styles.cardsContainer}>
          <div className={`${styles.card} ${styles.car}`}>
            <div className={styles.cardHoverContent}>
              <p>Véhicules d&apos;occasion premium avec inspection rigoureuse.</p>
            </div>
          </div>

          <div className={`${styles.card} ${styles.clothes}`}>
            <div className={styles.cardHoverContent}>
              <p>Vêtements, chaussures et accessoires pour toutes les catégories.</p>
            </div>
          </div>

          <div className={`${styles.card} ${styles.construction}`}>
            <div className={styles.cardHoverContent}>
              <p>Matériaux essentiels pour la construction et la rénovation.</p>
            </div>
          </div>

          <div className={`${styles.card} ${styles.electronics}`}>
            <div className={styles.cardHoverContent}>
              <p>Téléphones, ordinateurs portables, écouteurs, chargeurs, câbles et téléviseurs.</p>
            </div>
          </div>

          <div className={`${styles.card} ${styles.agriculture}`}>
            <div className={styles.cardHoverContent}>
              <p>Équipement pour les secteurs de l&apos;agriculture et du bâtiment.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
