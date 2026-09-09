import { Link } from "@tanstack/react-router";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="px-5 pb-24 sm:px-8 sm:pb-32">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-luxe px-6 py-20 text-center shadow-luxe sm:px-12">
        <div
          className="animate-shimmer-pulse pointer-events-none absolute -top-24 left-1/3 h-80 w-80 rounded-full bg-blush/60 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
          <span className="eyebrow">Ready when you are</span>
          <h2 className="text-4xl leading-[1.05] sm:text-6xl">
            Ready to Feel <span className="italic text-gilded">Beautiful?</span>
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Book your appointment today and experience beauty care designed especially for you.
          </p>
          <Link
            to="/contact"
            className="rounded-full bg-primary px-9 py-4 text-xs tracking-[0.2em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5"
          >
            Book Your Appointment
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
