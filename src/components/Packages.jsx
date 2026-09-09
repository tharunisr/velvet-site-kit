import { packages } from "../data/packages";
import PackageCard from "./PackageCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Packages() {
  return (
    <section id="packages" className="bg-secondary/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Beauty packages"
          title="Curated from glow to grand"
          description="Thoughtfully bundled treatments with clear pricing — upgrade or personalise any package at booking."
        />

        <div className="mt-16 grid items-stretch gap-7 lg:grid-cols-3">
          {packages.map((pack, i) => (
            <Reveal key={pack.id} delay={i * 100} className="h-full">
              <PackageCard pack={pack} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
