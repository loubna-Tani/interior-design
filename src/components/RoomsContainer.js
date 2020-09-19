import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { DesignConsumer } from "../Context";
import Loading from "./Loading";
export default function RoomsContainer() {
  return (
    <div>
      hello
      <RoomsFilter />
      <RoomsList />
    </div>
  );
}
