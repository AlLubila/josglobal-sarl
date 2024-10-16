'use client'

import React from 'react';
import Image from 'next/image';
import { FaPhone } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";

import styles from '@/styles/section/homepage/heroSection.module.css';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();

  const toContact = () => {
    router.push('/contact');
  }
  const toAbout = () => {
    router.push('/about');
  }
  
  return (
    <div>
      <section className={styles.heroSection}>
        <div className={styles.leftPart}>
          <p>
            <span className={styles.title}>JOSGLOBAL Sarl</span> connecte
            les entreprises en Afrique centrale avec des fournisseurs de premier plan. Basés à
            Kinshasa, nous offrons des solutions B2B de haute qualité pour divers besoins.
          </p>
          <p>Rationalisez votre approvisionnement et élargissez votre portée avec nous.</p>
          <p>Contactez-nous ou apprenez-en plus dès aujourd&apos;hui !</p>
          <div className={styles.buttons}>
            <button onClick={toContact}>
              Contactez-nous{" "}
              <span>
                <FaPhone />
              </span>
            </button>
            <button onClick={toAbout}>
              En savoir plus{" "}
              <span>
                <IoIosInformationCircle size="30px" />
              </span>
            </button>
          </div>
        </div>

        <div className={styles.rightPart}>
          <Image
            src="/businessNetworking-Photoroom.png"
            alt="Image de la section héros"
            width={500}
            height={500}
            className={styles.img}
            priority
          />
        </div>
      </section>
    </div>
  );
}
