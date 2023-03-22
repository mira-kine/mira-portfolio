import React from 'react';
import AboutMe from '../AboutMe/AboutMe';

export default function Landing() {
  return (
    <div
      aria-label="main-container"
      className="snap-center flex flex-col h-full w-full pb-12"
      name="home"
    >
      <div
        aria-label="title-container"
        // bg-grumpy bg-cover bg-no-repeat
        className="bg-center flex flex-col justify-center content-center items-center z-0 h-3/4"
      >
        <AboutMe />
      </div>
    </div>
  );
}
