import React from 'react';

export default function ContactForm() {
  return (
    <div
      className="flex flex-col h-screen overflow-hidden bg-light"
      name="contact"
    >
      <div className="flex flex-col tablet:flex-row justify-center tablet:space-y-0 space-y-4 h-full w-full content-center items-center">
        <div className="rounded-xl bg-accent1 px-16 pt-10 pb-12 shadow-2xl backdrop-blur-tablet h-3/5 max-w-10/12 border border-primary border-8">
          <div className="text-dark flex flex-col text-center">
            <div className="mb-4 flex flex-col items-center">
              <img
                src="../assets/sunflower-pc.jpg"
                width="150"
                alt="profile pic with sunflower"
              />
              <h1 className="m-2 text-3xl text-dark font-title">
                Let's connect!
              </h1>
            </div>

            <div className="mb-4 text-lg">
              <button
                className="rounded-3xl border-none bg-cyan px-6 py-2 text-center shadow-lg outline-none backdrop-blur-tablet hover:bg-primary_light"
                name="name"
              >
                <a
                  href="https://www.linkedin.com/in/mira-kinebuchi/"
                  target="_blank"
                  className="text-white font-sans text-2xl"
                >
                  LinkedIn
                </a>
              </button>
            </div>
            <div className="mb-4 text-lg">
              <button
                className="rounded-3xl border-none bg-cyan px-6 py-2 text-center shadow-lg outline-none backdrop-blur-md hover:bg-primary_light"
                name="name"
              >
                <a
                  href="https://github.com/mira-kine"
                  target="_blank"
                  className="text-white font-sans text-2xl"
                >
                  GitHub
                </a>
              </button>
            </div>
            <div className="mb-4 text-lg">
              <button
                className="rounded-3xl border-none bg-cyan px-6 py-2 text-center shadow-lg outline-none backdrop-blur-md hover:bg-primary_light"
                name="name"
              >
                <a
                  href="https://www.twitter.com/mirakine_"
                  target="_blank"
                  className="text-white font-sans text-2xl"
                >
                  Twitter
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
