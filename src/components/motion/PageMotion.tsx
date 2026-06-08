"use client";

import { motion, useReducedMotion } from "framer-motion";
import { luxuryEaseSlow } from "@/lib/motion";

export default function PageMotion({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.main
      className="ml-[185px] bg-[#050505] max-md:ml-0"
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: luxuryEaseSlow, delay: 0.15 }}
    >
      {children}
    </motion.main>
  );
}
