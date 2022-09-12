import React from 'react';
import NavBar from '../NavBar/NavBar';

export default function Landing() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <NavBar />
      <div class="bg-white h-full">
        {/* add cute hellow gif here */}
        <div class="bg-sunflower bg-local bg-no-repeat bg-cover h-full w-full max-w-4xl">
          <h1 className="text-9xl tracking-wide text-white">Mira Kinebuchi</h1>
          <h1 className="text-6xl tracking-wide text-white">
            Software Developer
          </h1>
        </div>
      </div>
    </div>
  );
}
