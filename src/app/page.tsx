'use client';

// STYLES IMPORTS
import '@/styles/globals.css';
import styles from '@/styles/HomePage.module.css';

// COMPONENTS IMPORTs
import ContactForm from '../components/ContactForm';
import HeroSection from '@/components/section/homepage/HeroSection';
import AboutSection from '@/components/section/homepage/AboutSection';
import Testimony from '@/components/section/homepage/Testimony';
import BlogSection from '@/components/section/homepage/BlogSection';
import ServiceSection from '@/components/section/homepage/ServiceSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const heroSection = document.querySelector('.hero-section');
    const aboutSection = document.querySelector('.about-section');
    const serviceSection = document.querySelector('.service-section');
    const testimonySection = document.querySelector('.testimony-section');
    const blogItems = document.querySelectorAll('.blog-section .blog-item');
    const contactSection = document.querySelector('.contact-section');

    // Animate Hero Section
    if (heroSection) {
      gsap.fromTo(
        heroSection,
        { opacity: 0, z: -200, rotateY: -10 },
        {
          opacity: 1,
          z: 0,
          rotateY: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heroSection,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Animate About Section
    if (aboutSection) {
      gsap.fromTo(
        aboutSection,
        { opacity: 0, x: -150, rotateY: -90 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: aboutSection,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Animate Service Section
    if (serviceSection) {
      gsap.fromTo(
        serviceSection,
        { opacity: 0, x: 150, rotateY: 90 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: serviceSection,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Animate Testimony Section
    if (testimonySection) {
      gsap.fromTo(
        testimonySection,
        { opacity: 0, rotateX: 90 },
        {
          opacity: 1,
          rotateX: 0,
          duration: 1.5,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: testimonySection,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Animate Blog Section items
    if (blogItems.length > 0) {
      gsap.fromTo(
        blogItems,
        { opacity: 0, rotateZ: -10, y: 50 },
        {
          opacity: 1,
          rotateZ: 0,
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.blog-section',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Animate Contact Section
    if (contactSection) {
      gsap.fromTo(
        contactSection,
        { opacity: 0, scale: 0.8, rotateY: -15, z: -100 },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          z: 0,
          duration: 1.5,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: contactSection,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Header />

        <div className="hero-section fade-section">
          <HeroSection />
        </div>
        <div className="bar"></div>

        <div className="about-section fade-section">
          <AboutSection />
        </div>

        <div className="service-section fade-section">
          <ServiceSection />
        </div>

        <div className="bar"></div>

        <div className="testimony-section fade-section">
          <Testimony />
        </div>

        <div className="blog-section fade-section">
          <BlogSection />
        </div>

        <div className="bar"></div>

        <div className="contact-section fade-section">
          <ContactForm />
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
