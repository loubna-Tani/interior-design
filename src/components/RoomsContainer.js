import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { DesignConsumer } from "../Context";
import Loading from "./Loading";

export default function RoomsContainer() {
  return (
    <DesignConsumer>
      {(value) => {
        const { loading, sortedRooms, rooms } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
          </>
        );
      }}
    </DesignConsumer>
  );
}
