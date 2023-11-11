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
      duration: 1.75,
      delay: 0.25,
    },
  },
};

export default function Journey() {
  return (
    <div>
      <FadeInView variants={variants} animateProps={('hidden', 'visible')}>
        <p>
          As many others, I thought I'd become a doctor. So I majored in
          Biopsychology, Cognition and Neuroscience
        </p>
      </FadeInView>
      <FadeInView variants={variants} animateProps={('hidden', 'visible')}>
        <p>Childhood in Japan</p>
      </FadeInView>
    </div>
  );
}
