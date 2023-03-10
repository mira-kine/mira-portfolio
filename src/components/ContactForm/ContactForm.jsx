import React from 'react';

export default function ContactForm() {
  return (
    <div className="bg-tempsky flex flex-col md:flex-row justify-center md:space-y-0 space-y-4 h-screen w-screen content-center items-center">
      <div class="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8 h-3/5 max-w-10/12 pb-8">
        <div class="text-white flex flex-col text-center">
          <div class="mb-4 flex flex-col items-center">
            <img
              src="../assets/sunflower-pc.jpg"
              width="150"
              alt=""
              srcset=""
            />
            <h1 class="mb-2 text-2xl">Let's connect!</h1>
          </div>

          <div class="mb-4 text-lg">
            <button
              class="rounded-3xl border-none bg-opacity-50 px-6 py-2 text-center shadow-lg outline-none backdrop-blur-md hover:bg-charcoal-500"
              name="name"
            >
              <a
                href="https://www.linkedin.com/in/mira-kinebuchi/"
                target="_blank"
                className="text-gray-900"
              >
                LinkedIn
              </a>
            </button>
          </div>
          <div class="mb-4 text-lg">
            <button
              class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center shadow-lg outline-none backdrop-blur-md"
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
          <div class="mb-4 text-lg">
            <button
              class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center shadow-lg outline-none backdrop-blur-md"
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
  );
}
