import React from 'react'
import styles from '@/styles/section/homepage/serviceSection.module.css'
import Image from 'next/image'

export default function ServiceSection() {
  return (
    <div>
       <section className={styles.service}>
        <Image
          src="/Services.svg"
          alt="Services"
          width={1000}
          height={1000}
          className={styles.serviceImg}
        />
        {/* IMAGE FOR PHONE SIZE */}
        <Image
          src="/Services_phone.svg"
          alt="Services"
          width={1000}
          height={1000}
          className={styles.serviceImg_phone}
        />
        </section>
    </div>
  )
}
