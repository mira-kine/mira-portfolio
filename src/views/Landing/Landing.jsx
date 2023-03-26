import React from 'react';

export default function Landing() {
  return (
    <div
      aria-label="landing-container"
      className="snap-center flex flex-col h-3/4 w-screen md:h-5/6 lg:h-7/8 xlg:h-screen pb-12"
      name="home"
    >
      <div
        aria-label="title-container"
        className="flex flex-col justify-center content-center items-center z-0 w-full h-full"
      >
        <img src="/assets/grumpy.webp" className="w-full" />
      </div>
    </div>
  );
}
