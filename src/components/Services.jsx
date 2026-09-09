import { services } from "../data/services";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="bg-secondary/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our services"
          title="Rituals crafted for every detail"
          description="From a quick glow-up to a full bridal transformation, each service is tailored, unhurried and finished to an editorial standard."
        />

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 80}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
