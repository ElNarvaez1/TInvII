/**
 *
 * @author Narvaez Ruiz Alexis
 *
 * Archivo principal.
 */
import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "./Home";
import Result from "./Result";
import Stores from "./Stores";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AcercaDe from "./AcercaDe";

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="min-vh-100 d-flex flex-column">
        <Router>
        <Header />
          <Routes> 
            {/*-------------Header-----------------*/}
            <Route exact path="/TInvII" element={<Home/>} />
            <Route   path="/TInvII/:nameGame/:page/:filter" element={<Result/>} />
            <Route   path="/TInvII/acerca-de" element={<AcercaDe></AcercaDe>} />
            <Route   path="/TInvII/tiendas" element={<Stores></Stores>} />
          </Routes>
        </Router>
        <Footer/>
      </div>
    );
  }
}
