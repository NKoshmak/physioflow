export const luxuryEase = [0.22, 1, 0.36, 1] as const;
export const luxuryEaseSlow = [0.16, 1, 0.3, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeUpSoft = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const slideFromRight = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: { opacity: 1, scale: 1 },
};

export const lineReveal = {
  hidden: { scaleX: 0, opacity: 0.4 },
  visible: { scaleX: 1, opacity: 1 },
};

export const staggerContainer = (stagger = 0.14, delay = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

export const defaultViewport = { once: true, margin: "-10% 0px -8% 0px" };

export const luxuryTransition = {
  duration: 1.15,
  ease: luxuryEase,
};

export const luxuryTransitionSlow = {
  duration: 1.45,
  ease: luxuryEaseSlow,
};
