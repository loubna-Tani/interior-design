import React, { Component } from "react";
import { DesignContext } from "../Context";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loading from "./Loading";
import Title from "./Title";
import Room from "./Room";

gsap.registerPlugin(ScrollTrigger);

export default class Blog extends Component {
  static contextType = DesignContext;
  constructor() {
    super();
    this.myElement = [];
    this.title = null;
  }
  componentDidMount() {
    gsap.from([this.myElement, this.title], {
      duration: 1.5,
      y: 200,
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: [this.myElement, this.title],
        start: "top bottom", end: "bottom top",
        toggleActions: "restart none none reset",
      },
    });

  }
  render() {
    let { loading, featuredRooms:rooms } = this.context;
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className=" featured-rooms">
        <div ref={(div) => (this.title = div)}>
          <Title title="Design, trends & how-tos for every room" />
        </div>
        <div className="featured-rooms-center" ref={(div) => (this.myElement = div)}>
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
