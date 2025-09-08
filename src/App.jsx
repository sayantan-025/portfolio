import React, { useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CustomCursor from "./components/CustomCursor";
import PreLoader from "./components/PreLoader";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  const handlePreloaderComplete = () => {
    setPreloaderComplete(true);
  };

  return (
    <ReactLenis
      root
      className="relative w-screen min-h-screen overflow-x-auto"
      options={{
        lerp: 0.07,
        smoothWheel: true,
        smoothTouch: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 0.9,
      }}
      onScroll={() => {
        // Keep GSAP ScrollTrigger in sync with Lenis
        ScrollTrigger.update();
      }}
    >
      <PreLoader onComplete={handlePreloaderComplete} />
      <CustomCursor />
      <Navbar preloaderComplete={preloaderComplete} />
      <Hero preloaderComplete={preloaderComplete} />
      <ServiceSummary />
      <Services />
      <About />
      <Works />
      <ContactSummary />
      <Contact />
    </ReactLenis>
  );
};

export default App;
