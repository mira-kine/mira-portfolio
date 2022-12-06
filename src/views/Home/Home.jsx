import React from 'react';
import Landing from '../../components/Landing/Landing';
import AboutMe from '../../components/AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import ContactForm from '../../components/ContactForm/ContactForm';

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-scroll snap-mandatory snap-y">
      <Landing />
      <AboutMe />
      <Projects />
      <ContactForm />
    </div>
  );
}
