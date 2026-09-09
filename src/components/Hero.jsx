import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight } from "lucide-react";
import heroVisual from "../assets/hero-visual.jpg";
import { salonConfig } from "../config/salonConfig";

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setOffset(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const parallax = Math.min(offset, 500);

  return (
    <section id="home" className="relative overflow-hidden bg-luxe pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div
        className="animate-shimmer-pulse pointer-events-none absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-blush/60 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="animate-shimmer-pulse pointer-events-none absolute -right-24 bottom-0 h-[26rem] w-[26rem] rounded-full bg-nude/60 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr]">
        <div className="flex flex-col gap-7">
          <span className="surface-glass inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-[0.65rem] tracking-[0.28em] uppercase">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            {salonConfig.tagline}
          </span>

          <h1 className="text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
            Reveal Your
            <span className="block italic text-gilded">Natural Beauty</span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Premium beauty treatments designed to help you look beautiful, feel confident, and
            relax in a luxurious environment.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-xs tracking-[0.2em] text-primary-foreground uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-luxe"
            >
              Book an Appointment
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-8 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:border-gold hover:-translate-y-0.5"
            >
              Explore Services
            </a>
          </div>

          <dl className="mt-4 grid max-w-lg grid-cols-3 gap-4 border-t border-foreground/10 pt-6">
            {salonConfig.stats.map((stat) => (
              <div key={stat.label} className="min-w-0">
                <dt className="font-display text-3xl">{stat.value}</dt>
                <dd className="mt-1 text-[0.7rem] tracking-wide text-muted-foreground uppercase">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="relative"
            style={{ transform: `translate3d(0, ${parallax * -0.06}px, 0)` }}
          >
            <div className="animate-float-slow absolute -inset-6 rounded-[3rem] bg-gold/20 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-card/60 shadow-luxe">
              <img
                src={heroVisual}
                alt="Luxury beauty products floating above a marble podium"
                width={1024}
                height={1280}
                className="h-[26rem] w-full object-cover sm:h-[34rem]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/25 to-transparent" />
            </div>

            <div
              className="surface-glass animate-float-soft absolute -left-4 top-14 hidden rounded-2xl px-5 py-4 shadow-soft sm:block"
              style={{ transform: `translate3d(0, ${parallax * 0.05}px, 0)` }}
            >
              <p className="font-display text-2xl">4.9★</p>
              <p className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                Client rating
              </p>
            </div>

            <div
              className="surface-glass animate-float-slow absolute -right-4 bottom-12 hidden rounded-2xl px-5 py-4 shadow-soft sm:block"
              style={{ transform: `translate3d(0, ${parallax * -0.04}px, 0)` }}
            >
              <p className="font-display text-2xl">30+</p>
              <p className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                Signature rituals
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
