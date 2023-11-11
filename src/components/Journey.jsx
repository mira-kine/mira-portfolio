import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export default function Journey() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    // if in view, fire animation
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  // animation contrtols
  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 75,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 2,
              delay: 0.5,
            },
          },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 2, delay: 0.5 }}
        className="h-72 p-12"
      >
        <p>Biopsychology</p>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 2, delay: 0.5 }}
        className="h-72 p-12"
      >
        <p>Childhood in Japan</p>
      </motion.div>
    </>
  );
}
