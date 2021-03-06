import React from 'react';
import NavBar from '../components/NavBar/NavBar';

export default function AboutMeView() {
  return (
    <div className="snap-start flex flex-col h-screen w-screen overflow-hidden bg-slate">
      <NavBar />
      {/* <div class="container min-w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 justify-center items-start">
          <img
            class="h-screen bg-white border p-5"
            src={require('../../public/assets/temp-sky.jpg')}
          />
          <div class="mt-10">
            <div class="flex justify-center ">
              <img
                class="h-52 rounded-full mb-4"
                src={require('../../public/assets/headshot_mira.jpg')}
              />
            </div>
            <blockquote>
              <p class="animate-fade-in-down mx-12 mb-9 text-center text-sm">
                Hi! My name is Mira and I'm a full-stack software engineer.
                Insert more About Me.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
 */}

      <div class="container mx-auto py-9 md:py-12 lg:py-24">
        <div class="flex flex-col lg:flex-row justify-center items-strech mx-4">
          <div class="lg:w-4/12 flex justify-center items-center">
            <div>
              <h1 class="dark:text-white text-4xl md:text-5xl xl:text-6xl font-semibold text-gray-900 w-7/12">
                Amoire
              </h1>
              <p class="dark:text-gray-300 md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal text-gray-600">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using.
              </p>
            </div>
          </div>
          <div class="lg:w-8/12 mt-6 md:mt-8 lg:mt-0">
            <div class="relative w-full h-full">
              <img
                class="h-screen bg-white border p-5"
                src={require('../../public/assets/temp-sky.jpg')}
              />
              <div class="hidden lg:block absolute bottom-0 right-0 bg-red-200 w-1/2">
                <button class="dark:hover:bg-gray-800 dark:bg-white dark:hover:text-gray-50 dark:text-gray-800 bg-gray-800 text-xl xl:text-2xl font-medium text-white flex justify-between w-full items-center p-5 xl:p-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">
                  Discover More
                  <div>
                    <svg
                      class="fill-stroke dark:hover:text-gray-600"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.66663 16H25.3333"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20 21.3333L25.3333 16"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20 10.667L25.3333 16.0003"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div class="mt-6 md:mt-8 lg:hidden">
              <button class="dark:hover:bg-gray-800 dark:bg-white dark:hover:text-gray-50 dark:text-gray-800 bg-gray-800 text-base md:text-xl font-semibold leading-tight text-white flex justify-between items-center px-5 py-4 lg:py-7 lg:px-7 w-full md:w-5/12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">
                Discover More
                <div>
                  <svg
                    class="fill-stroke"
                    width="22"
                    height="24"
                    viewBox="0 0 22 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M0.453735 12H14.4537"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.4539 16L14.4539 12"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.4539 8L14.4539 12"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="21.7269" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
