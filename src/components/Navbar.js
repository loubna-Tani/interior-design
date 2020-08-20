import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  //function toggle
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/" className="logo">
              <div>LifStyle by Loubna</div>
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
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
              <Link to="/LifeStyle">LifeStyle</Link>
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
