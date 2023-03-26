import React from 'react';

export default function Projects() {
  return (
    <>
      <div className="bg-lighterretro bg-cover bg-repeat-none flex flex-wrap flex-col justify-center align-center items-center h-full w-full md:flex-row">
        <div
          aria-label="name-container"
          className="flex flex-col justify-center py-8 px-8 z-10 w-full h-1/3 sm:text-center"
        >
          <p className="text-3xl sm:text-4xl lg:text-5xl tracking-wide text-charcoal z-20">
            Here are some of my projects:
          </p>
        </div>
        <div className="flex flex-wrap flex-col justify-center align-center items-center h-full w-full md:flex-row">
          <div className="max-w-sm bg-white border-4 border-pink/50 rounded-lg shadow dark:bg-charcoal dark:border-white/50 h-1/4 mx-10 my-12">
            <img
              className="rounded-t-lg"
              src="/assets/tomoiru-web.png"
              alt="tomoiru web home page"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-charcoal dark:text-pink">
                Tomoiru-web
              </h5>
              <p className="mb-3 font-normal text-charcoal dark:text-white">
                A fun way for friends to receive recommendations for what to do
                and eat in Japan with an interface we all love.
              </p>
              <div className="flex justify-start gap-x-5">
                <a
                  href="https://tomoiru-web.netlify.app/"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-bitter rounded-lg hover:bg-pink focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-rosy dark:hover:bg-pink dark:hover:text-charcoal dark:focus:rosy"
                >
                  Check it out
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
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-bitter rounded-lg hover:bg-pink focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet dark:hover:bg-pink dark:hover:text-charcoal dark:focus:rosy"
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
          <div className="max-w-sm bg-white border-4 border-pink/50 rounded-lg shadow dark:bg-charcoal dark:border-white/50 h-1/4 mx-12 my-12">
            <img
              className="rounded-t-lg"
              src="/assets/shop-ade.png"
              alt="shop-ade title page"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-charcoal dark:text-pink">
                Shop-Ade
              </h5>
              <p className="mb-3 font-normal text-charcoal dark:text-white">
                A retro arcade themed smart shopping list app that learns and
                predicts your buying habits for an easier shoppers experience!
              </p>
              <div className="flex justify-start gap-x-5">
                <a
                  href="https://tcl-45-smart-shopping-list.firebaseapp.com/"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-bitter rounded-lg hover:bg-pink focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-rosy dark:hover:bg-pink dark:hover:text-charcoal dark:focus:rosy"
                >
                  Check it out
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
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-bitter rounded-lg hover:bg-pink focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet dark:hover:bg-pink dark:hover:text-charcoal dark:focus:rosy"
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
          <div className="max-w-sm bg-white border-4 border-pink/50 rounded-lg shadow dark:bg-charcoal dark:border-white/50 min-h-1/4 mx-12 my-12">
            <img
              className="rounded-t-lg"
              src="/assets/goodjob.png"
              alt="goodjob.dev web home page"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-charcoal dark:text-pink">
                GoodJob.dev
              </h5>
              <p className="mb-3 font-normal text-charcoal dark:text-white">
                An app that supports early software developers in organizing
                their job application process.
              </p>
              <div className="flex justify-start gap-x-5">
                <a
                  href="https://kind-haibt-83aacb.netlify.app/"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-bitter rounded-lg hover:bg-pink focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-rosy dark:hover:bg-pink dark:hover:text-charcoal dark:focus:rosy"
                >
                  Check it out
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
                  href="https://github.com/alchemy-job-app/job-app"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-bitter rounded-lg hover:bg-pink focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet dark:hover:bg-pink dark:hover:text-charcoal dark:focus:rosy"
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
          <div className="max-w-sm bg-white border-4 border-pink/50 rounded-lg shadow dark:bg-charcoal dark:border-white/50 h-min mx-12 my-12">
            <img
              className="rounded-t-lg"
              src="/assets/unspoken.png"
              alt="unspoken web home page"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-charcoal dark:text-pink">
                Unspoken
              </h5>
              <p className="mb-3 font-normal text-charcoal dark:text-white">
                A place to write your stories, memories or unspoken words while
                listening to lofi beats. Sometimes all you need is to write it
                out.
              </p>
              <div className="flex justify-start gap-x-5">
                <a
                  href="https://unspokenstories.netlify.app/"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-bitter rounded-lg hover:bg-pink focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-rosy dark:hover:bg-pink dark:hover:text-charcoal dark:focus:rosy"
                >
                  Check it out
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
                  href="https://github.com/unspoken-project/unspoken"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-bitter rounded-lg hover:bg-pink focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet dark:hover:bg-pink dark:hover:text-charcoal dark:focus:rosy"
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
