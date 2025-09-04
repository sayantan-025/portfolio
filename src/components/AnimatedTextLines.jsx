import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import React, { useRef } from "react";

const AnimatedTextLines = ({ text, className }) => {
  const containerRef = useRef(null);
  const linesRef = useRef([]);

  const lines = text.split("\n").filter((line) => line.trim() !== "");

  useGSAP(() => {
    if (linesRef.current.length > 0) {
      gsap.from(linesRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        ease: "back.out",
        ScrollTrigger: {
          trigger: containerRef.current,
        },
      });
    }
  });

  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, index) => (
        <span
          className="block leading-relaxed tracking-wide text-pretty"
          key={index}
          ref={(el) => (linesRef.current[index] = el)}
        >
          {line}
        </span>
      ))}
    </div>
  );
};

export default AnimatedTextLines;
