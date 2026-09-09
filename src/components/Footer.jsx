import { Link } from "@tanstack/react-router";
import { salonConfig } from "../config/salonConfig";
import { services } from "../data/services";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-noir text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/50 font-display text-lg">
              {salonConfig.logoInitials}
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-xl">{salonConfig.name}</span>
              <span className="text-[0.6rem] tracking-[0.3em] uppercase opacity-60">
                {salonConfig.tagline}
              </span>
            </span>
          </div>
          <p className="text-sm leading-relaxed opacity-70">
            A modern beauty atelier devoted to calm, craft and confidence — treatments tailored
            to you, in a space made for slowing down.
          </p>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.28em] uppercase opacity-60">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm opacity-80">
            {["about", "services", "gallery", "packages", "testimonials"].map((id) => (
              <li key={id}>
                <a href={`/#${id}`} className="capitalize transition-opacity hover:opacity-100">
                  {id}
                </a>
              </li>
            ))}
            <li>
              <Link to="/contact" className="transition-opacity hover:opacity-100">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.28em] uppercase opacity-60">Services</h3>
          <ul className="mt-5 space-y-3 text-sm opacity-80">
            {services.map((s) => (
              <li key={s.id}>{s.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.28em] uppercase opacity-60">Visit & Follow</h3>
          <address className="mt-5 space-y-1 text-sm not-italic opacity-80">
            <p>{salonConfig.address.line1}</p>
            <p>{salonConfig.address.line2}</p>
            <p className="pt-2">{salonConfig.phone}</p>
            <p>{salonConfig.email}</p>
          </address>
          <div className="mt-5 flex flex-wrap gap-2">
            {salonConfig.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-primary-foreground/20 px-4 py-1.5 text-xs tracking-wide transition-colors hover:border-gold/60"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 px-5 py-6 text-center text-xs opacity-60 sm:px-8">
        © {year} {salonConfig.name}. All rights reserved. Demo template content.
      </div>
    </footer>
  );
}
