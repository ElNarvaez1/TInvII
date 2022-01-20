//import logo from './logo.svg';
import "./App.css";
import "./bootstrap.min.css";
import Main from "./pages/Main";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Stores from "./pages/Stores";
import AcercaDe from "./pages/AcercaDe";

import { BrowserRouter as Router, Routes, Route,HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <HashRouter basename={``}>
        <Header />
        <Routes>
          {/*-------------Header-----------------*/}
          <Route exact path="/" element={<Home />} />
          <Route path="/acerca-de" element={<AcercaDe/>} />
          <Route path="/tiendas" element={<Stores />} />
          <Route path="/:nameGame/:page/:filter" element={<Result />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;

/*
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

*/
