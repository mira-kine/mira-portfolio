import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
  
// all Fade In View will have hidden and visible props. But sometimes I want them to translate differently.
  // ... so I set a general animateProps as well
export default function FadeInView({children, variants, animateProps}) {
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
      animate={animateProps}
        >
          {children}
      </motion.div>
  )
}
