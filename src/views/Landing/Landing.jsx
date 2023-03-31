import React from 'react';

export default function Landing() {
  return (
    <div
      aria-label="landing-container"
      className="snap-center flex flex-col w-screen content-center items-center justify-center self-center pb-12"
      name="home"
    >
      <div className="p-12 z-2 absolute z-5 w-full flex justify-center">
        {/* <h1 className="text-9xl text-white font-handwrite">Mira</h1> */}
      </div>
      <img
        src="/assets/heart_wifi_icon.png"
        className="w-full md:w-5/6 lg:w-1/2 xlg:w-1/4 z-1"
      />
    </div>
  );
}
