import Image from "next/image";
import { LineReveal, Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { fadeIn, fadeUpSoft, scaleIn, slideFromRight } from "@/lib/motion";

const fallbackCertifications = [
  "Certified Fascial Stretch Therapist — Stretch to Win Institute",
  "Certified Movement Coach — Chicago Movement Gym",
  "Functional Patterns Training",
  "Myofascial Release & Gait Cycle Optimization",
  "Thai Massage, Deep Tissue, Sports Massage, Swedish Massage",
  "Founder of PhysioFlow — Chicago, IL",
];

const fallbackParagraphs = [
  "Through years of hands-on practice and training across Fascial Stretch Therapy, Functional Patterns, myofascial release, and movement coaching, he developed an integrative approach that adapts to each client’s body.",
  "His philosophy is simple: the body already knows how to heal. The right conditions — movement, awareness, breath, and release — help restore that natural flow.",
];

type PractitionerData = {
  practitionerTitle?: string;
  practitionerIntro?: string;
  practitionerParagraphs?: string[];
  certifications?: string[];
};

type PractitionerProps = {
  data?: PractitionerData;
};

export default function Practitioner({ data }: PractitionerProps) {
  const paragraphs = data?.practitionerParagraphs?.length
    ? data.practitionerParagraphs
    : fallbackParagraphs;

  const certifications = data?.certifications?.length
    ? data.certifications
    : fallbackCertifications;

  return (
    <section
      id="practitioner"
      className="relative overflow-hidden border-t border-white/15 bg-[#050505] px-[7vw] py-[130px] max-md:px-6 max-md:py-[90px]"
    >
      <Reveal variants={fadeIn} duration={1.8} className="absolute inset-0 z-0 max-md:hidden">
        <Image
          src="/images/practitioner.webp"
          alt="Fascia practitioner portrait"
          fill
          className="object-cover object-[57%_40%] grayscale contrast-110 brightness-[0.55]"
        />

        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.35),rgba(0,0,0,0.38),rgba(0,0,0,0.35))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.4),transparent_45%,rgba(0,0,0,0.35))]" />
      </Reveal>

      <div className="relative z-10 mx-auto max-w-[1180px]">
        <Reveal variants={scaleIn} duration={1.4} className="relative -mx-6 mb-12 hidden h-[420px] overflow-hidden max-md:block">
          <Image
            src="/images/practitioner.webp"
            alt="Fascia practitioner portrait"
            fill
            className="object-cover object-[48%_35%] grayscale contrast-110 brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/20" />
        </Reveal>

        <div className="grid grid-cols-[0.9fr_1.1fr] gap-16 max-lg:grid-cols-1">
          <div className="min-h-[520px] max-lg:hidden" />

          <div className="ml-auto max-w-[620px] max-md:ml-0 max-md:max-w-none">
            <Reveal>
              <p className="mb-5 text-[11px] uppercase tracking-[0.26em] text-[#9a9a9a]">
                practitioner
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="font-heading text-[clamp(44px,6vw,92px)] font-light leading-[0.95] tracking-[-0.055em] text-[#f2f2f2]">
                {data?.practitionerTitle || "Meet Your Practitioner"}
              </h2>
            </Reveal>

            <LineReveal className="mt-10 border-t border-white/15" />

            <Stagger className="mt-10 grid grid-cols-2 gap-8 pt-10 max-md:grid-cols-1" stagger={0.12}>
              <StaggerItem variants={fadeUpSoft}>
                <p className="text-[17px] leading-[1.65] text-white/65">
                  {data?.practitionerIntro ||
                    "Rooted in a background as a former athlete, his work began with a deep understanding of how the body moves, compensates, and recovers."}
                </p>
              </StaggerItem>

              <StaggerItem variants={fadeUpSoft}>
                <div className="space-y-6 text-[17px] leading-[1.65] text-white/65">
                  {paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </StaggerItem>
            </Stagger>

            <div className="mt-12 border-t border-white/15">
              <Reveal variants={fadeUpSoft}>
                <p className="py-5 text-[11px] uppercase tracking-[0.26em] text-[#9a9a9a]">
                  experience & certifications
                </p>
              </Reveal>

              <LineReveal className="border-t border-white/15" />

              <Stagger className="divide-y divide-white/15 border-t border-white/15" stagger={0.07}>
                {certifications.map((item) => (
                  <StaggerItem key={item} variants={slideFromRight}>
                    <div className="grid grid-cols-[24px_1fr] gap-5 py-4 text-[15px] leading-[1.5] text-white/65">
                      <span className="text-white/35">✧</span>
                      <span>{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
