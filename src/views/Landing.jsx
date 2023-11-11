import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Journey from '../components/Journey';

const variants = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
};

export default function Landing() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="text-black font-title text-4xl p-4">
        My Journey in a nutshell:
      </div>
      <div className="flex flex-col justify-center items-center m-4">
        <motion.div animate={isOpen ? 'open' : 'close'} variants={variants}>
          <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
            {isOpen ? (
              <>
                <img src="./assets/open_nutshell.png" alt="open walnut shell" />
                <Journey />
              </>
            ) : (
              <>
                <img
                  src="./assets/closed_nutshell.png"
                  alt="closed walnut shell"
                />
                <span className="p-8">Hint: click the nutshell!</span>
              </>
            )}
          </button>
        </motion.div>
      </div>
    </div>
  );
}
