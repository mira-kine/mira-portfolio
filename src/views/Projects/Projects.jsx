import React from 'react';

export default function Projects() {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <div class="h-screen w-screen flex justify-center items-center bg-sapphire overflow-hidden">
        <div class="grid grid-cols-6 col-span-2   gap-2  ">
          <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
            <a href="/project1">
              <img
                class="h-full w-full object-cover"
                src={require('../../../public/assets/unspoken.jpg')}
                alt=""
              />
            </a>
          </div>
          <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
            <a href="/project2">
              <img
                class="h-full w-full object-cover"
                src={require('../../../public/assets/goodjob.jpg')}
                alt=""
              />
            </a>
          </div>
          <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
            <a href="/project3">
              <img
                class="h-full w-full object-cover "
                src={require('../../../public/assets/yearbook.png')}
                alt=""
              />
            </a>
          </div>
          <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
            <img
              class="h-full w-full object-cover "
              src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
          </div>
          <div class="relative overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
            <div class="text-white text-xl absolute inset-0  bg-slate-900/80 flex justify-center items-center"></div>
            <img
              class="h-full w-full object-cover "
              src="https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
