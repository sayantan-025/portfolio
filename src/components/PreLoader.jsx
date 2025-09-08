import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const PreLoader = ({ onComplete }) => {
  const screenRef = useRef(null);
  const textRef = useRef(null);
  const percentRef = useRef(null);

  useGSAP(() => {
    // Initial state
    gsap.set(textRef.current, { scale: 0, rotation: 180 });
    gsap.set(percentRef.current, { opacity: 0, y: 20 });

    // Animate in
    gsap.to(textRef.current, {
      scale: 1,
      rotation: 0,
      duration: 1,
      ease: "back.out(1.7)",
    });

    // Show percentage counter
    gsap.to(percentRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      delay: 0.5,
      ease: "power2.out",
    });

    // Animate percentage from 0 to 100
    gsap.to(percentRef.current, {
      innerHTML: 100,
      duration: 2.5,
      delay: 1,
      ease: "power2.inOut",
      snap: { innerHTML: 1 },
      onUpdate: function () {
        const currentValue = Math.round(this.targets()[0].innerHTML);
        this.targets()[0].innerHTML = currentValue + "%";
      },
    });

    // Hold for a moment
    gsap.to(textRef.current, {
      scale: 1.1,
      duration: 0.5,
      delay: 1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });

    // Animate out
    gsap.to(textRef.current, {
      scale: 0,
      rotation: -180,
      duration: 0.8,
      delay: 2.5,
      ease: "back.in(1.7)",
    });

    // Fade out screen and trigger hero animations
    gsap.to(screenRef.current, {
      opacity: 0,
      duration: 0.5,
      delay: 3.3,
      ease: "power1.inOut",
      onComplete: () => {
        // Trigger hero animations when preloader completes
        if (onComplete) {
          onComplete();
        }
      },
    });
  }, [onComplete]);

  return (
    <div
      ref={screenRef}
      className="loading-screen fixed inset-0 z-50 pointer-events-none bg-black text-white flex items-center justify-center"
    >
      <div
        ref={textRef}
        className="text-[200px] sm:text-[300px] md:text-[400px] font-black tracking-tight"
        style={{ fontFamily: "var(--font-amiamie)" }}
      >
        S
      </div>

      {/* Percentage counter in bottom right */}
      <div
        ref={percentRef}
        className="absolute bottom-8 right-8 text-4xl sm:text-5xl md:text-6xl font-light italic text-white/80"
        style={{ fontFamily: "var(--font-amiamie)" }}
      >
        0%
      </div>
    </div>
  );
};

export default PreLoader;
