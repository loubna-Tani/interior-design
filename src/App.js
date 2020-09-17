import React from "react";
import "./App.css";
<<<<<<< HEAD
import Home from "./pages/Home";
import Design from "./pages/Design";
import Lifestyle from "./pages/LifeStyle";
import ShoppingGuides from "./pages/ShoppingGuides";
import SignleRoom from "./pages/SignleRoom";

import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
=======
import { Route } from "react-router-dom";

import Home from "./pages/Home";
import Design from "./pages/Design";
import LifStyle from "./pages/LifStyle";
import ShoppingGuides from "./pages/ShoppingGuides";
import Navbar from "./component/Navbar";
>>>>>>> 089cd6d... First commit

function App() {
  return (
    <>
<<<<<<< HEAD
      <Navbar />
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/Design" component={Design}></Route>
      <Route exact path="/Design/:slug" component={SignleRoom}></Route>
      <Route exact path="/LifeStyle" component={Lifestyle}></Route>
      <Route exact path="/ShoppingGuides" component={ShoppingGuides}></Route>
=======
      <Navbar></Navbar>
      <Route exact path="/" component={Home} />
      <Route exact path="/Design" component={Design} />
      <Route exact path="/LifStyle" component={LifStyle} />
      <Route exact path="/ShoppingGuides" component={ShoppingGuides} />
>>>>>>> 089cd6d... First commit
    </>
  );
}

export default App;
