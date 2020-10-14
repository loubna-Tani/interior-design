import React, { Component } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "./Title";
import { DiStylus } from "react-icons/di";
import { BsHouseDoor } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";

gsap.registerPlugin(ScrollTrigger);

export default class Services extends Component {
  constructor() {
    super();
    this.myElement = [];
    this.title = null;
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
    gsap.from([this.myElement, this.title], {
      duration: 2,
      y: "100",
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: [this.myElement, this.title],
        start: "top 90%",
        end: "bottom 50%",
        toggleActions: "restart complete reves",
      },
    });
  }

  render() {
    return (
      <section className="services">
        <div ref={(div) => (this.title = div)}>
          <Title title="Find your Inspirations" />
        </div>
        <div className="services-center">
          {this.state.Services.map((item, index) => {
            return (
              <article
                key={index}
                className="service"
                ref={(div) => (this.myElement[index] = div)}
              >
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
