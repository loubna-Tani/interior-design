import React, { Component } from "react";
import Title from "../component/Title";
import { DiStylus } from "react-icons/di";
import { BsHouseDoor } from "react-icons/bs";
import { GiFamilyHouse, GiShoppingCart, GiMushroomHouse } from "react-icons/gi";

export default class DesignIdeas extends Component {
  state = {
    design: [
      {
        icon: <GiMushroomHouse />,
        title: "Find your happy place",
        info: "Discover home decor inspiration, expertly curated for you.",
      },
      {
        icon: <DiStylus />,
        title: "Find your life style",
        info:
          "Discover the life you want to lead.Knowing your Lifestyle is the first step to creating your roadmap for what happens next.",
      },
      {
        icon: <GiShoppingCart />,
        title: "Find the best prices and deals",
        info:
          "Discover My picks for the latest products in home, garden, office, travel, lifestyle, and more.",
      },
    ],
  };
  render() {
    return (
      <div className="services">
        <Title title="Find Your Style" />
        <div className="services-center">
          {this.state.design.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </div>
    );
  }
}
