import React from 'react';

export default function AboutMe() {
  return (
    <div className="snap-start flex flex-col h-screen w-screen overflow-hidden">
      <div class="container min-w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 justify-center items-start">
          <img
            class="h-screen"
            src={require('../../../public/assets/temp-sky.jpg')}
          />
          <div class="mt-10">
            <div class="flex justify-center">
              <img
                class="h-52 rounded-full mb-4"
                src={require('../../../public/assets/headshot_mira.jpg')}
              />
            </div>
            <blockquote>
              <p class="animate-fade-in-down mx-12 mb-9 text-center text-sm">
                Hi! My name is Mira and I'm a full-stack software engineer.
                Insert more About Me.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
