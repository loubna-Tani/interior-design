import React from "react";
<<<<<<< HEAD
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Design = () => {
  return (
    <Hero hero="roomsHero">
      <Banner title="Discover home decor inspiration">
=======
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import { Link } from "react-router-dom";

export const Design = () => {
  return (
    <Hero hero="roomsHero">
      <Banner title="Design Ideas">
>>>>>>> 089cd6d... First commit
        <Link to="/" className="btn-primary">
          Return Home
        </Link>
      </Banner>
    </Hero>
  );
};
<<<<<<< HEAD

=======
>>>>>>> 089cd6d... First commit
export default Design;
