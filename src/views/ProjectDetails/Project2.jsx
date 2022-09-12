import React from 'react';
import NavBar from '../../components/NavBar/NavBar';

export default function Project2() {
  return (
    <div class="overflow-hidden">
      <NavBar />
      <div class="flex h-screen items-center justify-center bg-indigo-50 px-4">
        <div class="max-w-2xl overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
          <h1 class="text-center text-3xl md:text-4xl lg:text-5xl">
            GoodJob.dev
          </h1>
          <img
            src={require('../../../public/assets/goodjob-gif.gif')}
            alt="goodjob dev gif"
            class="h-full w-full"
          />
          <div class="p-5">
            <p class="text-medium mb-5 text-gray-700">
              GoodJob.dev is an app that allows the user to organize and track
              their job applications with a welcoming and user-friendly UI. It
              is a central location to help the user throughout the job
              application process by allowing them to add, edit, delete
              applications, keep track of interview questions, and upload their
              resume to quickly reference.
            </p>
            <button class="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
