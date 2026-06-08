"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/hero-slides";
import { luxuryEase, luxuryEaseSlow } from "@/lib/motion";

const fadeTransition = {
  duration: 2,
  ease: [0.4, 0, 0.2, 1] as const,
};

export default function HeroCarousel({
  lcpImage,
}: {
  lcpImage: React.ReactNode;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasAnimatedCaption, setHasAnimatedCaption] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const activeSlide = heroSlides[activeIndex];
  const isFirstSlide = activeIndex === 0;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505] max-md:min-h-[100svh]"
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: isFirstSlide ? 1 : 0 }}
          transition={fadeTransition}
          aria-hidden={!isFirstSlide}
        >
          {lcpImage}
        </motion.div>

        {!isFirstSlide && (
          <AnimatePresence initial={false}>
            <motion.div
              key={activeSlide.image}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={fadeTransition}
            >
              <Image
                src={activeSlide.image}
                alt=""
                fill
                sizes="100vw"
                className={`object-cover grayscale contrast-110 brightness-[0.72] max-md:hidden ${activeSlide.position}`}
              />
              <Image
                src={activeSlide.mobileImage ?? activeSlide.image}
                alt=""
                fill
                sizes="100vw"
                className={`object-cover grayscale contrast-110 brightness-[0.62] md:hidden ${
                  activeSlide.mobilePosition ?? activeSlide.position
                }`}
              />
            </motion.div>
          </AnimatePresence>
        )}

        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.2),rgba(0,0,0,0.78))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.75),transparent_42%,rgba(0,0,0,0.3))]" />
      </div>

      <div className="pointer-events-none relative z-10 min-h-screen max-md:min-h-[100svh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 28, filter: "blur(6px)" }
            }
            animate={
              prefersReducedMotion
                ? { opacity: 1 }
                : { opacity: 1, y: 0, filter: "blur(0px)" }
            }
            exit={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, y: -16, filter: "blur(4px)" }
            }
            transition={{ duration: 1.1, ease: luxuryEase }}
            className="absolute bottom-[18vh] left-[7vw] max-w-[min(420px,42vw)] text-left max-md:bottom-[14vh] max-md:left-6 max-md:max-w-[min(320px,82vw)]"
          >
            <motion.p
              initial={
                hasAnimatedCaption
                  ? false
                  : { opacity: 0, y: 16 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: luxuryEaseSlow, delay: 0.35 }}
              onAnimationComplete={() => setHasAnimatedCaption(true)}
              className="mb-4 text-[10px] uppercase tracking-[0.28em] text-white/45"
            >
              {activeSlide.caption}
            </motion.p>

            <h1 className="font-heading text-[clamp(22px,2.8vw,42px)] font-light leading-[1.1] tracking-[-0.04em] text-[#f2f2f2]">
              &ldquo;{activeSlide.quote}&rdquo;
            </h1>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: luxuryEaseSlow, delay: 0.6 }}
        className="absolute bottom-10 right-[7vw] z-10 flex gap-3 max-md:hidden"
      >
        {heroSlides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveIndex(index)}
            animate={{
              width: index === activeIndex ? 40 : 40,
              backgroundColor:
                index === activeIndex
                  ? "rgba(255,255,255,0.8)"
                  : "rgba(255,255,255,0.2)",
            }}
            whileHover={{ backgroundColor: "rgba(255,255,255,0.55)" }}
            transition={{ duration: 0.5, ease: luxuryEase }}
            className="h-[1px]"
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </motion.div>
    </section>
  );
}
