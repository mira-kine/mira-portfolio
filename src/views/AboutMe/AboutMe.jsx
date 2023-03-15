import React from 'react';

export default function AboutMe() {
  return (
    <>
      <div
        className="snap-center flex scroll-mt-0.5 h-screen w-screen items-center"
        name="about-me"
      >
        {/* <div
        aria-label="about-me-title"
        className="flex flex-col h-full sm:min-w-fit scroll-mt-0.5 "
      >
        <div className="flex flex-col justify-center align-center h-1/4 mt-10 ml-20">
          {/* <h1 className="dark:text-white text-8xl lg:text-9xl font-semibold text-charcoal w-full">
            About Me
          </h1> */}
        {/* </div>
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
      </div> */}{' '}
        <a className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-charcoal-700 dark:bg-charcoal-800 dark:hover:bg-charcoal-700">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src=""
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-steelblue dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </a>
      </div>
    </>
  );
}
