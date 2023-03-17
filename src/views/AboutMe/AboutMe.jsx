import React from 'react';

export default function AboutMe() {
  return (
    <>
      <div
        className="snap-center flex scroll-mt-0.5 h-full w-screen ml-14 lg:ml-48 justify-center items-center align-center lg:justify-start py-12 my-12"
        name="about-me"
      >
        <div className="flex flex-col items-center bg-white border border-charcoal w-full rounded-lg shadow md:flex-row md:max-w-2xl hover:bg-charcoal dark:border-charcoal dark:bg-charcoal/75 dark:text-white dark:hover:bg-charcoal">
          <img
            className="object-contain w-5/6 rounded-full h-1/2 mx-8 my-8 md:h-auto md:my-0 md:w-48"
            src="/assets/sunflower-pc.jpg"
            alt="headshot of mira"
          />
          <div className="flex flex-col justify-between p-4 leading-normal bg-charcoal md:bg-charcoal/0">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-pink dark:text-pink">
              About Me:
            </h5>
            <p className="mb-3 text-charcoal-700 dark:text-white text-xl lg:text-2xl">
              I am a full stack software developer who cares about people and
              their stories. My background in mental health & biopsychology
              helps me stay grounded in human connection and user experience
              while pursuing accessibility, equity and soulfulness in the
              digital world.
            </p>
          </div>
        </div>
        <div className="invisible collapse lg:visible lg:ml-32">
          <h2>some info</h2>
        </div>
      </div>
    </>
  );
}
