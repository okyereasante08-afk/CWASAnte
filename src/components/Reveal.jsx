import { motion } from 'framer-motion';

// Wraps children in a fade + rise animation that triggers once when the
// element scrolls into view. Used throughout the app for section and card
// reveals on scroll, in both directions.
export default function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
  as = 'div',
  once = true,
  amount = 0.2,
}) {
  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionComponent>
  );
}
