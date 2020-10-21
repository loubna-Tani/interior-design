import React, { useEffect } from "react";
import { TimelineLite } from "gsap";

export default function Banner({ children, title, subtitle }) {
  let l1 = new TimelineLite({ delay: 0.3 });

  useEffect(() => {
    l1.from(
      ".banner",
      1.5,
      {
        duration: 2,
        y: "100",
        opacity: 0,
        ease: "ease-in",
      },
      "Start"
    );
  });

  return (
    <div className="banner">
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
}
