import React from 'react';
import Landing from './Landing';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';

export default function Home() {
  return (
    <div className="main-container h-full w-full bg-sand">
      <AboutMe />
      <Landing />
      <Projects />
      <Contact />
    </div>
  );
}
