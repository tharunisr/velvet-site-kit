import { Link } from "@tanstack/react-router";
import featured from "../assets/featured.jpg";
import makeup from "../assets/g-makeup.jpg";
import skincare from "../assets/g-skincare2.jpg";
import Reveal from "./Reveal";

export default function FeaturedExperience() {
  return (
    <section className="relative overflow-hidden bg-noir py-24 text-primary-foreground sm:py-32">
      <div
        className="animate-shimmer-pulse pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-gold/25 blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span className="eyebrow text-primary-foreground/60">Featured experience</span>
          <h2 className="text-4xl leading-[1.05] sm:text-6xl">
            Your Beauty.
            <span className="block italic text-gilded">Our Passion.</span>
          </h2>
          <p className="max-w-lg text-sm leading-relaxed text-primary-foreground/70 sm:text-base">
            A signature journey through skin, hair and touch — warm towels, botanical steam, a
            playlist you choose and a finish photographed in soft daylight.
          </p>
          <ul className="flex flex-wrap gap-3 text-[0.68rem] tracking-[0.18em] uppercase">
            {["Private suite", "Aroma ritual", "Editorial finish"].map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-primary-foreground/20 px-4 py-2"
              >
                {tag}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="w-fit rounded-full bg-primary-foreground px-8 py-4 text-xs tracking-[0.2em] text-primary uppercase transition-transform duration-300 hover:-translate-y-0.5"
          >
            Reserve the experience
          </Link>
        </div>

        <Reveal className="relative h-[26rem] sm:h-[32rem]">
          <div className="absolute inset-x-8 top-0 h-[22rem] overflow-hidden rounded-[2.5rem] shadow-luxe sm:h-[27rem]">
            <img
              src={featured}
              alt="Spa treatment bed with cream towels, orchid and candles"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="animate-float-soft absolute -left-2 bottom-4 h-44 w-36 overflow-hidden rounded-[1.75rem] border border-primary-foreground/15 shadow-glow sm:h-52 sm:w-44">
            <img
              src={makeup}
              alt="Makeup brushes and nude palette on silk"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="animate-float-slow absolute -right-2 bottom-16 h-36 w-32 overflow-hidden rounded-[1.5rem] border border-primary-foreground/15 shadow-glow sm:h-44 sm:w-40">
            <img
              src={skincare}
              alt="Skincare serums arranged on marble"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
