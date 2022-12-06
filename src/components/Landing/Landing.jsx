import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import NavBar from '../NavBar/NavBar';

export default function Landing() {
  return (
    <div className="snap-center flex flex-col h-screen">
      <NavBar />
      {/* <div class="flex flex-col bg-white h-full"> */}
      {/* add cute hellow gif here */}
      <div class="bg-pink h-full w-full">
        <h1 className="text-9xl tracking-wide text-white">Mira Kinebuchi</h1>
        <h1 className="text-6xl tracking-wide text-white">
          Software Developer
        </h1>
      </div>
    </div>
    // </div>
  );
}
