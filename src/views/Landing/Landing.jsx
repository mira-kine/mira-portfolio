import React from 'react';

export default function Landing() {
  return (
    <div
      aria-label="main-container"
      className="snap-center flex flex-col h-screen"
      name="home"
    >
      {/* add cute hellow gif here */}
      <div
        aria-label="title-container"
        className="bg-grumpy bg-cover h-full w-full flex flex-col justify-center content-center items-center z-0"
      >
        <div
          aria-label="name-container"
          className="bg-white opacity-40 py-8 px-8 z-10"
        >
          <h1 className="text-9xl tracking-wide text-charcoal z-20">
            Mira Kinebuchi
          </h1>
          <h1 className="text-6xl tracking-wide text-charcoal z-20">
            Software Developer
          </h1>
        </div>
      </div>
    </div>
  );
}
