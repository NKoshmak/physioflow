import { LineReveal, Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { fadeUpSoft } from "@/lib/motion";

type methodData = {
  methodTitle?: string;
  methodSubtitle?: string;
  methodTextLeft?: string;
  methodTextRight?: string[];
};

export default function Method({ data }: { data: methodData }) {
  return (
    <section
      id="method"
      className="relative border-t border-white/15 bg-[#050505] px-[7vw] py-[150px] max-md:px-6 max-md:py-[100px]"
    >
      <div className="mx-auto max-w-[980px] text-center">
        <Reveal>
          <p className="mb-5 text-[11px] uppercase tracking-[0.26em] text-[#9a9a9a]">
            method
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mx-auto max-w-[820px] font-heading text-[clamp(48px,7vw,104px)] font-light leading-[0.92] tracking-[-0.065em] text-[#f2f2f2]">
            {data?.methodTitle || "Where science meets intuitive healing"}
          </h2>
        </Reveal>

        <LineReveal className="mx-auto mt-14 h-px max-w-[860px] bg-white/15" />

        <Stagger className="mx-auto mt-12 grid max-w-[860px] grid-cols-2 gap-12 pt-12 text-left max-md:grid-cols-1 max-md:gap-8">
          <StaggerItem>
            <h3 className="mb-5 font-heading text-2xl font-light tracking-[-0.03em] text-[#f2f2f2]">
              {data?.methodSubtitle || "What is Fascial Stretch Therapy?"}
            </h3>

            <p className="text-[17px] leading-[1.7] text-white/65">
              {data?.methodTextLeft ||
                "Fascial Stretch Therapy is a science-based approach designed to release restriction, restore mobility, and support the natural relationship between body and mind."}
            </p>
          </StaggerItem>

          <StaggerItem variants={fadeUpSoft}>
            <div className="space-y-6 text-[17px] leading-[1.7] text-white/65">
              {(
                data?.methodTextRight || [
                  "Each session blends fascia-focused stretching with somatic movement, breath awareness, and hands-on bodywork to create a personalized experience beyond standard therapy.",
                  "The goal is not just flexibility — it is alignment, nervous system balance, and a deeper sense of ease in the body.",
                ]
              ).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
