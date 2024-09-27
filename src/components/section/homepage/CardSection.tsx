import React, { useEffect } from 'react'
import styles from '@/styles/section/homepage/CardSection.module.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



export default function CardSection() {

    useEffect(() => {
        // Ensure that the DOM elements are available before animating
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
                  once: true, // Animation plays only once
                },
              }
            );
          });
        } else {
          console.warn('No split sections found');
        }
    
        // Ensure cards and the card section exist before animating
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
                once: true, // Animation plays only once
              },
            }
          );
        } else {
          console.warn('No cards or card section found');
        }
      }, []); 

  return (
    <div>
            <section className={styles.cardsSection}>
        <h2>Service Offerings</h2>
        <div className={styles.cardsContainer}>
        <div className={`${styles.card} ${styles.car}`}>

            <div className={styles.cardHoverContent}>
              <p>Premium used vehicles with rigorous inspection.</p>
            </div>
          </div>

          <div className={`${styles.card} ${styles.clothes}`}>

            <div className={styles.cardHoverContent}>
              <p>Apparel, shoes, and accessories for all categories.</p>
            </div>
          </div>

          <div className={`${styles.card} ${styles.construction}`}>
            <div className={styles.cardHoverContent}>
              <p>Essential materials for construction and renovation.</p>
            </div>
          </div>

          <div className={`${styles.card} ${styles.electronics}`}>
            <div className={styles.cardHoverContent}>
              <p>Phones, laptops, headphones, chargers, cables, and TVs.</p>
            </div>
          </div>

          <div className={`${styles.card} ${styles.agriculture}`}>
            <div className={styles.cardHoverContent}>
              <p>Equipment for agriculture and building sectors.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
