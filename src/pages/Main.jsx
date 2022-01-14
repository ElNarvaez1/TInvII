/**
 *
 * @author Narvaez Ruiz Alexis
 *
 * Archivo principal.
 */
import React, { Component } from "react";
import Header from "../components/Header";
import Home from "./Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="min-vw-100 min-vh-100 color-dark-game">
        <Router>
        <Header />
          <Routes path="/testPages"> 
            {/*-------------Header-----------------*/}
            <Route index exact path="/testPages" element={<Home/>} />
          </Routes>
        </Router>
      </div>
    );
  }
}
