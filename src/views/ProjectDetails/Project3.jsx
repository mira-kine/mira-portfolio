import React from 'react';
import NavBar from '../../components/NavBar/NavBar';

export default function Project2() {
  return (
    <div class="overflow-hidden">
      <NavBar />
      <div class="flex h-screen items-center justify-center bg-indigo-50 px-4">
        <div class="max-w-2xl overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
          <h1 class="text-center text-3xl md:text-4xl lg:text-5xl">
            Yearbook App
          </h1>
          <img
            src={require('../../../public/assets/yearbook.png')}
            alt="yearbook app png"
            class="h-full w-full"
          />
          <div class="p-5">
            <p class="text-medium mb-5 text-gray-700">
              Alchemy Yearbook app was an original app idea that was created to
              bring together students and alumni. Alumni are able to sign in
              using GitHub OAuth and CRUD their profile for other alumni and
              current students to connect with.
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
