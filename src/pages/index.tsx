import Hero from "@/Components/Hero";
import Features from "@/Components/Features";
import Gallery from "@/Components/Gallery";
import About from "@/Components/About";
import Contact from "@/Components/Contact";
import ThreeStepsSection from "@/Components/ThreeSteps";
import { Experience } from "@/Components/Exp";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <ThreeStepsSection />
      <Gallery />
      <Experience />
      {/* <CTA /> */}
      <Contact />
    </>
  );
}
