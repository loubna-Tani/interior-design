import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Design from "./pages/Design";
import Lifestyle from "./pages/LifeStyle";
import ShoppingGuides from "./pages/ShoppingGuides";

import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/Design" component={Design}></Route>
      <Route exact path="/LifeStyle" component={Lifestyle}></Route>
      <Route exact path="/ShoppingGuides" component={ShoppingGuides}></Route>
    </>
  );
}

export default App;
