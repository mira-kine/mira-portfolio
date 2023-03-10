import React from 'react';

export default function Landing() {
  return (
    <div
      aria-label="main-container"
      className="snap-center flex flex-col h-full w-full"
      name="home"
    >
      {/* add cute hellow gif here */}
      <div
        aria-label="title-container"
        className="bg-grumpy bg-cover bg-no-repeat bg-center flex flex-col justify-center content-center items-center z-0 h-full"
      >
        <div
          aria-label="name-container"
          className="flex flex-col justify-center bg-white opacity-40 py-8 px-8 z-10 w-full h-1/3 sm:text-center"
        >
          <h1 className="text-7xl sm:text-8xl lg:text-9xl tracking-wide text-charcoal z-20">
            Mira Kinebuchi
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl tracking-wide text-charcoal z-20">
            Software Developer
          </h1>
        </div>
      </div>
    </div>
  );
}
