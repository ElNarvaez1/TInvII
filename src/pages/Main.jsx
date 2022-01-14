/**
 *
 * @author Narvaez Ruiz Alexis
 *
 * Archivo principal.
 */
import React, { Component } from "react";
import Header from "../components/Header";
import Home from "./Home";
import Result from "./Result";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AcercaDe from "./AcercaDe";

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="min-vh-100">
        <Router>
        <Header />
          <Routes> 
            {/*-------------Header-----------------*/}
            <Route exact path="/testPages" element={<Home/>} />
            <Route   path="/testPages/:nameGame/:page/:filter" element={<Result/>} />
            <Route   path="/testPages/acerca-de" element={<AcercaDe></AcercaDe>} />
          </Routes>
        </Router>
      </div>
    );
  }
}
