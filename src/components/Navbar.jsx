import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { salonConfig } from "../config/salonConfig";

const navItems = [
  { label: "Home", hash: "home" },
  { label: "About", hash: "about" },
  { label: "Services", hash: "services" },
  { label: "Gallery", hash: "gallery" },
  { label: "Packages", hash: "packages" },
  { label: "Testimonials", hash: "testimonials" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const renderLink = (item, extraClass) => {
    if (item.to) {
      return (
        <Link
          key={item.label}
          to={item.to}
          onClick={() => setOpen(false)}
          className={extraClass}
        >
          {item.label}
        </Link>
      );
    }
    const href = onHome ? `#${item.hash}` : `/#${item.hash}`;
    return (
      <a key={item.label} href={href} onClick={() => setOpen(false)} className={extraClass}>
        {item.label}
      </a>
    );
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "surface-glass shadow-soft py-3" : "py-5"
      }`}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:grid-cols-[auto_1fr_auto]">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/40 bg-luxe font-display text-lg text-foreground">
            {salonConfig.logoInitials}
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-xl leading-none">
              {salonConfig.name}
            </span>
            <span className="block text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase">
              {salonConfig.tagline}
            </span>
          </span>
        </Link>

        <div className="hidden justify-center gap-7 text-sm tracking-wide lg:flex">
          {navItems.map((item) =>
            renderLink(
              item,
              "relative text-foreground/75 transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100",
            ),
          )}
        </div>

        <div className="flex items-center justify-end gap-2">
          <Link
            to="/contact"
            className="hidden rounded-full bg-primary px-6 py-2.5 text-xs tracking-[0.18em] text-primary-foreground uppercase transition-all duration-300 hover:shadow-luxe hover:-translate-y-0.5 sm:inline-flex"
          >
            Book Now
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border bg-card/70 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="surface-glass mx-4 mt-3 rounded-2xl p-5 shadow-luxe lg:hidden">
          <div className="flex flex-col gap-4 text-sm">
            {navItems.map((item) =>
              renderLink(item, "text-foreground/80 transition-colors hover:text-foreground"),
            )}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-primary px-6 py-3 text-center text-xs tracking-[0.18em] text-primary-foreground uppercase"
            >
              Book Now
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
