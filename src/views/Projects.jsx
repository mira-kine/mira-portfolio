import React from 'react';
import RightArrowIcon from '../icons/RightArrowIcon';
import ProjectLink from '../styles/ProjectLink';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <>
      <div className="flex flex-wrap flex-col justify-center align-center items-center h-full w-full py-4 my-4 tablet:flex-row bg-primary_light">
        <div
          aria-label="name-container"
          className="flex flex-col justify-center pt-4 px-2 tablet:px-8 w-7/8 h-1/3"
        >
          <p className="text-4xl tablet:text-6xl text-dark py-10 px-2 rounded-lg font-title">
            Some of my work:
          </p>
        </div>
        <div className="flex flex-wrap flex-col justify-center align-center items-center h-full w-full tablet:flex-row">
          <ProjectCard
            imagePath="tomoiru-web"
            projectTitle="Tomoiru-web"
            description=" Meet Tomomi and discover a fun way to plan for and make memories
            in Japan with a friendly interface."
          >
            <ProjectLink href="https://tomoiru-web.vercel.app/" title="Demo">
              <RightArrowIcon />
            </ProjectLink>

            <ProjectLink
              href="https://github.com/mira-kine/tomoiru-web"
              title="GitHub"
            >
              <RightArrowIcon />
            </ProjectLink>
          </ProjectCard>

          <ProjectCard
            imagePath="shop-ade"
            projectTitle="Shop-Ade"
            description="A retro arcade themed smart shopping list app that learns and
            predicts your buying habits for an easier shoppers experience!"
          >
            <ProjectLink
              href="https://tcl-45-smart-shopping-list.firebaseapp.com/"
              title="Demo"
            >
              <RightArrowIcon />
            </ProjectLink>

            <ProjectLink
              href="https://github.com/the-collab-lab/tcl-45-smart-shopping-list"
              title="GitHub"
            >
              <RightArrowIcon />
            </ProjectLink>
          </ProjectCard>

          <ProjectCard
            imagePath="huu"
            projectTitle="Home Unites Us"
            description="Open source project developing a web platform designed to
            support and scale the host homes initiative in Los Angeles, CA."
          >
            <ProjectLink href="https://dev.homeunite.us/" title="Demo">
              <RightArrowIcon />
            </ProjectLink>

            <ProjectLink
              href="https://github.com/hackforla/HomeUniteUs"
              title="GitHub"
            >
              <RightArrowIcon />
            </ProjectLink>
          </ProjectCard>
        </div>
        <button className="bg-white p-2 rounded-lg text-xl">
          Click to see more
        </button>
      </div>
    </>
  );
}
