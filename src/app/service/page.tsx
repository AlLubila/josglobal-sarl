import React from "react";
import styles from "@/styles/Service.module.css";
import {
  FaCar,
  FaTshirt,
  FaTools,
  FaMobileAlt,
  FaTractor,
} from "react-icons/fa";


export default function Service() {
  return (
    <>
      <div className={styles.container}>
        {/* first split section */}
        <section className={styles.splitSection}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Supply Chain and Network</h2>
            <p>
              Our robust supply chain, partnered with industry-leading logistics
              companies like <span style={{ fontWeight: "bold" }}>MAERSK</span>,
              ensures seamless delivery and optimal efficiency. We manage the
              entire logistics process, guaranteeing timely and secure transport
              of goods.
            </p>
          </div>
          <div
            className={`${styles.imageContent} ${styles.supplyChainImg}`}
          ></div>
        </section>
        {/* second split section */}
        <section className={styles.splitSection}>
          <div
            className={`${styles.imageContent} ${styles.customerSupportImg}`}
          ></div>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Customer Support and Services</h2>
            <p>
              We focus on building lasting relationships and delivering
              exceptional value. Our dedicated team provides personalized
              solutions, customization options, and ongoing post-purchase
              support. Additional services include branding support, logistics
              coordination, and market insights.
            </p>
          </div>
        </section>
        {/* Card section */}
        <section className={styles.cardsSection}>
          <h2>Service Offerings</h2>
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <FaCar className={styles.cardIcon} />
              <h3>Used Luxury Brand Cars and Trucks</h3>
              <div className={styles.cardHoverContent}>
                <p>Premium used vehicles with rigorous inspection.</p>
              </div>
            </div>

            <div className={styles.card}>
              <FaTshirt className={styles.cardIcon} />
              <h3>Wholesale Clothing, Shoes, and Accessories</h3>
              <div className={styles.cardHoverContent}>
                <p>Apparel, shoes, and accessories for all categories.</p>
              </div>
            </div>

            <div className={styles.card}>
              <FaTools className={styles.cardIcon} />
              <h3>Building Materials</h3>
              <div className={styles.cardHoverContent}>
                <p>Essential materials for construction and renovation.</p>
              </div>
            </div>

            <div className={styles.card}>
              <FaMobileAlt className={styles.cardIcon} />
              <h3>Electronics Products</h3>
              <div className={styles.cardHoverContent}>
                <p>Phones, laptops, headphones, chargers, cables, and TVs.</p>
              </div>
            </div>

            <div className={styles.card}>
              <FaTractor className={styles.cardIcon} />
              <h3>Machinery for Small Industries</h3>
              <div className={styles.cardHoverContent}>
                <p>Equipment for agriculture and building sectors.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
