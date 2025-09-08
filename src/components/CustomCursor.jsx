import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const moveX = useRef(null);
  const moveY = useRef(null);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    moveX.current = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.2,
      ease: "power3.out",
    });
    moveY.current = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.2,
      ease: "power3.out",
    });

    const handleMove = (e) => {
      moveX.current(e.clientX);
      moveY.current(e.clientY);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor pointer-events-none fixed z-[9999] hidden md:block"
      aria-hidden
      style={{
        width: 16,
        height: 16,
        transform: "translate(-50%, -50%)",
        borderRadius: "50%",
        background: "#ffffff",
        mixBlendMode: "difference",
      }}
    />
  );
};

export default CustomCursor;
