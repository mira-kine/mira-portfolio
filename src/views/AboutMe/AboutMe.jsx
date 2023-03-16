import React from 'react';

export default function AboutMe() {
  return (
    <>
      <div
        className="snap-center flex scroll-mt-0.5 h-5/6 w-screen items-center justify-center py-12 mt-12 mb-48"
        name="about-me"
      >
        <div className="flex flex-col items-center bg-white border border-charcoal w-5/6 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-charcoal dark:border-charcoal dark:bg-charcoal/75 dark:text-white dark:hover:bg-charcoal">
          <img
            className="object-contain w-7/8 rounded-full h-72 my-8 md:h-auto md:my-0 md:w-48 md:rounded-none md:rounded-l-lg"
            src="/assets/headshot_mira.jpg"
            alt="headshot of mira"
          />
          <div className="flex flex-col justify-between p-4 leading-normal bg-charcoal md:bg-charcoal/0">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-pink dark:text-pink">
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
