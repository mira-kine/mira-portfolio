import React from 'react';
import AboutMe from '../../components/AboutMe/AboutMe';
import Landing from '../../components/Landing/Landing';
import ProjectSummary from '../../components/ProjectSummary/ProjectSummary';

export default function Home() {
  return (
    <div>
      <Landing />
      <AboutMe />
      <ProjectSummary />
    </div>
  );
}
