import React from 'react';
import FadeInView from '../components/FadeInView';

const variants = {
  hidden: {
    opacity: 0,
    y: 75,
    padding: '2rem'
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      delay: 0.5,
    },
  },
};

export default function AboutMe() {
  return (
    <div className="bg-light flex flex-col laptop:flex-row w-full h-full py-12 justify-center">
      <FadeInView variants={variants} className="w-full h-1/3 flex flex-col justify-end py-2 laptop:px-8 tablet:ml-4 tablet:border">
        <h2 className="font-title text-7xl tablet:text-8xl laptop:text-9xl px-4 text-dark">
          My name is Mira-
        </h2>
      </FadeInView>
      <FadeInView variants={variants} className="flex flex-col justify-center items-center bg-secondary p-8">
        <p className="font-sans text-lg tablet:text-2xl">
          and I am a full stack software developer who cares about people and
          their stories. I want to help curate an accessible, equitable and
          soulful digital world, one where the people I care about are not left
          behind. My focus is on delivering a calm, user-friendly interface with
          a well organized backend and my aesthetics are influenced by my
          Japanese-Korean roots. Hopes are that you find yourself feeling
          hopeful, joyful, and/or calmer after working with me or with my
          products.
        </p>
      </FadeInView>
    </div>
  );
}
