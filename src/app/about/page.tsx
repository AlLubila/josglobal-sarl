import React from "react";
import type { Metadata } from "next";
import Image from "next/image";

import styles from "@/styles/About.module.css";


export const metadata: Metadata = {
  title: "About Us - JOSGLOBAL Sarl",
  description:
    "Learn more about JOSGLOBAL Sarl, a leading sourcing company in Kinshasa, DRC. Discover our values, mission, and how we strive to deliver excellence in connecting businesses with global suppliers.",
};

export default function About() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.aboutImgContainer}>
        <Image
          src="/aboutImg.svg"
          alt="About"
          width={1000}
          height={1000}
          className={styles.aboutImg}
        />
        {/* IMAGE FOR TABLET */}
        <Image
          src="/aboutImg_tablet.svg"
          alt="About"
          width={1000}
          height={1000}
          className={styles.aboutImg_tablet}
          priority
        />
        {/* IMAGE FOR PHONE */}
        <Image
          src="/aboutImg_phone.svg"
          alt="About"
          width={1000}
          height={1000}
          className={styles.aboutImg_phone}
          priority
        />
        {/* IMAGE FOR SMALL PHONE */}
        <Image
          src="/aboutImg_smallPhone.svg"
          alt="About"
          width={1000}
          height={1000}
          className={styles.aboutImg_smallPhone}
          priority
        />
      </div>
      <div className={styles.value}>
      <h1>Core Values</h1>
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
    </>
  );
}
