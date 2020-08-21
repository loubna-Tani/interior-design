import React, { Component } from "react";

const DesignContext = React.createContext();

class DesignProvider extends Component {
  state = {};

  render() {
    return (
      <DesignContext.Provider value={"hello"}>
        {this.props.children}
      </DesignContext.Provider>
    );
  }
}

const DesignConsumer = DesignContext.Consumer;
export { DesignProvider, DesignConsumer, DesignContext };
