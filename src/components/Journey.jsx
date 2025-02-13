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
        <p></p>
      </FadeInView>
      <FadeInView variants={variants} animateProps={('hidden', 'visible')}>
        <div className="p-12">
          <p>Biopsychology Cognition Neuroscience major</p>
          <p>Mental health counselor</p>
          <p>TEFL teacher</p>
          <p>Software Engineer</p>
        </div>
      </FadeInView>
    </div>
  );
}
