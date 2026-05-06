import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const journeyItems = [
  'Biopsychology Cognition Neuroscience major',
  'Mental health counselor',
  'TEFL teacher',
  'Software Engineer',
];

const timelineVariants = {
  hidden: {
    height: 0,
  },
  visible: {
    height: '100%',
    transition: {
      duration: 1.0,
      ease: 'easeOut',
    },
  },
};

const journeyItemVariants = {
  hidden: {
    opacity: 0,
    x: -50,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const dotVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'backOut',
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

export default function Journey({ onImageClick, isTriggered }) {
  return (
    <AnimatePresence>
      {isTriggered && (
        <motion.div
          className="relative w-full max-w-2xl mt-8 px-4 pointer-events-auto"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.button
            onClick={onImageClick}
            className="absolute -top-4 right-4 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-primary_light hover:text-dark transition-colors z-30"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            ✕
          </motion.button>

          <div className="relative pl-8 md:pl-12">
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gray-300 overflow-hidden">
              <motion.div
                variants={timelineVariants}
                className="w-full bg-gradient-to-b from-primary via-primary_light to-primary"
              />
            </div>

            <motion.div
              variants={containerVariants}
              className="space-y-8 md:space-y-12"
            >
              {journeyItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={journeyItemVariants}
                  className="relative"
                >
                  <motion.div
                    variants={dotVariants}
                    className="absolute -left-[1.35rem] md:-left-[1.85rem] top-3 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-lg z-10"
                  />

                  <div className="bg-white border-2 border-primary rounded-lg p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                    <p className="text-dark font-sans text-base md:text-lg pr-4">
                      {item}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
