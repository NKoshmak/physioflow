import Image from "next/image";
import { LineReveal, Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { fadeIn, fadeUpSoft, slideFromRight } from "@/lib/motion";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/15 bg-[#050505] px-[7vw] py-[120px] max-md:px-6 max-md:py-[90px]"
    >
      <Reveal variants={fadeIn} duration={1.8} className="absolute inset-0 z-0">
        <Image
          src="/images/booking.webp"
          alt="Therapy space prepared for fascia stretch session"
          fill
          className="object-cover object-[70%_78%] grayscale contrast-110 brightness-[0.62]"
        />

        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.52),rgba(0,0,0,0.60),rgba(0,0,0,0.85))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.6),transparent_45%,rgba(0,0,0,0.82))]" />
      </Reveal>

      <div className="relative z-10 mx-auto max-w-[1180px]">
        <Reveal>
          <p className="mb-5 text-[11px] uppercase tracking-[0.26em] text-[#9a9a9a]">
            contact
          </p>
        </Reveal>

        <div className="grid grid-cols-[1.2fr_0.8fr] gap-16 max-lg:grid-cols-1">
          <div>
            <Reveal delay={0.08}>
              <h2 className="max-w-[820px] font-heading text-[clamp(48px,7vw,110px)] font-light leading-[0.9] tracking-[-0.065em] text-[#f2f2f2]">
                Move better. Feel better. Return to flow.
              </h2>
            </Reveal>

            <Reveal variants={fadeUpSoft} delay={0.16}>
              <p className="mt-8 max-w-[520px] text-[18px] leading-[1.65] text-white/60">
                Personalized fascia stretch therapy and integrative movement
                sessions designed to restore ease, alignment, and connection.
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col justify-end">
            <LineReveal className="border-t border-white/15" />

            <Stagger className="border-t border-white/15" stagger={0.08}>
              <StaggerItem variants={slideFromRight}>
                <div className="grid grid-cols-[120px_1fr] gap-6 border-b border-white/15 py-5 max-md:grid-cols-1 max-md:gap-2">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                    email
                  </span>
                  <a
                    href="mailto:hello@physioflow.com"
                    className="text-[17px] text-white/70 transition hover:text-white"
                  >
                    hello@physioflow.com
                  </a>
                </div>
              </StaggerItem>

              <StaggerItem variants={slideFromRight}>
                <div className="grid grid-cols-[120px_1fr] gap-6 border-b border-white/15 py-5 max-md:grid-cols-1 max-md:gap-2">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                    location
                  </span>
                  <span className="text-[17px] text-white/70">Chicago, IL</span>
                </div>
              </StaggerItem>

              <StaggerItem variants={slideFromRight}>
                <div className="grid grid-cols-[120px_1fr] gap-6 border-b border-white/15 py-5 max-md:grid-cols-1 max-md:gap-2">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                    social
                  </span>
                  <div className="flex gap-5 text-[17px] text-white/70">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-white"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-white"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </StaggerItem>
            </Stagger>

            <Reveal variants={fadeUpSoft} delay={0.12}>
              <a
                href="#book"
                className="mt-10 inline-flex w-fit items-center justify-center rounded-full border border-white/15 px-6 py-3 text-xs uppercase tracking-[0.15em] text-[#f2f2f2] transition duration-300 hover:border-[#f2f2f2] hover:bg-[#f2f2f2] hover:text-[#050505]"
              >
                Book a Session
              </a>
            </Reveal>
          </div>
        </div>

        <Reveal variants={fadeUpSoft} delay={0.1}>
          <div className="mt-24 flex items-center justify-between border-t border-white/15 pt-6 text-[12px] text-white/35 max-md:flex-col max-md:items-start max-md:gap-3">
            <p>© 2026 PhysioFlow. All rights reserved.</p>
            <p>Fascial Stretch Therapy & Integrative Movement</p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
