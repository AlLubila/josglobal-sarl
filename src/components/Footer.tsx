import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'

export default function Footer() { 
  return (
    <>
    {/* COPYRIGHT */}
    <div className={styles.bar}></div>
    <div className={styles.container}>
    <Image src='/logo1.png' alt="website's logo" width={250} height={250}/>
      <p style={{paddingTop:'20px'}}>©2024 All right reserved</p>
    </div>


    </>
  )
}
