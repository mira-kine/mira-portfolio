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
      duration: 1.5,
      delay: 0.5,
    },
  },
};

export default function Landing() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="text-black font-title text-4xl p-4">
        My Journey in a nutshell:
      </div>
      <div
        variants={variants}
        className="flex flex-col justify-center items-center"
      >
        {isOpen ? (
          <>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
              <img src="./assets/open_nutshell.png" alt="open walnut shell" />
            </motion.button>
            <Journey />
          </>
        ) : (
          <>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
              <img
                src="./assets/closed_nutshell.png"
                alt="closed walnut shell"
              />
            </motion.button>
            <span className="p-8">Hint: click the nutshell!</span>
          </>
        )}
      </div>
    </div>
  );
}
