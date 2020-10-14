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
      duration: 2,
      y: "100",
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: [this.myElement, this.title],
        start: "top 95%",
        end: "bottom 50%",
        toggleActions: "restart complete reves",
      },
    });
    gsap.from([this.title], {
      duration: 2,
      y: "100",
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: [this.title],
        start: "top 95%",
        end: "bottom 50%",
        toggleActions: "restart complete reves",
      },
    });
  }
  render() {
    let { loading, rooms } = this.context;
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className=" featured-rooms">
        <div ref={(div) => (this.title = div)}>
          <Title title="Design, trends & how-tos for every room" />
        </div>
        <div
          className="featured-rooms-center"
          ref={(div) => (this.myElement = div)}
        >
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
