"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

type BenefitItem = {
  number?: string;
  title?: string;
  text?: string;
};

const cardClassName =
  "relative grid grid-cols-[70px_1fr] gap-8 border-b border-white/15 py-10 max-md:grid-cols-1 max-md:gap-3 max-md:py-8";

function BenefitCardStatic({
  benefit,
  index,
}: {
  benefit: BenefitItem;
  index: number;
}) {
  return (
    <div className={cardClassName}>
      <span className="font-heading text-sm tracking-[0.22em] text-white/35">
        {benefit.number ?? String(index + 1).padStart(2, "0")}
      </span>

      <div>
        <h3 className="font-heading text-[30px] font-light leading-tight tracking-[-0.04em] text-[#f2f2f2] max-md:text-[26px]">
          {benefit.title}
        </h3>

        <p className="mt-4 max-w-[560px] text-[17px] leading-[1.75] text-white/58 max-md:text-[16px]">
          {benefit.text}
        </p>
      </div>
    </div>
  );
}

function BenefitCardAnimated({
  benefit,
  index,
}: {
  benefit: BenefitItem;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "end 0.08"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.35, 0.5, 0.65, 1],
    [48, 18, 0, -12, -28],
  );
  const titleY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [12, 0, -8],
  );
  const numberColor = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.6, 1],
    [
      "rgba(255, 255, 255, 0.22)",
      "rgba(255, 255, 255, 0.4)",
      "rgb(255, 255, 255)",
      "rgba(255, 255, 255, 0.4)",
      "rgba(255, 255, 255, 0.22)",
    ],
  );
  const titleColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      "rgba(242, 242, 242, 0.32)",
      "rgba(242, 242, 242, 0.62)",
      "rgb(242, 242, 242)",
      "rgba(242, 242, 242, 0.62)",
      "rgba(242, 242, 242, 0.32)",
    ],
  );
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      "rgba(255, 255, 255, 0.18)",
      "rgba(255, 255, 255, 0.36)",
      "rgba(255, 255, 255, 0.58)",
      "rgba(255, 255, 255, 0.36)",
      "rgba(255, 255, 255, 0.18)",
    ],
  );
  const numberScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92]);
  const lineScale = useTransform(
    scrollYProgress,
    [0, 0.45, 0.5, 0.55, 1],
    [0, 0.4, 1, 0.4, 0],
  );

  return (
    <motion.div ref={ref} style={{ x }} className={cardClassName}>
      <motion.span
        style={{ color: numberColor, scale: numberScale }}
        className="origin-left font-heading text-sm tracking-[0.22em]"
      >
        {benefit.number ?? String(index + 1).padStart(2, "0")}
      </motion.span>

      <div className="relative">
        <motion.div
          style={{ scaleX: lineScale }}
          className="absolute -left-4 top-1 h-[calc(100%-4px)] w-px origin-top bg-white/70"
        />

        <motion.h3
          style={{ y: titleY, color: titleColor }}
          className="font-heading text-[30px] font-light leading-tight tracking-[-0.04em] max-md:text-[26px]"
        >
          {benefit.title}
        </motion.h3>

        <motion.p
          style={{ color: textColor }}
          className="mt-4 max-w-[560px] text-[17px] leading-[1.75] max-md:text-[16px]"
        >
          {benefit.text}
        </motion.p>
      </div>
    </motion.div>
  );
}

export function BenefitCard({
  benefit,
  index,
}: {
  benefit: BenefitItem;
  index: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <BenefitCardStatic benefit={benefit} index={index} />;
  }

  return <BenefitCardAnimated benefit={benefit} index={index} />;
}

export function BenefitCardList({ benefits }: { benefits: BenefitItem[] }) {
  return (
    <div className="border-t border-white/15">
      {benefits.map((benefit, index) => (
        <BenefitCard
          key={benefit.number ?? `benefit-${index}`}
          benefit={benefit}
          index={index}
        />
      ))}
    </div>
  );
}
