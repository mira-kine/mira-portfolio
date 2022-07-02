import React from 'react';
import AboutMe from '../../components/AboutMe/AboutMe';
import Landing from '../../components/Landing/Landing';
import Projects from '../Projects/Projects';

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen w-screen">
      <Landing />
      <AboutMe />
      <Projects />
    </div>
  );
}
