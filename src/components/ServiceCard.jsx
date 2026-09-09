import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export default function ServiceCard({ service }) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-luxe">
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-70" />
      </div>

      <div className="flex flex-col gap-3 p-6">
        <h3 className="text-2xl">{service.name}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
        <p className="text-[0.68rem] tracking-[0.18em] text-muted-foreground/80 uppercase">
          {service.details}
        </p>
        <Link
          to="/contact"
          className="mt-2 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-colors hover:text-gold"
        >
          Learn More
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </article>
  );
}
