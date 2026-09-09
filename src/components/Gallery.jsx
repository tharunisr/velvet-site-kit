import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { galleryCategories, galleryImages } from "../data/gallery";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    active === "All" ? galleryImages : galleryImages.filter((i) => i.category === active);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="gallery" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Work we're proud of"
          description="A glimpse of recent looks, rituals and finishing touches from the atelier floor."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full border px-5 py-2 text-xs tracking-[0.16em] uppercase transition-all duration-300 ${
                active === cat
                  ? "border-transparent bg-primary text-primary-foreground shadow-soft"
                  : "border-border bg-card text-muted-foreground hover:border-gold/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((image, i) => (
            <Reveal key={image.id} delay={i * 60}>
              <button
                type="button"
                onClick={() => setLightbox(image)}
                className="group relative block w-full overflow-hidden rounded-[1.75rem] shadow-soft"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/60 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="text-xs tracking-[0.2em] text-primary-foreground uppercase">
                    {image.category}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {lightbox ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/80 p-5 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-card text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-[85vh] w-auto max-w-full rounded-[1.5rem] shadow-luxe"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </section>
  );
}
