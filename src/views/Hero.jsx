import React from 'react';

export default function Hero() {
  return (
    <>
      <div className="flex h-full w-full" name="about-me">
        <div className="h-full w-screen">
          <img
            className="w-full"
            src="/assets/grumpy.webp"
            alt="hero of mira kinebuchi"
          />
          {/* <div className="flex flex-col p-4 leading-relaxed bg-charcoal rounded-xl shadow-lg">
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
          </div> */}
          {/* click to learn more about my journey */}
        </div>
      </div>
    </>
  );
}
