import React from 'react';

export default function AboutMe() {
  return (
    <>
      <div
        className="snap-center flex scroll-mt-0.5 h-5/6 w-screen items-center justify-center py-12 mt-12 mb-28"
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
        <div className="flex flex-col items-center bg-white border border-charcoal w-5/6 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-charcoal dark:border-charcoal dark:bg-charcoal/75 dark:text-white dark:hover:bg-charcoal">
          <img
            className="object-contain w-7/8 rounded-full h-72 my-8 md:h-auto md:my-0 md:w-48 md:rounded-none md:rounded-l-lg"
            src="/assets/headshot_mira.jpg"
            alt="headshot of mira"
          />
          <div className="flex flex-col justify-between p-4 leading-normal bg-charcoal md:bg-charcoal/0">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-steelblue dark:text-pink">
              About Me:
            </h5>
            <p className="mb-3 font-normal text-charcoal-700 dark:text-charcoal-400">
              I am a full stack software developer who cares about people and
              their stories. My background in mental health & biopsychology
              helps me stay grounded in human connection and user experience
              while pursuing accessibility, equity and soulfulness in the
              digital world.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
