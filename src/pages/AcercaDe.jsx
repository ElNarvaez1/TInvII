import React, { Component, useState } from "react";
import Avatar from "../components/Avatar";

import imgOscar from "../37453654.png";
import imgNarvaez from "../narvaez.jpg";

export default function AcercaDe() {
  const [desarrolladores, setInformation] = useState([
    {
      nombre: "Narvaez Ruiz Alexis",
      descripcion: "Profa no nos repruebe , la quiero mucho :,,,)",
      avatar: imgNarvaez,
    },
    {
      nombre: "Ramirez Oscar Alexis",
      descripcion:
      "Alumno del 9no semestre de la carrera ing en sistemas computacionales",
      avatar: imgOscar,
    },
  ]);

  return (
    <section>
      <div className="container mb-1">
        <h1 className="h4 text-start my-3 ">Desarrolladores.</h1>
        <div className="row justify-content-around">
          {desarrolladores.map((desarrollador, index) => (
            <Avatar
              key={index}
              avatar={desarrollador.avatar}
              nombre={desarrollador.nombre}
              descripcion={desarrollador.descripcion}
            />
          ))}
        </div>
      </div>
      <div className="container mb-5 mt-2">
        <h1 className="h4 text-start mb-3">Cosas importantes.</h1>
        <div className="row">
             <p className="col-md-6 col-sm-12 p-2 text-start">
                ¡Recuerda!, Esta es una aplicacion que utiliza el servicio de <a href="https://apidocs.cheapshark.com/">cheapshark </a> 
                 el cual nos proporciona la informacion necesaria para que la aplicación pueda funcionar, lo cual puede producir algunos
                problemas como:
                <ul className="mt-2">
                  <li>Links rotos :c</li>
                  <li>Deteccion de robots por parte de las tiendas.</li>
                  <li>Algunos juegos puede no encontrarlos.</li>
                  <li>Algunos busquedas pueden no ser juegos, debido a la pagina de origen.</li>
                </ul>
             </p>   
             <p className="col-md-6 col-sm-12 p-2 text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
             </p>   
        </div>
      </div>
    </section>
  );
}
