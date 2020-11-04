import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import ShoppingContainer from "../components/ShoppingContainer";

export default function ShoppingGuides() {
  return <>
  <Hero hero="shoppingGuidHero">
    <Banner title="Shopping Guide" subtitle="Discover the life you want to lead. Whether it be a Connector, Creator, or Innovator, your Lifestyle is the way you live your life.">
      <Link to="/" className="btn-primary">
        Return Home
      </Link>
    </Banner>
  </Hero>
  <ShoppingContainer/>
 </>
}
