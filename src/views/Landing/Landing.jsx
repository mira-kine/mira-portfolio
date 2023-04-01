import React from 'react';

export default function Landing() {
  return (
    <>
      <div
        className="snap-center flex flex-col font-handwrite text-2xl md:text-4xl lg:text-6xl md:h-full w-7/8 lg:justify-start items-center align-center lg:mt-12 mx-12"
        name="about-me"
      >
        <span className="text-3xl sm:text-5xl lg:text-7xl bg-white py-10 px-2 sm:px-8 md:px-12 rounded-lg">
          Current fav tech stack
        </span>
        <div className="flex flex-col md:flex-row items-center justify-center w-full rounded-lg text-charcoal">
          <div className="flex flex-col pt-12">
            <span className="font-handwrite text-3xl sm:text-4xl md:text-6xl">
              Javascript
            </span>
            <span className="font-handwrite text-3xl sm:text-4xl md:text-6xl">
              React
            </span>
            <span className="font-handwrite text-3xl sm:text-4xl md:text-6xl">
              Typescript
            </span>
          </div>
          {/* click to learn more about my journey */}
          <img
            className="object-contain w-7/12 sm:w-6/12 md:w-4/12 rounded-full mx-8 my-8 lg:my-0"
            src="/assets/heart_wifi_icon.png"
            alt="mental health tech logo"
          />
          <div className="flex flex-col">
            <span className="font-handwrite text-3xl sm:text-4xl md:text-6xl">
              Node.js
            </span>
            <span className="font-handwrite text-3xl sm:text-4xl md:text-6xl">
              Express
            </span>
            <span className="font-handwrite text-3xl sm:text-4xl md:text-6xl">
              SQL
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
