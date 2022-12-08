import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import NavBar from '../NavBar/NavBar';

export default function Landing() {
  return (
    <div
      aria-label="main-container"
      className="snap-center flex flex-col h-screen"
    >
      <NavBar />
      {/* add cute hellow gif here */}
      <div
        aria-label="title-container"
        className="bg-pink h-full w-full flex flex-col justify-center content-center items-center "
      >
        <div aria-label="name-container" className="bg-charcoal py-8 px-8">
          <h1 className="text-9xl tracking-wide text-white">Mira Kinebuchi</h1>
          <h1 className="text-6xl tracking-wide text-white">
            Software Developer
          </h1>
        </div>
      </div>
    </div>
  );
}
