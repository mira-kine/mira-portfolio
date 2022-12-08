import React from 'react';

export default function Projects() {
  return (
    <div
      aria-label="main-container"
      className="snap-center flex h-screen w-screen"
    >
      <div
        aria-label="left-screen-container"
        className="flex flex-col py-5 px-5 w-2/5 border border-solid border-charcoal border-2
        "
      >
        <div
          aria-label="left-text-container"
          className="border border-solid border-charcoal border-2"
        >
          <p>
            I am a full stack software developer who cares about people and
            their stories. My background in mental health & biopsychology helps
            me stay grounded in human connection and user experience while
            pursuing accessibility, equity and soulfulness in the digital world.
          </p>
        </div>
      </div>
      <div
        aria-label="right-screen-container"
        className="flex py-5 px-5 bg-pink w-3/5 border border-solid border-charcoal border-2"
      >
        <div
          aria-label="right-timeline-container"
          className="border border-solid border-charcoal border-2 h-1/4 md:min-w-fit w-full"
        >
          Right container for projects timeline
        </div>
      </div>
    </div>
  );
}
