import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
  

export default function FadeInView({children, variants}) {
    const ref = useRef(null);
  // only run animation once
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    // if in view, fire animation
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);
    
  return (
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.5, delay: 0.5 }}>
          {children}
      </motion.div>
  )
}
