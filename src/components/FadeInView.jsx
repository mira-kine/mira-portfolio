import React from 'react';
import { motion } from 'framer-motion';
import { useInViewAnimation, fadeInVariants } from '../hooks/useInViewAnimation';

export default function FadeInView({ 
  children, 
  variants = fadeInVariants, 
  animateProps,
  threshold = 0.1,
  once = true 
}) {
  const { ref, controls } = useInViewAnimation({ threshold, once });
    
  return (
    <div ref={ref}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={animateProps || controls}
      >
        {children}
      </motion.div>
    </div>
  );
}
