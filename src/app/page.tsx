// METADATA TYPE IMPORTS
import type { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "Home - JOSGLOBAL Sarl",
  description:
    "Welcome to JOSGLOBAL Sarl, your premier sourcing partner based in Kinshasa. Explore our dynamic B2B solutions tailored to connect businesses with high-quality products and trusted suppliers globally.",
};

export default function Home() {
  return (
    <>
    <div className={styles.container}>

    <Header/>
    <HeroSection />
      {/* SEPARATION BAR */}
      <div className='bar'></div>
      <AboutSection />
      <ServiceSection />
      {/* SEPARATION BAR */}
      <div className='bar'></div>
      <Testimony />
      <BlogSection />
      {/* SEPARATION BAR */}
      <div className='bar'></div>
      <ContactForm />
     <footer>
     <Footer/>
     </footer>
     </div>
    </>
  );
}
