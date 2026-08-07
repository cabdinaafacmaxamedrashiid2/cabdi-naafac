import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Stats />
      <Projects />
      <Gallery />
      <Experience />
      <Education />
      <FAQ />
      <Contact />
    </>
  );
}
