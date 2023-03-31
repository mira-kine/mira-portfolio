import React from 'react';

export default function Landing() {
  return (
    <div
      aria-label="landing-container"
      className="snap-center flex flex-col w-screen h-full mb-44 md:mb-0 pt-12 md:pt-0
     md:h-screen content-center items-center justify-start md:justify-center md:pb-28"
      name="home"
    >
      <div className="p-12 z-2 absolute z-5 flex justify-center">
        {/* <h1 className="text-9xl text-white font-handwrite">Mira</h1> */}
      </div>
      <img
        src="/assets/heart_wifi_icon.png"
        className="w-full md:w-3/4 lg:w-7/12 xlg:w-5/12 z-1 "
      />
    </div>
  );
}
