"use client";

import {
  motion,
  type HTMLMotionProps,
  type Variants,
  useReducedMotion,
} from "framer-motion";
import {
  defaultViewport,
  fadeUp,
  luxuryTransition,
} from "@/lib/motion";

type RevealProps = HTMLMotionProps<"div"> & {
  variants?: Variants;
  delay?: number;
  duration?: number;
};

export function Reveal({
  children,
  variants = fadeUp,
  delay = 0,
  duration,
  ...props
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={
        prefersReducedMotion
          ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
          : variants
      }
      transition={{
        ...luxuryTransition,
        ...(duration !== undefined ? { duration } : {}),
        delay,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  stagger = 0.14,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={
        prefersReducedMotion
          ? undefined
          : {
              hidden: {},
              visible: {
                transition: { staggerChildren: stagger, delayChildren: delay },
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  variants = fadeUp,
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={
        prefersReducedMotion
          ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
          : variants
      }
      transition={luxuryTransition}
    >
      {children}
    </motion.div>
  );
}

export function LineReveal({ className }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : { scaleX: 0, opacity: 0.35 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={defaultViewport}
      transition={{ ...luxuryTransition, duration: 1.35 }}
      style={{ transformOrigin: "left center" }}
    />
  );
}
