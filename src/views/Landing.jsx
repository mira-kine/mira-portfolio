import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Journey from '../components/Journey';
import FadeInView from '../components/FadeInView';

const variants = {
  hidden: {
    opacity: 0,
    y: 75,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.25,
      delay: 0.75,
    },
  },
};

export default function Landing() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center p-8">
      <FadeInView variants={variants} animateProps={('hidden', 'visible')}>
        <p className="text-black font-title text-4xl p-4 text-center">
          My Journey in a nutshell:{' '}
        </p>
      </FadeInView>
      <div
        variants={variants}
        className="flex flex-col justify-center items-center w-full"
      >
        <motion.button
          whileHover={!isOpen ? { scale: 1.1 } : {}}
          whileTap={!isOpen ? { scale: 0.9 } : {}}
          onClick={() => setIsOpen(true)}
          aria-label="Reveal my career journey"
          className="relative"
        >
          <img
            src={
              isOpen
                ? './assets/open_nutshell.png'
                : './assets/closed_nutshell.png'
            }
            alt={isOpen ? 'open walnut shell' : 'closed walnut shell'}
          />
        </motion.button>
        {!isOpen && <span className="p-8">Hint: click the nutshell!</span>}

        <Journey isTriggered={isOpen} />
      </div>
    </div>
  );
}
