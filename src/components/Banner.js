import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Banner({ children, title, subtitle }) {
  let line1 = useRef(null);
  let line2 = useRef(null);

  useEffect(() => {
    gsap.from([line1, line2], 0.5, {
      delay: 0.3,
      ease: " power3.out",
      x: 1300,
      stagger: {
        amount: 0.1,
      },
    });
  }, [line1, line2]);

  return (
    <div className="banner">
      <h1 ref={(el) => (line1 = el)}>{title}</h1>
      <div></div>
      <p ref={(el) => (line2 = el)}>{subtitle}</p>
      {children}
    </div>
  );
}
