'use client';

import React, { useEffect } from 'react';
import styles from '@/styles/Service.module.css';
import { FaCar, FaTshirt, FaTools, FaMobileAlt, FaTractor } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CardSection from '@/components/section/homepage/CardSection';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Service() {
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
  }, []); // Run effect once, after component mounts

  return (
    <div className={styles.container}>
      {/* First split section */}
      <section className={styles.splitSection}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Supply Chain and Network</h2>
          <p>
            Our robust supply chain, partnered with industry-leading logistics companies like{' '}
            <span style={{ fontWeight: 'bold' }}>MAERSK</span>, ensures seamless delivery and optimal
            efficiency. We manage the entire logistics process, guaranteeing timely and secure
            transport of goods.
          </p>
        </div>
        <div className={`${styles.imageContent} ${styles.supplyChainImg}`}></div>
      </section>

      {/* Second split section */}
      <section className={styles.splitSection}>
        <div className={`${styles.imageContent} ${styles.customerSupportImg}`}></div>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Customer Support and Services</h2>
          <p>
            We focus on building lasting relationships and delivering exceptional value. Our
            dedicated team provides personalized solutions, customization options, and ongoing
            post-purchase support. Additional services include branding support, logistics
            coordination, and market insights.
          </p>
        </div>
      </section>

      {/* Card section */}
    <CardSection/>
    </div>
  );
}
