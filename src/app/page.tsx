'use client'

// STYLES IMPORTS
import '@/styles/globals.css'
import styles from '@/styles/HomePage.module.css'

// COMPONENTS IMPORTs
import ContactForm from "../components/ContactForm";
import HeroSection from "@/components/section/homepage/HeroSection";
import AboutSection from "@/components/section/homepage/AboutSection";
import Testimony from "@/components/section/homepage/Testimony";
import BlogSection from "@/components/section/homepage/BlogSection";
import ServiceSection from "@/components/section/homepage/ServiceSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Animate Hero Section: 3D zoom-in effect with slight Y rotation
    gsap.fromTo(
      ".hero-section",
      { opacity: 0, z: -200, rotateY: -10 }, // Start far back on z-axis
      {
        opacity: 1,
        z: 0,
        rotateY: 0, // Bring to default
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate About Section: Slide in from left with Y-axis 3D rotation
    gsap.fromTo(
      ".about-section",
      { opacity: 0, x: -150, rotateY: -90 }, // Rotate 90 degrees on Y-axis
      {
        opacity: 1,
        x: 0,
        rotateY: 0, // Reset rotation
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate Service Section: Slide in from right with Y-axis 3D rotation
    gsap.fromTo(
      ".service-section",
      { opacity: 0, x: 150, rotateY: 90 }, // Rotate from the other side
      {
        opacity: 1,
        x: 0,
        rotateY: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".service-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate Testimony Section: 3D flip effect on X-axis
    gsap.fromTo(
      ".testimony-section",
      { opacity: 0, rotateX: 90 }, // Start by being rotated along the X-axis (flip)
      {
        opacity: 1,
        rotateX: 0,
        duration: 1.5,
        ease: "back.out(1.7)", // Bounce effect as it rotates into view
        scrollTrigger: {
          trigger: ".testimony-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate Blog Section: Staggered Z-axis rotation for blog items
    gsap.fromTo(
      ".blog-section .blog-item",
      { opacity: 0, rotateZ: -10, y: 50 }, // Rotate slightly on Z-axis
      {
        opacity: 1,
        rotateZ: 0,
        y: 0,
        duration: 1.2,
        stagger: 0.2, // Staggered animation for each blog item
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".blog-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate Contact Form: Zoom-in on the Z-axis with slight Y-axis rotation
    gsap.fromTo(
      ".contact-section",
      { opacity: 0, scale: 0.8, rotateY: -15, z: -100 }, // Start scaled down, rotated, and far back
      {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        z: 0, // Bring it to normal view
        duration: 1.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
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
          {/* Assuming BlogSection has child elements like blog-item */}
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
