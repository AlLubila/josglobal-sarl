'use client'

// IMPORTATION DE REACT
import React, { useState, useEffect } from 'react'
import { sendEmail } from "@/actions"

// IMPORTATION DES STYLES
import styles from '../styles/Contact.module.css'

// IMPORTATION DES ICÔNES
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagramSquare } from "react-icons/fa"

// Importer React-Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Importer le CSS pour react-toastify

// Définir le type pour la réponse
interface SendEmailResponse {
  error: string | null;
  success: boolean;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const initialFormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

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
    setIsSubmitting(true)
    const formDataObj = new FormData();
    Object.keys(formData).forEach(key => formDataObj.append(key, formData[key as keyof typeof formData]));

    const response: SendEmailResponse = await sendEmail({ error: null, success: false }, formDataObj);
    setSendEmailState(response);
    setIsSubmitting(false)
  };

  useEffect(() => {
    if (sendEmailState.success) {
      toast.success("Email envoyé avec succès !", {
        position: "top-right",  // Utiliser une chaîne pour la position
        autoClose: 3000,        // Se ferme automatiquement après 3 secondes
      });
      setFormData(initialFormData);
    }
    if (sendEmailState.error) {
      toast.error("Erreur lors de l'envoi de l'email !", {
        position: "top-right",  // Utiliser une chaîne pour la position
        autoClose: 3000,        // Se ferme automatiquement après 3 secondes
      });
    }
  }, [sendEmailState]);
  

  return (
    <div className={styles.container}>
      {/* INFOS DE CONTACT */}
      <div className={styles.contactInfos}>
        <div className={styles.phoneInfos}>
          <h1>APPELEZ-NOUS</h1>
          <p>1 (234) 567-879</p>
        </div>

        <div className={styles.addressInfos}>
          <h1>EMPLACEMENT</h1>
          <p>123 Rock Street. 21 Avenue, Ville</p>
        </div>

        <div className={styles.socialMedia}>
          <h1>MÉDIAS SOCIAUX</h1>
          <div className={styles.socialItems}>
            <FaFacebook size={24}/>
            <FaInstagramSquare size={24}/>
            <FaTwitter size={24}/>
            <FaLinkedin size={24}/>
          </div>
        </div>
      </div>

      {/* FORMULAIRE DE CONTACT */}
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

      {/* Conteneur de Toast */}
      <ToastContainer />
    </div>
  )
}
