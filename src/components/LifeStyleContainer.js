import React from "react";
import RoomsList from "./RoomsList";
import { DesignConsumer } from "../Context";
import Loading from "./Loading";

export default function LifeStyleContainer() {
  return (
    <DesignConsumer>
      {(value) => {
        const { loading, lifeStyleIdea } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <>
            <RoomsList rooms={lifeStyleIdea} />
          </>
        );
      }}
    </DesignConsumer>
  );
}
