import React, { useRef, useEffect } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Blog from "../components/Blog";
import { TweenMax, TimelineLite, Power3 } from "gsap";

export default function Home() {
  let app = useRef(null);
  let images = useRef(null);
  let tl = new TimelineLite();

  useEffect(() => {
    TweenMax.to(app.current, 0, { CSS: { visibility: "visible" } });
    tl.from(images.current, 1.2, { y: 1280, ease: Power3.easeOut });
  });

  return (
    <>
      <Hero>
        <Banner
          title="Interior design and Lifstyle Ideas"
          subtitle="Explore interior design ideas, save them to inspire your next project, and shop your favorite products."
        ></Banner>
      </Hero>
      <Services />
      <Blog />
    </>
  );
}
