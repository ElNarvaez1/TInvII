import React, { useEffect, useState } from "react";
import Avatar from "../components/Avatar";

import imgOscar from "../37453654.png";
import imgNarvaez from "../narvaez.jpg";

export default function AcercaDe() {
  useEffect(() => {
    document.title = "Acerca de";
  }, []);

  const [desarrolladores, setInformation] = useState([
    {
      nombre: "Narvaez Ruiz Alexis",
      descripcion: "Profa no nos repruebe , la quiero mucho :,,,(",
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
            ¡Recuerda!, Esta es una aplicacion que utiliza el servicio de{" "}
            <a href="https://apidocs.cheapshark.com/">cheapshark </a>
            el cual nos proporciona la informacion necesaria para que la
            aplicación pueda funcionar.
          </p>
          <p className="col-md-6 col-sm-12 p-2 text-start">
            Tambien utilizamos "React" y esta es su definicon.<br/> "React es una
            biblioteca Javascript de código abierto diseñada para crear
            interfaces de usuario con el objetivo de facilitar el desarrollo de
            aplicaciones en una sola página. Es mantenido por Facebook y la
            comunidad de software libre."
          </p>
        </div>
      </div>
    </section>
  );
}
