import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';

const SectionWrapper = ({ id, children, className = '' }) => {
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    return (
      <section id={id} aria-label={id} className={`py-16 md:py-24 max-w-[1200px] mx-auto px-6 ${className}`}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      aria-label={id}
      className={`py-16 md:py-24 max-w-[1200px] mx-auto px-6 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
