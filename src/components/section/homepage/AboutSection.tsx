import React from 'react'
import Image from 'next/image'

import styles from '@/styles/section/homepage/aboutSection.module.css'

export default function AboutSection() {
  return (
    <div>
      <section className={styles.aboutSection}>
        <div className={styles.aboutTitle}>
          <h1>À propos de nous</h1>
          <p>
            JOSGLOBAL Sarl à Kinshasa connecte les entreprises avec des
            fournisseurs mondiaux de confiance, en mettant l'accent sur
            l'intégrité, la qualité et l'innovation pour fournir des solutions
            B2B fiables et sur mesure.
          </p>
        </div>

        <div className={styles.mission}>
          <div className={styles.leftMission}>
            <Image
              src="/partnerPhotoroom.png"
              alt="partenariat"
              width={600}
              height={600}
              priority
            />
          </div>
          <div className={styles.rightMission}>
            <h1>Notre mission</h1>
            <p>
              Notre mission est de devenir le principal partenaire d'approvisionnement
              pour les entreprises en République Démocratique du Congo et à
              l'international, offrant un accès à des produits de premier choix
              provenant de fournisseurs mondiaux réputés. Nous nous efforçons de
              fournir de manière cohérente une valeur exceptionnelle grâce à
              des pratiques d'approvisionnement efficaces, fiables et éthiques.
            </p>
          </div>
        </div>

        <div className={styles.valueProposition}>
          <div className={styles.leftValueP}>
            <h1>Proposition de valeur</h1>
            <p>
              JOSGLOBAL Sarl fournit des solutions d'approvisionnement sur mesure
              et fiables pour les entreprises, s'appuyant sur un solide réseau de
              fournisseurs de confiance <span style={{ fontWeight: "bold" }}> à travers l'UE, la Chine, Dubaï, l'Inde et la Turquie. </span>
              Nous offrons une large sélection de produits de haute qualité à des
              prix compétitifs, ainsi qu'un soutien en matière de branding pour
              renforcer le positionnement sur le marché.
            </p>
          </div>
          <div className={styles.rightValueP}>
            <Image
              src="/networking.png"
              alt="partenariat"
              width={600}
              height={600}
              priority
            />
          </div>
        </div>

        <div className={styles.coreValues}>
          <h1>Valeurs fondamentales</h1>
          <div className={styles.value}>
            <Image
              src="/coreValues.svg"
              alt="valeurs fondamentales"
              width={1000}
              height={1000}
              className={styles.coreValueImg}
              priority
            />
            {/* IMAGE POUR TABLETTE */}
            <Image
              src="/coreValues_tablet.svg"
              alt="valeurs fondamentales"
              width={1000}
              height={1000}
              className={styles.coreValueImg_tablet}
              priority
            />
            {/* IMAGE POUR MOBILE L */}
            <Image
              src="/coreValues_mobile_L.svg"
              alt="valeurs fondamentales"
              width={1000}
              height={1000}
              className={styles.coreValueImg_mobile_L}
              priority
            />
          </div>
        </div>
      </section>
    </div>
  )
}
