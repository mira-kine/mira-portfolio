import React from 'react';
import AboutMe from '../../components/AboutMe/AboutMe';
// import Landing from '../../components/Landing/Landing';
import ProjectSummary from '../../components/ProjectSummary/ProjectSummary';

export default function Home() {
  return (
    <div>
      <div class="flex-col bg-landing-image max-h-1000 justify-center items-center p-8 my-10 bg-cover">
        <h1 class="text-9xl tracking-wide text-white">Mira Kinebuchi</h1>
        <h1 class="text-6xl tracking-wide text-white">Software Developer</h1>
        {/* <div class="snap-center">
        <Landing />
      </div> */}
      </div>
    </div>
  );
}
