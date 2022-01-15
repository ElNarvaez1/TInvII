import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsMenu: [
        { name: "Inicio", ruta: "/TInvII/" },
        { name: "Tiendas", ruta: "/TInvII/tiendas" },
        { name: "Acerca de", ruta: "/TInvII/acerca-de" },
      ],
    };
  }

  render() {
    return (
      <div className="container-fluid bg-light">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/testPages">
                T-InvII
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup" >
                <div className="navbar-nav ">
                  {this.state.itemsMenu.map((items, index) => (
                    <Link className="nav-link" to={items.ruta} key={index}>
                      {items.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
