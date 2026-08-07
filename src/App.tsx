import { useState } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Certificates from "@/components/sections/Certificates";
import Achievements from "@/components/sections/Achievements";
import Services from "@/components/sections/Services";
import GitHubSection from "@/components/sections/GitHubSection";
import Contact from "@/components/sections/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Skills />
        <Education />
        <Certificates />
        <Achievements />
        <Services />
        <GitHubSection />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </ThemeProvider>
  );
}
