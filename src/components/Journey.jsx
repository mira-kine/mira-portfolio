import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const journeyItems = [
  {
    title:
      'Biopsychology, Cognition, and Neuroscience major @ University of Michigan',
    yearRange: '2014-2018',
    subtitle: 'Survived the cold of Ann Arbor',
    description:
      'I learned extensively about humans and our minds, and how it is all connected.',
  },
  {
    title: 'Mental health counselor @ Seneca Family of Agencies',
    yearRange: '2018-2021',
    subtitle: 'Crisis counseling, mental health advocacy and social work',
    description:
      'Had the opportunity of working with students who managed to stress the life out of me and then give it back ten-fold. I learned how to digest many complex problems at once while holding individual needs.',
  },
  {
    title: 'TEFL teacher and STEP Tutor',
    yearRange: '2021-2022',
    subtitle: 'Teaching English online and tutoring Title I students',
    description:
      'My counseling hours were reduced due to covid, so I got a TEFL certificate and picked up tutoring Title I students in LA. This is where I had to learn Javascript along side my students, and realized that it could be another avenue for empowering the communities that I care about... and it was fun.',
  },
  {
    title: 'Full-Stack Software Engineer',
    yearRange: '2021-2022',
    subtitle: 'Freelance + Open Source Projects',
    description:
      'After completing a 1000+ hour intensive coding bootcamp, I continued to grow my engineering skills by contributing to Hack for LA (Home Unites Us) and built websites for small artists. This gave me a good start in learning how to work within engineering teams, and how to bring websites from design to production.',
  },
  {
    title: 'Software QA @ Discover Echo',
    yearRange: '2023-2024',
    description:
      'Started by testing iOS and Windows based microscopy software (saw a tardigrade!). Developed an iOS Diagnostic Tool that captures real time system states and was promoted to Junior Software Engineer after 7 months.',
  },
  {
    title: 'Full-Stack Software Engineer @ Discover Echo',
    yearRange: '2024-Present',
    description:
      "Now I get to work across the stack on a range of projects: an end-to-end licensing system, calibration software in C++ and C#, and internal tools that support the broader team. It's taught me about how products come together, from customer pain point to production code... and much more.",
  },
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

export default function Journey({ isTriggered }) {
  return (
    <AnimatePresence>
      {isTriggered && (
        <motion.div
          className="relative w-full max-w-2xl tablet:max-w-3xl laptop:max-w-4xl mt-8 px-4 pointer-events-auto"
          aria-label="Career journey timeline"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="relative pl-8 md:pl-12 tablet:pl-32">
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gray-300 overflow-hidden">
              <motion.div
                variants={timelineVariants}
                className="w-full bg-gradient-to-b from-primary via-primary_light to-primary"
              />
            </div>

            <motion.div
              variants={containerVariants}
              className="space-y-10 tablet:space-y-12"
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

                  <motion.time
                    variants={journeyItemVariants}
                    className="block text-sm text-primary font-sans mb-2 tablet:hidden"
                  >
                    {item.yearRange}
                  </motion.time>

                  <motion.time
                    variants={journeyItemVariants}
                    className="hidden tablet:block absolute -left-28 top-3 text-sm text-primary font-sans text-right w-20"
                  >
                    {item.yearRange}
                  </motion.time>

                  <div className="bg-white border-2 border-primary rounded-xl p-6 tablet:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 relative">
                    <h3 className="text-dark font-title text-base md:text-lg font-semibold mb-2">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p className="text-dark font-sans text-xs italic mb-2">
                        {item.subtitle}
                      </p>
                    )}
                    <p className="text-sm font-normal text-black">
                      {item.description}
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
