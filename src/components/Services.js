import React, { Component } from "react";
import Title from "./Title";
import { DiStylus } from "react-icons/di";
import { BsHouse } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";

export default class Services extends Component {
  state = {
    Services: [
      {
        icon: <BsHouse />,
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
  render() {
    return (
      <section className="services">
        <Title title="Find your Inspirations" />
        <div className="services-center">
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
