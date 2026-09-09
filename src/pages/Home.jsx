import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import FeaturedExperience from "../components/FeaturedExperience";
import Gallery from "../components/Gallery";
import Packages from "../components/Packages";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <FeaturedExperience />
      <Gallery />
      <Packages />
      <Testimonials />
      <CTA />
    </main>
  );
}
