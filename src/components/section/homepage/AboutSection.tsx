import React from 'react'
import Image from 'next/image'

import styles from '@/styles/section/homepage/aboutSection.module.css'

export default function AboutSection() {
  return (
    <div>
            <section className={styles.aboutSection}>
        <div className={styles.aboutTitle}>
          <h1>About Us</h1>
          <p>
            JOSGLOBAL Sarl in Kinshasa connects businesses with trusted global
            suppliers, focusing on integrity, quality, and innovation to provide
            reliable, tailored B2B solutions.
          </p>
        </div>

        <div className={styles.mission}>
          <div className={styles.leftMission}>
            <Image
              src="/partnerPhotoroom.png"
              alt="partnership"
              width={600}
              height={600}
              priority
            />
          </div>
          <div className={styles.rightMission}>
            <h1>Our Mission</h1>
            <p>
              Our mission is to become the top sourcing partner for businesses
              in the Democratic Republic of Congo and internationally, offering
              access to premium products from reputable global suppliers. We
              strive to consistently provide outstanding value through
              efficient, dependable, and ethical sourcing practices.
            </p>
          </div>
        </div>

        <div className={styles.valueProposition}>
          <div className={styles.leftValueP}>
            <h1>Value Proposition</h1>
            <p>
              JOSGLOBAL Sarl delivers tailored and dependable sourcing solutions
              for businesses, leveraging a strong network of trusted suppliers <span style={{ fontWeight: "bold" }}> across the EU, China, Dubai, India, and Turkey. </span>
              We offer a wide selection of high-quality products at competitive
              prices, along with expert branding support to strengthen market
              positioning.
            </p>
          </div>
          <div className={styles.rightValueP}>
            <Image
              src="/networking.png"
              alt="partnership"
              width={600}
              height={600}
              priority
            />
          </div>
        </div>

        <div className={styles.coreValues}>
          <h1>Core Values</h1>
          <div className={styles.value}>
            <Image
              src="/coreValues.svg"
              alt="core values"
              width={1000}
              height={1000}
              className={styles.coreValueImg}
              priority
            />
            {/* IMAGE FOR TABLET */}
            <Image
              src="/coreValues_tablet.svg"
              alt="core values"
              width={1000}
              height={1000}
              className={styles.coreValueImg_tablet}
              priority
            />
            {/* IMAGE FOR MOBILE L */}
            <Image
              src="/coreValues_mobile_L.svg"
              alt="core values"
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
