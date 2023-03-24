import React from 'react';

export default function ContactForm() {
  return (
    <div
      className="snap-center flex flex-col h-screen overflow-hidden"
      name="contact"
    >
      <div className="flex flex-col md:flex-row justify-center md:space-y-0 space-y-4 h-screen w-screen content-center items-center">
        <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8 h-3/5 max-w-10/12 pb-8">
          <div className="text-charcoal flex flex-col text-center">
            <div className="mb-4 flex flex-col items-center">
              <img
                src="../assets/sunflower-pc.jpg"
                width="150"
                alt="profile pic with sunflower"
              />
              <h1 className="mb-2 text-2xl text-charcoal">Let's connect!</h1>
            </div>

            <div className="mb-4 text-lg">
              <button
                className="rounded-3xl border-none bg-opacity-50 px-6 py-2 text-center shadow-lg outline-none backdrop-blur-md hover:bg-blue"
                name="name"
              >
                <a
                  href="https://www.linkedin.com/in/mira-kinebuchi/"
                  target="_blank"
                  className="text-charcoal"
                >
                  LinkedIn
                </a>
              </button>
            </div>
            <div className="mb-4 text-lg">
              <button
                className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center shadow-lg outline-none backdrop-blur-md hover:bg-blue"
                name="name"
              >
                <a
                  href="https://github.com/mira-kine"
                  target="_blank"
                  className="text-gray-900 hover:text-gray-500"
                >
                  GitHub
                </a>
              </button>
            </div>
            <div className="mb-4 text-lg">
              <button
                className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center shadow-lg outline-none backdrop-blur-md hover:bg-blue"
                name="name"
              >
                <a
                  href="https://www.twitter.com/mirakine_"
                  target="_blank"
                  className="text-gray-900 hover:text-gray-500"
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
