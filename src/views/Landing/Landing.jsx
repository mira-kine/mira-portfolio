import React from 'react';

export default function Landing() {
  return (
    // <div
    //   aria-label="landing-container"
    //   className="flex justify-center snap-center w-full mt-12 pt-12 md:pt-20"
    //   name="home"
    // >
    //   <div className="p-12 flex flex-col rounded-full border-white border-4 w-3/4">
    //     <span className="font-handwrite text-1xl sm:text-4xl md:text-6xl w-full flex justify-center">
    //       Current tech stack and tools
    //     </span>
    //     <div className="flex justify-evenly mt-10 items-center">
    //       <div className="border p-28">
    //         <span>
    //           <p className="font-garamond text-2xl">React</p>
    //         </span>
    //       </div>
    //       <img
    //         src="/assets/heart_wifi_icon.png"
    //         className="w-2/5 z-1 justify-end flex"
    //       />
    //     </div>
    //   </div>
    // </div>
    <>
      <div
        className="snap-center flex flex-col font-handwrite text-2xl md:text-4xl lg:text-6xl md:h-full w-7/8 lg:justify-start items-center align-center lg:mt-12 mx-12"
        name="about-me"
      >
        <span className="bg-white p-12 rounded-lg">Current tech stack</span>
        <div className="flex items-center justify-center w-full rounded-lg text-charcoal">
          <div className="flex flex-col">
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
          {/* <div className="flex flex-col p-4 leading-relaxed bg-charcoal">
            <p className="pb-2 mb-2 text-3xl md:text-3xl font-bold text-white font-handwrite leading-relaxed">
              Current tech stack:
            </p>
          </div>
          <div className="flex flex-col p-4 leading-relaxed bg-charcoal">
            <p className="pb-2 mb-2 text-3xl md:text-3xl font-bold text-white font-handwrite leading-relaxed">
              Current tech stack:
            </p>
          </div>
          <div className="flex flex-col p-4 leading-relaxed bg-charcoal">
            <p className="pb-2 mb-2 text-3xl md:text-3xl font-bold text-white font-handwrite leading-relaxed">
              Current tech stack:
            </p>
          </div> */}
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
