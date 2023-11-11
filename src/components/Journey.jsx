import React from 'react';
import FadeInView from './FadeInView';

const variants = {
  hidden: {
    opacity: 0,
    y: 75,
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

export default function Journey() {
  return (
    <>
      <FadeInView variants={variants}>
        <p>Biopsychology</p>
      </FadeInView>
      <FadeInView variants={variants}>
        <p>Childhood in Japan</p>
      </FadeInView>
    </>
  );
}
