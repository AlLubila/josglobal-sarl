'use client'

import React from 'react'
import Image from 'next/image'
import { FaPhone } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";

import styles from '@/styles/section/homepage/heroSection.module.css'
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter()

  const toContact = () => {
    router.push('/contact')
  }
  const toAbout = () => {
    router.push('/about')
  }
  return (
    <div>
        <section className={styles.heroSection}>
          <div className={styles.leftPart}>
            <p>
              <span className={styles.title}>JOSGLOBAL Sarl</span> connects
              businesses in Central Africa with top suppliers. Based in
              Kinshasa, we offer high-quality B2B solutions for diverse needs.
            </p>
            <p>Streamline your sourcing and expand your reach with us.</p>
            <p>Get in touch or learn more today!</p>
            <div className={styles.buttons}>
              <button onClick={toContact}>
                Get in Touch{" "}
                <span>
                  <FaPhone />
                </span>
              </button>
              <button onClick={toAbout}>
                Learn More{" "}
                <span>
                  <IoIosInformationCircle size="30px" />
                </span>
              </button>
            </div>
          </div>

          <div className={styles.rightPart}>
            <Image
              src="/businessNetworking-Photoroom.png"
              alt="Hero section image"
              width={500}
              height={500}
              className={styles.img}
              priority
            />
          </div>
        </section>
    </div>
  )
}
