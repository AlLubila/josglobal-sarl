'use client'

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
import CardSection from '@/components/section/homepage/CardSection';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Header />

        <div className="hero-section">
          <HeroSection />
        </div>
        <div className="bar"></div>

        <div className="about-section">
          <AboutSection />
        </div>

        <div className="service-section">
          <CardSection />
        </div>

        <div className="bar"></div>

        <div className="testimony-section">
          <Testimony />
        </div>

        <div className="blog-section">
          <BlogSection />
        </div>

        <div className="bar"></div>

        <div className="contact-section">
          <ContactForm />
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
