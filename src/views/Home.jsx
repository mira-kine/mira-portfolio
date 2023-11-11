import React from 'react';
// import TechStack from './TechStack';
import Landing from './Landing';
import Hero from './Hero';
import ProjectsList from './ProjectsList';
// import Contact from './Contact';
import AboutMe from './AboutMe';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="main-container h-full w-full bg-white">
      <Hero />
      <AboutMe />
      {/* <TechStack /> */}
      <Landing />
      <ProjectsList />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}
