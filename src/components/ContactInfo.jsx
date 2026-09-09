import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { callLink, salonConfig, whatsappLink } from "../config/salonConfig";
import Reveal from "./Reveal";

export default function ContactInfo() {
  const cards = [
    {
      icon: MapPin,
      title: "Visit us",
      lines: [salonConfig.address.line1, salonConfig.address.line2],
      href: salonConfig.mapDirectionsUrl,
      action: "Get directions",
    },
    {
      icon: Phone,
      title: "Call us",
      lines: [salonConfig.phone],
      href: callLink(),
      action: "Call now",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      lines: [salonConfig.phone],
      href: whatsappLink(),
      action: "Message us",
    },
    {
      icon: Mail,
      title: "Email",
      lines: [salonConfig.email],
      href: `mailto:${salonConfig.email}`,
      action: "Write to us",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-5 sm:grid-cols-2">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <Reveal key={card.title} delay={i * 80}>
              <div className="h-full rounded-[1.75rem] border border-border bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-luxe">
                <span className="grid h-11 w-11 place-items-center rounded-2xl border border-gold/40 bg-secondary">
                  <Icon className="h-5 w-5 text-gold" />
                </span>
                <h3 className="mt-4 text-xl">{card.title}</h3>
                {card.lines.map((line) => (
                  <p key={line} className="mt-1 text-sm break-words text-muted-foreground">
                    {line}
                  </p>
                ))}
                <a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="mt-4 inline-block text-[0.68rem] tracking-[0.2em] uppercase transition-colors hover:text-gold"
                >
                  {card.action}
                </a>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={120}>
        <div className="rounded-[1.75rem] border border-border bg-secondary/60 p-6">
          <h3 className="inline-flex items-center gap-2 text-xl">
            <Clock className="h-4 w-4 text-gold" />
            Opening hours
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {salonConfig.openingHours.map((row) => (
              <li
                key={row.days}
                className="flex flex-wrap justify-between gap-2 border-b border-border/70 pb-2 last:border-0"
              >
                <span className="text-muted-foreground">{row.days}</span>
                <span>{row.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}
