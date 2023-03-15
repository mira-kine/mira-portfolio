import React from 'react';

export default function AboutMe() {
  return (
    <div
      className="snap-center flex h-screen scroll-mt-0.5 h-screen w-screen"
      name="about-me"
    >
      <div
        aria-label="about-me-title"
        className="flex flex-col h-full sm:min-w-fit scroll-mt-0.5 "
      >
        <div className="flex flex-col justify-center align-center h-1/4 mt-10 ml-20">
          <h1 className="dark:text-white text-8xl lg:text-9xl font-semibold text-charcoal w-full">
            About Me
          </h1>
        </div>
        <div
          aria-label="about-me-text-container"
          className="bg-white opacity-70 h-fit sm:w-8/12 md:w-8/12 mt-1 ml-20 lg:mt-5 p-10"
        >
          <p className="dark:text-gray-300 text-xl leading-normal text-charcoal">
            I am a full stack software developer who cares about people and
            their stories. My background in mental health & biopsychology helps
            me stay grounded in human connection and user experience while
            pursuing accessibility, equity and soulfulness in the digital world.{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
