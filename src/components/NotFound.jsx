import React from 'react'

const NotFound = ({nameGame}) => {
    return (
        <section className="container">
          <div className="row justify-content-center">
            <div className="alert alert-info" role="alert">
              <p>
                Lo setimos mucho, el servicio no pudo encontrar algo relacionado
                con {nameGame} &#128148;
              </p>
              <p>Cosas que podrias hacer:</p>
              <ul>
                <li>Verifica que el nombre del juego sea el correcto.</li>
                <li>
                  Recuerda que utilizamos el servicio de
                  <a
                    href="https://apidocs.cheapshark.com/"
                    className="alert-link"
                  >
                    {" "}
                    Cheapshark{" "}
                  </a>
                  ,este podria no tener el resgistro que buscas.
                </li>
              </ul>
            </div>
          </div>
        </section>
    )
}
export default NotFound;