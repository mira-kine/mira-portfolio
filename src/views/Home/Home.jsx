import React from 'react';
import AboutMe from '../../components/AboutMe/AboutMe';
import ProjectSummary from '../../components/ProjectSummary/ProjectSummary';

export default function Home() {
  return (
    <div>
      <div>
        <h1 className="text-black">
          <AboutMe />
          <ProjectSummary />
        </h1>
      </div>
    </div>
  );
}
