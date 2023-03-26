import React from 'react';

export default function AboutMe() {
  return (
    <>
      <div
        data-te-animation-init
        data-te-animation-start="onScroll"
        data-te-animation-on-scroll="repeat"
        data-te-animation-reset="true"
        data-te-animation="[slide-right_1s_ease-in-out]"
        className="snap-center flex scroll-mt-0.5 h-full w-screen justify-center items-center align-center py-12 my-12"
        name="about-me"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-pink rounded-lg blur"></div>
          <div className="relative flex flex-col items-center bg-white w-full rounded-lg md:flex-row md:max-w-2xl dark:bg-charcoal dark:text-white">
            <img
              className="object-contain w-1/2 rounded-full h-1/2 mx-8 my-8 md:h-auto md:my-0 md:w-48 border border-2 border-solid border-violet"
              src="/assets/sunflower-pc.jpg"
              alt="headshot of mira"
            />
            <div className="flex flex-col justify-between p-4 leading-normal bg-charcoal md:bg-charcoal/0">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-pink dark:text-pink">
                My name is Mira -
              </h5>
              <p className="mb-3 text-charcoal-700 dark:text-white text-xl lg:text-2xl">
                I am a full stack software developer who cares about people and
                their stories. I am working to curate an accessible, equitable
                and soulful digital world. I also love creating and learning new
                things - my personal projects employ a calm, user-friendly
                interface, and my aesthetics are influenced by my
                Japanese-Korean roots.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="invisible collapse lg:visible lg:ml-32">
          <h2>My tech stack includes:</h2>
          <span>
            <p>
              Languages: JavaScript, HTML, CSS, Python, Dart Libraries &
              Frameworks: React, Redux, Node.js, Tailwind CSS, jQuery, Express,
              Flutter Testing: TDD, Jest, QUnit, Snapshot, Supertest Databases:
              PostgreSQL, NoSQL, Firebase Tools: GitHub, VSCode, Heroku,
              Netlify, Postman, Miro, Photoshop, Procreate, Canva, Beekeeper,
              Pipedream In Progress: Typescript, Storybook
            </p>
          </span>
        </div> */}
      </div>
    </>
  );
}
