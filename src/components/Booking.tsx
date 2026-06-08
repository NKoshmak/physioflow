"use client";

import { LineReveal, Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { fadeUpSoft } from "@/lib/motion";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type BookingData = {
  bookingLabel?: string;
  bookingTitle?: string;
  bookingText?: string;
  bookingEmail?: string;
  bookingButtonText?: string;
};

type BookingProps = {
  data?: BookingData;
};

export default function Booking({ data }: BookingProps) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="book"
      className="border-t border-white/15 bg-[#050505] px-[7vw] py-[130px] max-md:px-6 max-md:py-[90px]"
    >
      <div className="mx-auto max-w-[820px]">
        <div className="text-center">
          <Reveal>
            <p className="mb-6 text-[10px] uppercase tracking-[0.36em] text-white/42">
              {data?.bookingLabel || "book"}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mx-auto max-w-[720px] font-heading text-[clamp(56px,7vw,104px)] font-light leading-[0.9] tracking-[-0.07em] text-[#f2f2f2] max-md:text-[54px]">
              {data?.bookingTitle || "Ready to start your healing journey?"}
            </h2>
          </Reveal>

          <Reveal variants={fadeUpSoft} delay={0.14}>
            <p className="mx-auto mt-8 max-w-[560px] text-[17px] leading-[1.75] text-white/52">
              {data?.bookingText ||
                "Book a personalized session designed around your body, your movement patterns, and your recovery goals."}
            </p>
          </Reveal>
        </div>

        <LineReveal className="mx-auto mt-14 h-px max-w-[820px] bg-white/15" />

        <form onSubmit={handleSubmit} className="mt-10">
          <Stagger className="grid grid-cols-2 gap-8 max-md:grid-cols-1" stagger={0.1}>
            <StaggerItem variants={fadeUpSoft}>
            <label className="block">
              <span className="mb-5 block text-[10px] uppercase tracking-[0.28em] text-white/35">
                name
              </span>

              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full border-0 border-b border-white/18 bg-transparent pb-5 text-[16px] text-white outline-none placeholder:text-white/32 transition focus:border-white/55"
              />
            </label>
            </StaggerItem>

            <StaggerItem variants={fadeUpSoft}>
            <label className="block">
              <span className="mb-5 block text-[10px] uppercase tracking-[0.28em] text-white/35">
                email
              </span>

              <input
                type="email"
                name="email"
                required
                placeholder="you@email.com"
                className="w-full border-0 border-b border-white/18 bg-transparent pb-5 text-[16px] text-white outline-none placeholder:text-white/32 transition focus:border-white/55"
              />
            </label>
            </StaggerItem>
          </Stagger>

          <Reveal variants={fadeUpSoft} delay={0.08}>
          <label className="mt-8 block">
            <span className="mb-5 block text-[10px] uppercase tracking-[0.28em] text-white/35">
              service interest
            </span>

            <select
              name="service"
              defaultValue=""
              className="w-full border-0 border-b border-white/18 bg-[#050505] pb-5 text-[16px] text-white outline-none transition focus:border-white/55"
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="Fascial Stretch Therapy">
                Fascial Stretch Therapy
              </option>
              <option value="Movement Assessment">Movement Assessment</option>
              <option value="Recovery Session">Recovery Session</option>
            </select>
          </label>
          </Reveal>

          <Reveal variants={fadeUpSoft} delay={0.12}>
          <label className="mt-8 block">
            <span className="mb-5 block text-[10px] uppercase tracking-[0.28em] text-white/35">
              message
            </span>

            <textarea
              name="message"
              placeholder="Tell us what you are looking for..."
              rows={4}
              className="w-full resize-none border-0 border-b border-white/18 bg-transparent pb-16 text-[16px] text-white outline-none placeholder:text-white/32 transition focus:border-white/55"
            />
          </label>
          </Reveal>

          <Reveal variants={fadeUpSoft} delay={0.16}>
          <div className="mt-10 flex items-center justify-center gap-8 max-md:flex-col max-md:gap-5">
            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.55)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-full border border-white/20 px-10 py-4 text-[11px] uppercase tracking-[0.24em] text-white/75 transition hover:border-white/55 hover:text-white disabled:cursor-not-allowed disabled:opacity-45"
            >
              {status === "loading"
                ? "Sending..."
                : data?.bookingButtonText || "Send Inquiry"}
            </motion.button>

            <a
              href={`mailto:${data?.bookingEmail || "hello@physioflow.com"}`}
              className="text-[15px] text-white/45 transition hover:text-white/75"
            >
              or email {data?.bookingEmail || "hello@physioflow.com"}
            </a>
          </div>
          </Reveal>

          <AnimatePresence mode="wait">
            {status === "success" && (
              <motion.p
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 text-center text-[14px] text-white/55"
              >
                Thank you — your inquiry has been sent.
              </motion.p>
            )}

            {status === "error" && (
              <motion.p
                key="error"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 text-center text-[14px] text-red-300/80"
              >
                Something went wrong. Please try again.
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </div>
    </section>
  );
}