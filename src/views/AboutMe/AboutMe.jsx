import React from 'react';

export default function AboutMe() {
  return (
    <>
      <div
        className="snap-center flex scroll-mt-0.5 h-full w-screen md:justify-start items-center align-center pb-12 mb-28 md:ml-20"
        name="about-me"
      >
        <div className="relative flex flex-col items-center justify-center w-full rounded-lg md:flex-row md:max-w-3xl bg-white/40 text-charcoal">
          <img
            className="object-contain w-1/2 rounded-full h-1/2 mx-8 my-8 md:h-auto md:my-0 md:w-48"
            src="/assets/sunflower-pc.jpg"
            alt="headshot of mira"
          />
          <div className="flex flex-col p-4 leading-relaxed bg-charcoal w-5/6">
            <p className="mb-2 pb-10 text-4xl md:text-5xl font-bold text-white font-garamond leading-relaxed">
              My name is Mira -
            </p>

            <p className="mb-3 text-white text-xl lg:text-2xl font-garamond leading-relaxed">
              I am a full stack software developer who cares about people and
              their stories. I am working to curate an accessible, equitable and
              soulful digital world. I also love creating and learning new
              things - my personal projects employ a calm, user-friendly
              interface, and my aesthetics are influenced by my Japanese-Korean
              roots.
            </p>
          </div>
        </div>
        <div className="invisible collapse lg:visible lg:ml-32">
          {/* <span>
            <p>
              Languages: JavaScript, HTML, CSS, Python, Dart Libraries &
              Frameworks: React, Redux, Node.js, Tailwind CSS, jQuery, Express,
              Flutter Testing: TDD, Jest, QUnit, Snapshot, Supertest Databases:
              PostgreSQL, NoSQL, Firebase Tools: GitHub, VSCode, Heroku,
              Netlify, Postman, Miro, Photoshop, Procreate, Canva, Beekeeper,
              Pipedream In Progress: Typescript, Storybook
            </p>
          </span> */}
        </div>
      </div>
    </>
  );
}
