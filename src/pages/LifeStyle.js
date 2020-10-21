import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import LifeStyleContainer from "../components/LifeStyleContainer";

const LifeStyle = () => {
  return (
    <>
      <Hero hero="lifeStyleHero">
        <Banner title="Find your Lifstyle" subtitle="Discover the life you want to lead. Whether it be a Connector, Creator, or Innovator, your Lifestyle is the way you live your life.">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <LifeStyleContainer/>
     </>
  );
};
export default LifeStyle;
