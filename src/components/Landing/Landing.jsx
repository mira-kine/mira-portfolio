import React from 'react';
import NavBar from '../NavBar/NavBar';

export default function Landing() {
  return (
    <div className="snap-start flex flex-col h-screen overflow-hidden">
      <NavBar />
      <div className="bg-sunflower bg-cover max-h-fit h-screen">
        <h1 className="text-9xl tracking-wide text-white">Mira Kinebuchi</h1>
        <h1 className="text-6xl tracking-wide text-white">
          Software Developer
        </h1>
      </div>
    </div>
  );
}
