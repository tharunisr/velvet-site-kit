import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "../data/testimonials";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 7000);
    return () => clearInterval(timer);
  }, []);

  const active = testimonials[index];

  const go = (dir) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by our clients"
          description="Real words from the people who sit in our chairs — names and photos are placeholders in this template."
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="surface-glass relative rounded-[2.5rem] p-8 shadow-luxe sm:p-12">
            <Quote className="h-9 w-9 text-gold/60" />
            <p className="mt-6 font-display text-2xl leading-relaxed sm:text-3xl">
              “{active.quote}”
            </p>

            <div className="mt-8 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-luxe font-display text-lg">
                {active.initials}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-base">{active.name}</span>
                <span className="block text-xs tracking-[0.16em] text-muted-foreground uppercase">
                  {active.role}
                </span>
                <span className="mt-1 flex gap-0.5">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </span>
              </span>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card transition-colors hover:border-gold"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-gold" : "w-3 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card transition-colors hover:border-gold"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
