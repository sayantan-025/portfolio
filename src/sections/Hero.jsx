import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = ({ preloaderComplete = false }) => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const heroRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const text = `I help growing brands and startups gain an
unfair advantage through premium
results driven webs/apps`;

  // Trigger animations when preloader completes
  React.useEffect(() => {
    if (preloaderComplete) {
      setShouldAnimate(true);
    }
  }, [preloaderComplete]);

  useGSAP(() => {
    if (!shouldAnimate) return;

    // Initial state - hide hero content
    gsap.set(heroRef.current, { opacity: 0, y: 50 });

    // Animate hero in
    gsap.to(heroRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power3.out",
    });
  }, [shouldAnimate]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="flex flex-col justify-end min-h-screen"
      style={{ opacity: 0 }}
    >
      <AnimatedHeaderSection
        subTitle={"404 No Bugs Found"}
        title={"Sayantan"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={false}
        shouldAnimate={shouldAnimate}
      />
      <figure
        className="absolute inset-0 -z-50"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas
          shadows
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
        >
          <ambientLight intensity={0.5} />
          <Float speed={0.5}>
            <Planet scale={isMobile ? 0.7 : 1} shouldAnimate={shouldAnimate} />
          </Float>
          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 5, -9]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 3, 1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[-5, -1, -1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[10, 1, 0]}
                scale={16}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
