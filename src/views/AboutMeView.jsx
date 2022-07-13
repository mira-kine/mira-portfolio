import React from 'react';
import NavBar from '../components/NavBar/NavBar';

export default function AboutMeView() {
  return (
    <div className="snap-start flex flex-col h-screen w-screen overflow-hidden">
      <NavBar />
      <div class="container min-w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 justify-center items-start">
          <img
            class="h-screen bg-white border p-5"
            src={require('../../public/assets/temp-sky.jpg')}
          />
          <div class="mt-10">
            <div class="flex justify-center ">
              <img
                class="h-52 rounded-full mb-4"
                src={require('../../public/assets/headshot_mira.jpg')}
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
