import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <div
      aria-label="timeline-container"
      className="flex flex-row h-screen w-screen snap-center"
      name="projects"
    >
      <div
        aria-label="left-screen-container"
        className="flex flex-col py-5 px-5 w-3/5 align-center justify-center
        border-r-2"
      >
        <div aria-label="left-text-container" className=" px-5 m-3">
          <p>
            Here are my projects! Click on the image to see a deployed version
            of my app. More to come :)
          </p>
        </div>
      </div>
      <ol class="items-center sm:flex overflow-scroll overflow-x-scroll m-6">
        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-800 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div class="mt-3 sm:pr-8">
            <a href="https://tomoiru-web.netlify.app/">
              <img src="../assets/tomo1.png" className="sm:flex" />
            </a>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-black">
              Tomoiru-Web
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2023
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Fun way for users to receive recommendations for what to do/eat in
              Japan with an interface we all love.
            </p>
          </div>
        </li>
        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-800 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div class="mt-3 sm:pr-8">
            <a href="https://tcl-45-smart-shopping-list.firebaseapp.com/">
              <img src="../assets/shop-ade.jpg" className="sm:flex" />
            </a>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-black">
              ShopAde
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2022
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              A retro arcade Pacman themed smart shopping list app that learns
              your buying habits and predicts the next time you may buy items.
            </p>
          </div>
        </li>
        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-800 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div class="mt-3 sm:pr-8">
            <a href="https://goodjob.dev/">
              <img src="../assets/goodjob-ss.png" className="sm:flex" />
            </a>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-black">
              GoodJob
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2022
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              An app that supports software developers in organizing their job
              application process.
            </p>
          </div>
        </li>
        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-800 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div class="mt-3 sm:pr-8">
            <a href="alchemyyearbook.netlify.app/">
              <img src="../assets/yearbook.png" className="sm:flex" />
            </a>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-black">
              Yearbook App
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2022
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              An app that bridges the gap in alumni networking for Alchemy
              students
            </p>
          </div>
        </li>
        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-800 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div class="mt-3 sm:pr-8">
            <a href="https://unspokenstories.netlify.app/">
              <img src="../assets/unspoken.jpg" className="sm:flex" />
            </a>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-black">
              Unspoken
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2021
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              A place to write your stories, memories or unspoken words while
              listening to lofi beats. Sometimes all you need is to write it
              out.
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
}
