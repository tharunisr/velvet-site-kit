import { Link } from "@tanstack/react-router";
import { Check, Clock } from "lucide-react";

export default function PackageCard({ pack }) {
  const featured = pack.featured;

  return (
    <article
      className={`relative flex h-full flex-col rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 ${
        featured
          ? "bg-noir text-primary-foreground shadow-luxe lg:scale-[1.04]"
          : "border border-border bg-card shadow-soft"
      }`}
    >
      {featured ? (
        <span className="absolute -top-3 left-8 rounded-full bg-gold px-4 py-1 text-[0.6rem] tracking-[0.22em] text-primary uppercase">
          Most loved
        </span>
      ) : null}

      <h3 className="text-3xl">{pack.name}</h3>
      <p
        className={`mt-2 text-sm ${featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}
      >
        {pack.description}
      </p>

      <div className="mt-6 flex items-end gap-2">
        <span className="font-display text-5xl">{pack.price}</span>
        <span
          className={`pb-2 text-xs tracking-[0.16em] uppercase ${featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}
        >
          starting
        </span>
      </div>

      <p
        className={`mt-3 inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase ${featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}
      >
        <Clock className="h-3.5 w-3.5" />
        {pack.duration}
      </p>

      <ul className="mt-6 flex-1 space-y-3 text-sm">
        {pack.includes.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Check className={`mt-0.5 h-4 w-4 shrink-0 ${featured ? "text-gold" : "text-gold"}`} />
            <span className={featured ? "text-primary-foreground/85" : "text-muted-foreground"}>
              {item}
            </span>
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className={`mt-8 rounded-full px-6 py-3.5 text-center text-xs tracking-[0.2em] uppercase transition-transform duration-300 hover:-translate-y-0.5 ${
          featured
            ? "bg-primary-foreground text-primary"
            : "bg-primary text-primary-foreground"
        }`}
      >
        Book Now
      </Link>
    </article>
  );
}
