import { Award, Leaf, HeartHandshake, Wind } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const reasons = [
  {
    icon: Award,
    title: "Professional Experts",
    text: "Senior stylists and estheticians with international training and a decade of chair time.",
  },
  {
    icon: Leaf,
    title: "Premium Products",
    text: "Clean, professional-grade formulations chosen for results and skin kindness.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Care",
    text: "Every service opens with a consultation, so nothing is templated or rushed.",
  },
  {
    icon: Wind,
    title: "Relaxing Environment",
    text: "Private suites, warm light and quiet hours designed to feel like an escape.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <SectionHeading
          align="left"
          eyebrow="Why choose us"
          title="The difference is in the care"
          description="We measure success by how you feel walking out — relaxed, looked after and quietly confident."
        />

        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-[3rem] bg-blush/30 blur-3xl" aria-hidden="true" />
          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <Reveal
                  key={reason.title}
                  delay={i * 90}
                  className={i % 2 === 1 ? "sm:mt-10" : ""}
                >
                  <div className="surface-glass h-full rounded-[1.75rem] p-7 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-luxe">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-gold/40 bg-card">
                      <Icon className="h-5 w-5 text-gold" />
                    </span>
                    <h3 className="mt-5 text-2xl">{reason.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {reason.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
