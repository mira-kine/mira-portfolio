import React from 'react';

export default function Landing() {
  return (
    <div
      aria-label="landing-container"
      className="snap-center flex w-full h-full justify-center mt-12 pt-12 md:pt-20"
      name="home"
    >
      <div className="p-12 z-2 z-5 flex justify-end rounded-full bg-white">
        <img src="/assets/heart_wifi_icon.png" className="w-2/5 z-1" />
      </div>
    </div>
  );
}
