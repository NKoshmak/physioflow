"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { luxuryEaseSlow, staggerContainer } from "@/lib/motion";

const navItems = [
  { label: "home", href: "#home" },
  { label: "method", href: "#method" },
  { label: "benefits", href: "#benefits" },
  { label: "practitioner", href: "#practitioner" },
  { label: "book", href: "#book" },
  { label: "contact", href: "#contact" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <aside className="fixed left-0 top-0 z-50 flex h-screen w-[185px] flex-col justify-between px-7 py-8 text-[#f4f1ec] max-md:h-auto max-md:w-full max-md:flex-row max-md:items-center max-md:justify-between max-md:bg-gradient-to-b max-md:from-[#050505]/95 max-md:to-transparent max-md:px-5 max-md:py-4">
        <div>
          <motion.a
            href="#home"
            className="flex flex-col items-start"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: luxuryEaseSlow, delay: 0.2 }}
          >
            <span className="font-['Raleway'] text-[46px] font-light leading-[0.8] opacity-90 max-md:text-[30px]">
              ∿
            </span>
            <span className="mt-2 font-['Raleway'] text-[19px] tracking-[0.02em] max-md:text-[17px]">
              PhysioFlow
            </span>
            <span className="mt-0.5 text-[10px] lowercase tracking-[0.18em] text-[#8f8f8f] max-md:hidden">
              movement therapy
            </span>
          </motion.a>

          <motion.nav
            className="mt-[72px] flex flex-col gap-[19px] max-md:hidden"
            initial="hidden"
            animate="visible"
            variants={
              prefersReducedMotion
                ? undefined
                : staggerContainer(0.08, 0.45)
            }
          >
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                variants={
                  prefersReducedMotion
                    ? undefined
                    : { hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }
                }
                transition={{ duration: 0.9, ease: luxuryEaseSlow }}
                className="w-fit text-[14px] tracking-[0.08em] text-[#8f8f8f] transition duration-300 hover:translate-x-1 hover:text-[#f4f1ec]"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.nav>
        </div>


        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative z-[60] hidden h-10 w-10 items-center justify-center max-md:flex"
        >
          <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
          <span className="flex w-6 flex-col items-end gap-[5px]">
            <span
              className={`block h-px w-6 bg-[#f4f1ec] transition duration-300 ${isOpen ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-4 bg-[#f4f1ec] transition duration-300 ${isOpen ? "w-0 opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-[#f4f1ec] transition duration-300 ${isOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </aside>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
              className="fixed inset-0 z-[55] bg-[#050505]/60 backdrop-blur-[2px] md:hidden"
            />

            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="fixed right-0 top-0 z-[60] flex h-full w-1/2 flex-col justify-between bg-[#0a0a0a] px-6 py-10 text-[#f4f1ec] md:hidden"
            >
              <div className="flex flex-col gap-7 pt-16">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.3 }}
                    className="text-[15px] tracking-[0.1em] text-[#8f8f8f] transition duration-300 hover:text-[#f4f1ec]"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              <div className="flex gap-5 text-xs text-[#8f8f8f]">
                <a
                  href="mailto:hello@physioflow.com"
                  onClick={closeMenu}
                  className="transition hover:text-[#f4f1ec]"
                >
                  email
                </a>
                <a href="#book" onClick={closeMenu} className="transition hover:text-[#f4f1ec]">
                  book
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
