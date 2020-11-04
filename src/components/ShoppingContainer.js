import React from "react";
import RoomsList from "./RoomsList";
import { DesignConsumer } from "../Context";
import Loading from "./Loading";

export default function ShoppingContainer() {
  return (
    <DesignConsumer>
      {(value) => {
        const { loading, shoppingIdea } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <>
            <RoomsList rooms={shoppingIdea} />
          </>
        );
      }}
    </DesignConsumer>
  );
}