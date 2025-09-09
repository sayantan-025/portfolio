import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const ContactSummary = () => {
  const containerRef = useRef(null);
  const items = [
    "Innovation",
    "Precision",
    "Trust",
    "Collaboration",
    "Excellence",
  ];
  const items2 = [
    "contact us",
    "contact us",
    "contact us",
    "contact us",
    "contact us",
  ];

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        markers: false,
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16 overflow-x-hidden"
    >
      {/* top marquee */}
      <div className="w-full overflow-hidden">
        <Marquee items={items} />
      </div>

      {/* center text */}
      <div className="overflow-hidden font-light text-center contact-text-responsive px-4">
        <p>
          “ Let’s build a <br />
          <span className="font-normal">memorable</span> &{" "}
          <span className="italic">inspiring</span> <br />
          web application <span className="text-gold">together</span> “
        </p>
      </div>

      {/* bottom marquee */}
      <div className="w-full overflow-hidden">
        <Marquee
          items={items2}
          reverse={true}
          className="text-black bg-transparent border-y-2"
          iconClassName="stroke-gold stroke-2 text-primary"
          icon="material-symbols-light:square"
        />
      </div>
    </section>
  );
};

export default ContactSummary;
