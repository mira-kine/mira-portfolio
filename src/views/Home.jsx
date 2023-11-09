import React from 'react';
// import TechStack from './TechStack';
import Landing from './Landing';
import Hero from './Hero';
import Projects from './Projects';
import Contact from './Contact';
import AboutMe from './AboutMe';

export default function Home() {
  return (
    <div className="main-container h-full w-full bg-white">
      <Hero />
      <AboutMe />
      {/* <TechStack /> */}
      <Landing />
      <Projects />
      <Contact />
    </div>
  );
}
