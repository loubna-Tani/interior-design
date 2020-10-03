import React, { Component, useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "../App.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "./Title";
import { DiStylus } from "react-icons/di";
import { BsHouseDoor } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";

export default class Services extends Component {
  constructor() {
    super();
    this.line1 = null;
  }
  state = {
    Services: [
      {
        icon: <BsHouseDoor />,
        title: "Find your happy place",
        info: "Discover home decor inspiration, expertly curated for you.",
      },
      {
        icon: <DiStylus />,
        title: "Find your Lifstyle",
        info:
          "Knowing your Lifestyle is the first step to creating your roadmap for what happens next.",
      },
      {
        icon: <GiShoppingCart />,
        title: "Find the best deals",
        info:
          "Discover my picks for the latest products in home,travel,lifestyle and more.",
      },
    ],
  };

  componentDidMount() {
    gsap.from([this.line1], 0.5, {
      delay: 0.3,
      ease: " power3.out",
      x: 1300,
      stagger: {
        amount: 0.1,
      },
    });
  }

  render() {
    return (
      <section className="services">
        <Title title="Find your Inspirations" />
        <div className="services-center" ref={(div) => (this.line1 = div)}>
          {this.state.Services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
