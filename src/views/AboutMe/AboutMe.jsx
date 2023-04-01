import React from 'react';

export default function AboutMe() {
  return (
    <>
      <div
        className="snap-center flex h-screen md:h-full w-7/8 lg:justify-start items-center align-center md:py-12 lg:py-28 lg:mt-12 mx-12"
        name="about-me"
      >
        <div className="relative flex flex-col items-center justify-center w-full rounded-lg lg:flex-row text-charcoal">
          <img
            className="object-contain w-7/12 sm:w-6/12 md:w-4/12 rounded-full mx-8 my-8 lg:my-0 bg-matcha/40"
            src="/assets/mookie.png"
            alt="mira mookie logo"
          />
          <div className="flex flex-col p-4 leading-relaxed bg-charcoal">
            <p className="pb-2 mb-2 text-3xl md:text-5xl font-bold text-white font-garamond leading-relaxed">
              My name is Mira -
            </p>

            <p className="mb-3 text-white text-xl lg:text-2xl lg:max-w-3xl font-garamond leading-relaxed max-w-prose">
              I am a full stack software developer who cares about people and
              their stories. I am working to curate an accessible, equitable and
              soulful digital world. I also love creating and learning new
              things - my personal projects employ a calm, user-friendly
              interface, and my aesthetics are influenced by my Japanese-Korean
              roots.
            </p>
          </div>
          {/* click to learn more about my journey */}
        </div>
      </div>
    </>
  );
}
