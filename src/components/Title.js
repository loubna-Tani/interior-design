import React, { useEffect } from "react";
import { gsap, TimelineLite, Power3 } from "gsap";

export default function Title({ title }) {
  return (
    <div className="section-title">
      <h4>{title}</h4>
      <div></div>
    </div>
  );
}
