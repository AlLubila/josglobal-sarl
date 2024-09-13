import React from "react";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us - JOSGLOBAL Sarl",
  description:
    "Get in touch with JOSGLOBAL Sarl for any inquiries or support. Find our contact details, address, and a form to reach out directly to our team.",
};

export default function Contact() {
  return (
    <div>
      <ContactForm />
    </div>
  );
}
