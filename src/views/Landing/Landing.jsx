import React from 'react';

export default function Landing() {
  return (
    <div
      aria-label="main-container"
      className="snap-center flex flex-col h-3/5 w-full"
      name="home"
    >
      {/* add cute hellow gif here */}
      <div
        aria-label="title-container"
        className="bg-grumpy bg-cover bg-no-repeat bg-center flex flex-col justify-center content-center items-center z-0 h-full"
      >
        <div
          aria-label="name-container"
          className="bg-white opacity-40 py-8 px-8 z-10 w-2/3 text-center"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-8xl tracking-wide text-charcoal z-20">
            Mira Kinebuchi
          </h1>
          <h1 className="text-2xl sm:text-4xl lg:text-6xl tracking-wide text-charcoal z-20">
            Software Developer
          </h1>
        </div>
      </div>
    </div>
  );
}
