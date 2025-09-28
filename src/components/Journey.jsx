import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const journeyItems = [
  'Biopsychology Cognition Neuroscience major',
  'Mental health counselor',
  'TEFL teacher',
  'Software Engineer',
];

const redCarpetVariants = {
  hidden: { 
    scaleY: 0,
    originY: 0
  },
  visible: { 
    scaleY: 1,
    transition: { 
      duration: 1.2, 
      ease: "easeOut" 
    }
  }
};

const journeyItemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.8
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 1.2 // Wait for carpet to roll out
    }
  }
};

export default function Journey({ onImageClick, isTriggered }) {
  return (
    <AnimatePresence>
      {isTriggered && (
        <motion.div 
          className="absolute top-0 left-0 right-0 z-20 flex items-end justify-center pointer-events-none"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Red Carpet Roll Out */}
          <motion.div
            variants={redCarpetVariants}
            className="relative w-72 sm:w-80 md:w-96 h-96 sm:h-[500px] md:h-[600px] bg-gradient-to-t from-red-800 via-red-600 to-red-700 shadow-2xl border-l-4 border-r-4 border-t-2 border-red-900 rounded-t-lg"
          >
            {/* Carpet Tassels */}
            <div className="absolute -top-2 left-0 right-0 h-4 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 rounded-sm"></div>
            
            {/* Journey Items Container */}
            <motion.div
              variants={containerVariants}
              className="absolute inset-0 flex flex-col justify-end p-8 space-y-6"
            >
              {journeyItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={journeyItemVariants}
                  className="relative"
                >
                  {/* Journey Card */}
                  <div className="bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200 
                                 border-2 border-amber-400 rounded-lg p-4 
                                 shadow-2xl transform rotate-1 hover:rotate-0
                                 transition-transform duration-300
                                 text-center font-medium text-amber-900
                                 relative overflow-hidden">
                    {/* Gold sparkle effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 via-transparent to-transparent opacity-30"></div>
                    
                    <div className="relative z-10">
                      {item}
                    </div>
                    
                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg border-2 border-yellow-300">
                      {index + 1}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Click to close */}
            <motion.button
              onClick={onImageClick}
              className="absolute top-4 right-4 bg-red-800 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-red-700 transition-colors pointer-events-auto"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
