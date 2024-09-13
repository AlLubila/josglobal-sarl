import React from 'react'
import Image from 'next/image'

import styles from '@/styles/section/homepage/testimony.module.css'

export default function Testimony() {
  return (
    <div>
            <section className={styles.testimony}>
        <Image
          src="/testimonies.svg"
          alt="core values"
          width={1000}
          height={1000}
          className={styles.testimonies}
        />
        {/* IMAGE FOR TABLET */}
        <Image
          src="/testimonies_tablet.svg"
          alt="core values"
          width={1000}
          height={1000}
          className={styles.testimonies_tablet}
        />
        {/* IMAGE FOR MOBILE L */}
        <Image
          src="/testimonies_mobile_L.svg"
          alt="core values"
          width={1000}
          height={1000}
          className={styles.testimonies_mobile_L}
        />
      </section>
    </div>
  )
}
