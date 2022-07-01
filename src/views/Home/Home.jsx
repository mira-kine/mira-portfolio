import React from 'react';
import AboutMe from '../../components/AboutMe/AboutMe';
import Landing from '../../components/Landing/Landing';
import Project1 from '../Projects/Project1';
import Project2 from '../Projects/Project2';
import Project3 from '../Projects/Project3';

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen w-screen">
      <Landing />
      <AboutMe />
      <Project1 />
      <Project2 />
      <Project3 />
    </div>
  );
}
