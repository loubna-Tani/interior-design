import React, { useRef, useEffect, Component } from "react";
import { DesignContext } from "../Context";
import Loading from "./Loading";
import Title from "./Title";
import Room from "./Room";
import { TweenMax, TimelineLite, Power3 } from "gsap";

export default class Blog extends Component {
  static contextType = DesignContext;

  componentDidMount() {
    const app = useRef(null);
    const images = useRef(null);
    const tl = new TimelineLite();
    useEffect(() => {
      TweenMax.to(app.current, 0, { CSS: { visibility: "visible" } });
      tl.from(images.current, 1.2, { y: 1280, ease: Power3.easeOut });
    });
  }

  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className=" featured-rooms">
        <Title title="Design, trends & how-tos for every room" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
