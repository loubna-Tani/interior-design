import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handlToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/" className="logo">
              <div>Lifstyle by Loubna </div>
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handlToggle}
            >
              <FaAlignRight className="nav-icon"></FaAlignRight>
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/Design">Design</Link>
            </li>
            <li>
              <Link to="/LifStyle">Lifstyle</Link>
            </li>
            <li>
              <Link to="/ShoppingGuides">Shopping Guides</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
