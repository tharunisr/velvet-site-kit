import { MapPin, Phone, MessageCircle } from "lucide-react";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import Reveal from "../components/Reveal";
import { callLink, salonConfig, whatsappLink } from "../config/salonConfig";

export default function Contact() {
  const quickActions = [
    { label: "Call Now", href: callLink(), icon: Phone, primary: true },
    { label: "WhatsApp Us", href: whatsappLink(), icon: MessageCircle },
    { label: "Get Directions", href: salonConfig.mapDirectionsUrl, icon: MapPin },
  ];

  return (
    <main>
      <section className="relative overflow-hidden bg-luxe pt-36 pb-20 sm:pt-44 sm:pb-24">
        <div
          className="animate-shimmer-pulse pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-blush/60 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="animate-float-slow pointer-events-none absolute bottom-6 left-8 hidden h-28 w-28 rounded-3xl border border-gold/40 sm:block"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-5 px-5 text-center sm:px-8">
          <span className="eyebrow">Contact</span>
          <h1 className="text-5xl leading-[1.04] sm:text-6xl">
            Get in <span className="italic text-gilded">Touch</span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            Tell us what you have in mind — a bridal trial, a quiet spa afternoon or a fresh
            new look. We'll take it from there.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <a
                  key={action.label}
                  href={action.href}
                  target={action.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-xs tracking-[0.2em] uppercase transition-transform duration-300 hover:-translate-y-0.5 ${
                    action.primary
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "surface-glass"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {action.label}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr]">
          <ContactInfo />
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 sm:pb-32">
        <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-border shadow-luxe">
          <iframe
            title={`${salonConfig.name} location map`}
            src={salonConfig.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[22rem] w-full border-0 sm:h-[28rem]"
          />
        </Reveal>
      </section>
    </main>
  );
}
