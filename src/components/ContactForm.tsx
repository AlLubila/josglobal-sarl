'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { sendEmail } from "@/actions";
import styles from '../styles/Contact.module.css';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

// Define the type for the response
interface SendEmailResponse {
  error: string | null;
  success: boolean;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const initialFormData = useMemo(() => ({
    name: '',
    email: '',
    subject: '',
    message: ''
  }), []); // Memoize the initial form data

  const [formData, setFormData] = useState(initialFormData);
  const [sendEmailState, setSendEmailState] = useState<SendEmailResponse>({
    error: null,
    success: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formDataObj = new FormData();
    Object.keys(formData).forEach(key => formDataObj.append(key, formData[key as keyof typeof formData]));

    const response: SendEmailResponse = await sendEmail({ error: null, success: false }, formDataObj);
    setSendEmailState(response);
    setIsSubmitting(false);
  };

  useEffect(() => {
    const resetFormData = () => {
      setFormData(initialFormData); // Use initialFormData to reset the form
    };

    if (sendEmailState.success) {
      toast.success("Email envoyé avec succès !", {
        position: "top-right",
        autoClose: 3000,
      });
      resetFormData(); // Reset the form
    }

    if (sendEmailState.error) {
      toast.error("Erreur lors de l'envoi de l'email !", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  }, [sendEmailState, initialFormData]); // No need to change this line

  return (
    <div className={styles.container}>
      {/* Contact Info */}
      <div className={styles.contactInfos}>
        <div className={styles.phoneInfos}>
          <h1>APPELEZ-NOUS</h1>
          <Link href="tel:+48 739235083">+48 739235083</Link>
        </div>
        <div className={styles.addressInfos}>
          <h1>EMPLACEMENT</h1>
          <p>14 AV. DONA BEATRICE Q/BINZA-PIGEON: C/NGALIEMA, Kinshasa, RD Congo</p>
        </div>
        <div className={styles.socialMedia}>
          <h1>MÉDIAS SOCIAUX</h1>
          <div className={styles.socialItems}>
            <Link href='josglobalsarl.services7@gmail.com' target="_blank" rel="noopener noreferrer">
            <SiGmail size={24}/>
            </Link>

            <Link href='https://x.com/JosglobalSarl7' target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24}/>
            </Link>
          
            <Link href='https://www.instagram.com/josglobal.sarl7/' target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare size={24}/>
            </Link>
           
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <h1>CONTACTEZ-NOUS</h1>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder='Entrez votre nom'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder='Entrez une adresse e-mail valide'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder='Entrez le sujet'
            name='subject'
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            placeholder='Entrez un message'
            rows={7}
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Envoi en cours...' : 'Soumettre'}
        </button>
      </form>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}
