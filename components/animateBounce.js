import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const variants = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: 300, opacity: 0 },
};

export default function AnimateBounce({ className, children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
