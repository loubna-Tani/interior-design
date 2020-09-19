import React, { Component } from "react";
import { DesignContext } from "../Context";
import Loading from "./Loading";
import Title from "./Title";
import Room from "./Room";

export default class Blog extends Component {
  static contextType = DesignContext;

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
