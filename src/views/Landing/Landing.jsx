import React from 'react';

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
        <div
          aria-label="name-container"
          className="flex flex-col justify-center bg-white opacity-40 py-8 px-8 z-10 w-full md:w-5/6 h-1/3 sm:text-center"
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl tracking-wide text-charcoal z-20">
            some space
          </h2>
        </div>
      </div>
    </div>
  );
}
