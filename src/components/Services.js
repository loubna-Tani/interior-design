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
        title: "",
        info: "Discover home decor inspiration, expertly curated for you.",
      },
      {
        icon: <DiStylus />,
        title: "",
        info: "Discover home decor inspiration, expertly curated for you.",
      },
      {
        icon: <GiShoppingCart />,
        title: "",
        info: "Discover home decor inspiration, expertly curated for you.",
      },
    ],
  };
  render() {
    return (
      <div>
        <Title title="Find your Inspiration" />
      </div>
    );
  }
}
