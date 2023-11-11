import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Journey from '../components/Journey';

export default function Landing() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="text-black font-title text-4xl p-4">
        My Journey in a nutshell:
      </div>
      <motion.div className="flex flex-col justify-center items-center">
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
      </motion.div>
    </div>
  );
}
