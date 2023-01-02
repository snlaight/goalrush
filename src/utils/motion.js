const commonSpringTransition = {
  type: 'spring',
  delay: 0.5,
  stiffness: 200,
  damping: 40,
};

const commonTweenTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.5,
};

export const slideRightVariants = {
  hidden: {
    opacity: 0,
    x: '-100px',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: commonSpringTransition,
  },
  exit: {
    x: '-100px',
    transition: { ease: 'easeInOut' },
  },
};

export const slideLeftVariants = {
  hidden: {
    opacity: 0,
    x: '100px',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: commonSpringTransition,
  },
  exit: {
    x: '100px',
    transition: { ease: 'easeInOut' },
  },
};

export const zoomInVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: commonSpringTransition,
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: { ease: 'easeInOut' },
  },
};

export const fadeInVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: commonSpringTransition,
  },
  exit: {
    opacity: 0,
    transition: { ease: 'easeInOut' },
  },
};

export const slideUpVariants = {
  hidden: {
    y: '100px',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: commonSpringTransition,
  },
  exit: {
    y: '100px',
    transition: { ease: 'easeInOut' },
  },
};

export const headTextVariants = {
  hidden: {
    opacity: 0,
    y: '50px',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: commonTweenTransition,
  },
  exit: {
    y: '50px',
    transition: { ease: 'easeInOut' },
  },
};

export const parentListVariant = {
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const listVariants = {
  hidden: {
    opacity: 0,
    y: '50px',
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const toastTransition = {
  hidden: {
    top: '-40%',
    opacity: 0,
  },
  visible: {
    top: 20,
    opacity: 1,
    transition: {
      type: 'tween',
      ease: 'linear',
      duration: 2,
    },
  },
  exit: {
    y: '-40%',
    transition: { ease: 'linear' },
  },
};

export const pageVariants = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};
