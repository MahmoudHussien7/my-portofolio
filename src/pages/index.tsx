import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/Components/Hero";
import Features from "@/Components/Features";
import Gallery from "@/Components/Gallery";
import About from "@/Components/About";
import CTA from "@/Components/CTA";
import Footer from "@/Components/Footer";
import Contact from "@/Components/Contact";
import Navbar from "@/Components/Navbar";
import ThreeStepsSection from "@/Components/ThreeSteps";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <ThreeStepsSection />
      <Gallery />
      {/* <CTA /> */}
      <Contact />
    </>
  );
}
