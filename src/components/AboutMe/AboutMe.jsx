import React from 'react';

export default function AboutMe() {
  return (
    <div class="h-screen container mx-auto py-9 md:py-12 lg:py-24 overflow-hidden">
      <div class="flex flex-col lg:flex-row justify-center items-center mx-4">
        <div class="lg:w-4/12 flex justify-center items-center">
          <div>
            <h1 class="dark:text-white text-4xl md:text-5xl xl:text-6xl font-semibold text-charcoal w-7/12">
              About Me
            </h1>
            <p class="dark:text-gray-300 md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal text-charcoal">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using.
            </p>
          </div>
        </div>
        <div class="w-2/3 h-screen relative">
          <img
            class="h-full w-full bg-white border p-5 absolute"
            src={require('../../../public/assets/headshot_mira.jpg')}
          />
        </div>
      </div>
    </div>
  );
}
