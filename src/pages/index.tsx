import SEO from "@/Components/SEO";
import Hero from "@/Components/Hero";
import Features from "@/Components/Features";
import Gallery from "@/Components/Gallery";
import About from "@/Components/About";
import CTA from "@/Components/CTA";
import Contact from "@/Components/Contact";
import ThreeStepsSection from "@/Components/ThreeSteps";
import { Experience } from "@/Components/Exp";
import {
  PAGE_SEO,
  buildPersonSchema,
  buildWebPageSchema,
  buildWebSiteSchema,
} from "@/lib/seo";

export default function Home() {
  return (
    <>
      <SEO
        seo={PAGE_SEO.home}
        schema={[
          buildWebSiteSchema(),
          buildPersonSchema(),
          buildWebPageSchema(PAGE_SEO.home),
        ]}
      />
      <Hero />
      <Features />
      <About />
      <ThreeStepsSection />
      <Gallery />
      <Experience />
      <CTA />
      <Contact />
    </>
  );
}
