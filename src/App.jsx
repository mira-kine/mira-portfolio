import React, { useState } from 'react';
import './App.css'; /* Global CSS */
import NavBar from './components/NavBar/NavBar';
import AboutMe from './views/AboutMe/AboutMe';
import Projects from './views/Projects/Projects';
import Contact from './views/Contact/Contact';
import Landing from './views/Landing/Landing';
import { useScrollPosition } from './hooks/usePosition';

export default function App() {
  const scrollPosition = useScrollPosition();
  console.log('scrollPosition', scrollPosition);
  return (
    <>
      {/* <div className="w-full h-1/4"> */}
      {/* </div> */}
      <div className="main-container h-screen w-screen bg-sand overflow-y-scroll">
        <NavBar scrollPosition={scrollPosition} />
        <AboutMe />
        <Landing />
        {/* add browser router and fuller about me page later */}
        <Projects />
        <Contact />
      </div>
    </>
  );
}
