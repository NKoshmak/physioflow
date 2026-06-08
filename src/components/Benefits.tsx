import Image from "next/image";
import { BenefitCardList } from "@/components/motion/BenefitCard";
import { Reveal } from "@/components/motion/Reveal";
import { fadeUpSoft, scaleIn } from "@/lib/motion";

const fallbackBenefits = [
  {
    number: "01",
    title: "Calm the nervous system",
    text: "Reduce stress-related tension and support recovery through breath, assisted stretch, and nervous system regulation.",
  },
  {
    number: "02",
    title: "Restore natural mobility",
    text: "Free restrictions in fascia, joints, and movement patterns so the body can move with more ease.",
  },
  {
    number: "03",
    title: "Release pain & holding patterns",
    text: "Support the body in letting go of deep unconscious tension and compensation patterns.",
  },
  {
    number: "04",
    title: "Improve circulation & vitality",
    text: "Encourage better tissue hydration, blood flow, and a stronger sense of physical aliveness.",
  },
  {
    number: "05",
    title: "Enhance performance",
    text: "Optimize posture, gait, movement quality, and athletic ability through fascia-focused work.",
  },
  {
    number: "06",
    title: "Reconnect mind & body",
    text: "Use movement, breath, and awareness to create clarity, calm, and a deeper connection to the body.",
  },
];

type BenefitItem = {
  number?: string;
  title?: string;
  text?: string;
};

type BenefitsData = {
  benefitsTitle?: string;
  benefits?: BenefitItem[];
  benefitsClosingText?: string;
};

type BenefitsProps = {
  data?: BenefitsData;
};

export default function Benefits({ data }: BenefitsProps) {
  const benefits = data?.benefits?.length ? data.benefits : fallbackBenefits;

  return (
    <section
      id="benefits"
      className="relative border-t border-white/15 bg-[#050505] px-[7vw] py-[130px] max-md:px-6 max-md:py-[90px]"
    >
      <div className="mx-auto grid max-w-[1180px] grid-cols-[0.9fr_1.1fr] gap-16 max-lg:grid-cols-1 max-lg:gap-12">
        <div className="lg:sticky lg:top-24 lg:h-fit">
          <Reveal>
            <p className="mb-5 text-[11px] uppercase tracking-[0.26em] text-[#9a9a9a]">
              benefits
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="max-w-[680px] font-heading text-[clamp(44px,6vw,90px)] font-light leading-[0.95] tracking-[-0.055em] text-[#f2f2f2]">
              {data?.benefitsTitle || "Benefits of Therapy"}
            </h2>
          </Reveal>

          <Reveal variants={scaleIn} delay={0.16} duration={1.5}>
            <div className="relative mt-14 h-[520px] overflow-hidden max-lg:h-[420px] max-md:h-[300px]">
              <Image
                src="/images/benefits.webp"
                alt="Movement therapy mobility pose"
                fill
                className="object-cover object-center max-lg:object-center lg:object-[84%_30%] xl:object-[78%_34%] min-[1372px]:object-[74%_36%] grayscale contrast-110 brightness-[0.62]"
              />

              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.78),transparent_45%,rgba(0,0,0,0.25))]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.5)_85%)]" />
            </div>
          </Reveal>
        </div>

        <div className="pt-4 lg:pt-0">
          <BenefitCardList benefits={benefits} />

          <Reveal variants={fadeUpSoft} delay={0.1}>
            <p className="mt-12 max-w-[560px] text-[18px] leading-[1.75] text-white/50">
              {data?.benefitsClosingText ||
                "Each session is adjusted to your body’s structure, nervous system, movement history, and recovery goals — creating a therapeutic experience that feels both precise and deeply personal."}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
