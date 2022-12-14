import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';

export default function Contact() {
  return (
    <div
      className="snap-center flex flex-col h-screen overflow-hidden"
      name="contact"
    >
      <ContactForm />
    </div>
  );
}
