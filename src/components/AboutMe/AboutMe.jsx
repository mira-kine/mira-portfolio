import React from 'react';

export default function AboutMe() {
  return (
    <div
      className="snap-center flex flex-col h-screen bg-sunflower"
      name="about-me"
    >
      <div className="h-full sm:min-w-fit">
        <h1 className="dark:text-white text-1xl sm:text-2xl md:text-5xl xl:text-6xl font-semibold text-charcoal w-7/12">
          About Me
        </h1>
        <p className="dark:text-gray-300 md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal text-charcoal">
          Full stack software developer who cares about people and their
          stories. My background in mental health & biopsychology helps me stay
          grounded in human connection and user experience while pursuing
          accessibility, equity and soulfulness in the digital world.{' '}
        </p>
      </div>
    </div>
  );
}
