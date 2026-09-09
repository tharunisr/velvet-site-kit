import aboutImage from "../assets/about-salon.jpg";
import { salonConfig } from "../config/salonConfig";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="absolute -top-6 -left-6 hidden h-40 w-40 rounded-3xl border border-gold/40 sm:block" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-luxe">
            <img
              src={aboutImage}
              alt="Interior of a bright, modern beauty salon with arched mirrors"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-[24rem] w-full object-cover sm:h-[32rem]"
            />
          </div>
          <div className="surface-glass absolute -bottom-6 right-4 rounded-2xl px-6 py-4 shadow-soft">
            <p className="font-display text-3xl">Since 2013</p>
            <p className="text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
              Crafting confidence
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-8">
          <SectionHeading
            align="left"
            eyebrow="About the salon"
            title="Beauty, Confidence & Care"
            description="What began as a two-chair studio is now a full beauty atelier led by artists who believe good beauty work should feel personal. Every appointment starts with a conversation and ends with a look that still feels like you."
          />
          <Reveal delay={120}>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We work with clean, professional-grade products, quiet private suites and a team
              trained across hair, skin and bridal artistry — so you can arrive with an idea and
              leave with it beautifully realised.
            </p>
          </Reveal>

          <Reveal delay={200} className="grid gap-4 sm:grid-cols-3">
            {salonConfig.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-card p-5 shadow-soft transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="font-display text-3xl text-gilded">{stat.value}</p>
                <p className="mt-2 text-[0.68rem] tracking-[0.16em] text-muted-foreground uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
