import React from 'react';

export default function Projects() {
  return (
    <>
      <div className="flex flex-wrap flex-col justify-center align-center items-center h-full w-7/8 md:flex-row mt-28 pt-12">
        <div
          aria-label="name-container"
          className="flex flex-col justify-center py-8 px-2 sm:px-4 md:px-8 w-7/8 h-1/3 sm:text-center"
        >
          <p className="text-3xl sm:text-5xl lg:text-7xl text-charcoal bg-white py-10 px-2 sm:px-4 md:px-8 rounded-lg font-handwrite">
            Personal Projects
          </p>
        </div>
        <div className="flex flex-wrap flex-col justify-center align-center items-center h-full w-full md:flex-row gap-x-6">
          <div className="max-w-sm min-h-sm bg-white border-4 border-pink/50 rounded-lg shadow h-1/4 mx-10 my-12 bg-charcoal">
            <img
              className="rounded-t-lg"
              src="/assets/tomoiru-web.png"
              alt="tomoiru web home page"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-pink font-garamond">
                Tomoiru-web
              </h5>
              <p className="mb-3 font-normal text-charcoal dark:text-white font-garamond max-w-prose">
                A fun way for friends to receive recommendations for what to do
                and eat in Japan with an interface we all love.
              </p>
              <div className="flex justify-start gap-x-5">
                <a
                  href="https://tomoiru-web.vercel.app/"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-matcha bg-cyan font-garamond"
                >
                  Demo
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://github.com/mira-kine/tomoiru-web"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-matcha bg-cyan font-garamond"
                >
                  GitHub
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-sm min-h-sm bg-white border-4 border-pink/50 rounded-lg shadow h-1/4 mx-10 my-12 bg-charcoal">
            <img
              className="rounded-t-lg"
              src="/assets/shop-ade.png"
              alt="shop-ade title page"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-charcoal dark:text-pink font-garamond">
                Shop-Ade
              </h5>
              <p className="mb-3 font-normal text-charcoal dark:text-white font-garamond">
                A retro arcade themed smart shopping list app that learns and
                predicts your buying habits for an easier shoppers experience!
              </p>
              <div className="flex justify-start gap-x-5">
                <a
                  href="https://tcl-45-smart-shopping-list.firebaseapp.com/"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-matcha bg-cyan font-garamond"
                >
                  Demo
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://github.com/the-collab-lab/tcl-45-smart-shopping-list"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-matcha bg-cyan font-garamond"
                >
                  GitHub
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-sm min-h-sm bg-white border-4 border-pink/50 rounded-lg shadow h-1/4 mx-10 my-12 bg-charcoal">
            <img
              className="rounded-t-lg"
              src="/assets/huu.png"
              alt="hack for LA home unites us web home page"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-charcoal dark:text-pink font-garamond">
                Home Unites Us
              </h5>
              <p className="mb-3 font-normal text-charcoal dark:text-white font-garamond">
                Open source project developing a web platform designed to
                support and scale the host homes initiative in Los Angeles, CA.
              </p>
              <div className="flex justify-start gap-x-5">
                <a
                  href="https://dev.homeunite.us/"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-matcha bg-cyan font-garamond"
                >
                  Demo
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://github.com/hackforla/HomeUniteUs"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-matcha bg-cyan font-garamond"
                >
                  GitHub
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
