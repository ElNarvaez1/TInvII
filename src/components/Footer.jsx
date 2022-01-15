import React, { Component } from "react";

/**
 * @author Narvaez Ruiz Alexis
 *
 * Componente del pie de pagina.
 */
export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devps: [
        {
          nombre: "Narvaez Ruiz Alexis",
          link: "https://www.facebook.com/profile.php?id=100005124437628",
        },
        {
          nombre: "Ramirez Oscar",
          link: "https://www.facebook.com/profile.php?id=100004668430565",
        },
      ],
    };
  }
  render() {
    return (
      <footer className="container mt-auto">
        <nav className="navbar navbar-light">
          <div className="container-fluid">
            <ul className="list-unstyled">
              {this.state.devps.map((dev, index) => (
                <li key={index} className="text-start p-2 m-2">
                  <a href={dev.link} target="_blank" className="p-2 m-2">
                    {dev.nombre}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </footer>
    );
  }
}
