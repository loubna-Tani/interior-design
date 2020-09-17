import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Blog from "../components/Blog";
export default function Home() {
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
