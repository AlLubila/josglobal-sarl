'use client'

// IMPORT FROM REACT
import React, { useState, useEffect } from 'react'
import { sendEmail } from "@/actions"

// IMPORT STYLES
import styles from '../styles/Contact.module.css'

// IMPORT ICONS
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagramSquare } from "react-icons/fa"

// Import React-Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Import the CSS for react-toastify

// Define the type for the response
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
      toast.success("Email sent successfully!", {
        position: "top-right",  // Use string for position
        autoClose: 3000,        // Automatically close after 3 seconds
      });
      setFormData(initialFormData);
    }
    if (sendEmailState.error) {
      toast.error("Error sending email!", {
        position: "top-right",  // Use string for position
        autoClose: 3000,        // Automatically close after 3 seconds
      });
    }
  }, [sendEmailState]);
  

  return (
    <div className={styles.container}>
      {/* CONTACT INFO */}
      <div className={styles.contactInfos}>
        <div className={styles.phoneInfos}>
          <h1>CALL US</h1>
          <p>1 (234) 567-879</p>
        </div>

        <div className={styles.addressInfos}>
          <h1>LOCATION</h1>
          <p>123 Rock Street. 21 Avenue, City</p>
        </div>

        <div className={styles.socialMedia}>
          <h1>SOCIAL MEDIA</h1>
          <div className={styles.socialItems}>
            <FaFacebook size={24}/>
            <FaInstagramSquare size={24}/>
            <FaTwitter size={24}/>
            <FaLinkedin size={24}/>
          </div>
        </div>
      </div>

      {/* CONTACT FORM */}
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <h1>CONTACT US</h1>
        <div className={styles.inputContainer}>
          <input 
            type="text" 
            placeholder='Enter your name' 
            name='name' 
            value={formData.name} 
            onChange={handleChange} 
            required
          />
          <input 
            type="email" 
            placeholder='Enter a valid email address' 
            name='email' 
            value={formData.email} 
            onChange={handleChange} 
            required
          />
          <input 
            type="text" 
            placeholder='Enter the subject' 
            name='subject' 
            value={formData.subject} 
            onChange={handleChange}
            required
          />
          <textarea 
            placeholder='Enter a message' 
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
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
      </form>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  )
}
