import React, { Component } from "react";
import { DesignContext } from "../Context";

export default class Blog extends Component {
  static contextType = DesignContext;

  render() {
    const value = this.context;
    return <div>hello loubna {value}</div>;
  }
}
