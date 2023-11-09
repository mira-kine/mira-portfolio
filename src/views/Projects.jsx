import React from 'react';
import RightArrowIcon from '../icons/RightArrowIcon';
import ProjectLink from '../styles/ProjectLink';

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
          <div className="max-w-sm min-h-[420px] bg-white border-4 border-secondary rounded-lg shadow h-1/4 mx-10 my-12">
            <img src="/assets/tomoiru-web.png" alt="tomoiru web home page" />
            <div className="p-5">
              <h5 className="mb-2 text-3xl font-bold text-dark font-title">
                Tomoiru-web
              </h5>
              <p className="text-medium font-normal text-dark font-sans max-w-prose">
                Meet Tomomi and discover a fun way to plan for and make memories
                in Japan with a friendly interface.
              </p>
              <div className="flex justify-start gap-x-4 my-4">
                <ProjectLink
                  href="https://tomoiru-web.vercel.app/"
                  title="Demo"
                >
                  <RightArrowIcon />
                </ProjectLink>

                <ProjectLink
                  href="https://github.com/mira-kine/tomoiru-web"
                  title="GitHub"
                >
                  <RightArrowIcon />
                </ProjectLink>
              </div>
            </div>
          </div>
          <div className="max-w-sm min-h-[420px] bg-white border-4 border-secondary rounded-lg shadow h-1/4 mx-10 my-12 bg-dark">
            <img src="/assets/shop-ade.png" alt="shop-ade title page" />
            <div className="p-5">
              <h5 className="mb-2 text-3xl font-bold text-dark font-title">
                Shop-Ade
              </h5>
              <p className="text-medium font-normal text-dark font-sans max-w-prose">
                A retro arcade themed smart shopping list app that learns and
                predicts your buying habits for an easier shoppers experience!
              </p>
              <div className="flex justify-start gap-x-10 my-4">
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
              </div>
            </div>
          </div>
          <div className="max-w-sm min-h-[420px] bg-white border-4 border-secondary rounded-lg shadow h-1/4 mx-10 my-12 bg-dark">
            <img
              className="rounded-t-lg"
              src="/assets/huu.png"
              alt="hack for LA home unites us web home page"
            />
            <div className="p-5">
              <h5 className="mb-2 text-3xl font-bold text-dark font-title">
                Home Unites Us
              </h5>
              <p className="text-medium font-normal text-dark font-sans max-w-prose">
                Open source project developing a web platform designed to
                support and scale the host homes initiative in Los Angeles, CA.
              </p>
              <div className="flex justify-start gap-x-10 my-4">
                <ProjectLink href="https://dev.homeunite.us/" title="Demo">
                  <RightArrowIcon />
                </ProjectLink>

                <ProjectLink
                  href="https://github.com/hackforla/HomeUniteUs"
                  title="GitHub"
                >
                  <RightArrowIcon />
                </ProjectLink>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-white p-2 rounded-lg text-xl">
          Click to see more
        </button>
      </div>
    </>
  );
}
