import React, { useEffect, useState } from "react";

const Stores = (props) => {
  const [stores, setStores] = useState([]);
  useEffect(() => {
    loadStores();

    document.title  = "Tiendas";
  }, []);

  const loadStores = async () => {
    const URL_STORS = `https://www.cheapshark.com/api/1.0/stores`;
    let storsQuery = await fetch(URL_STORS);
    let storsJSON = await storsQuery.json();
    let storsArray = Object.keys(storsJSON).map((key) => storsJSON[key]);
    setStores(storsArray);
  };

  return (
    <div className="container mt-5">
      <h2 className="my-3">Tiendas</h2>
      <p>Listado de las tiendas de las cuales soportan este servicio</p>
      <ul>
          <li>&#127829; Tiendas Activas.</li>
          <li>&#10060; Tiendas no activas.</li>
      </ul>
      <div className="row mt-5 justify-content-center">
        <div className="col-md-8 mb-5">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre de la tienda</th>
                <th scope="col">Activa</th>
              </tr>
            </thead>
            <tbody>
              {stores.map((element,index) => (
                <tr key={index}>
                  <th scope="row" className="col-sm-3">
                    {element.storeID}
                  </th>
                  <td className="col-sm-3">{element.storeName}</td>
                  <td className="col-sm-9">{ (element.isActive)?`🍕`:'❌'}</td>
                </tr>
              ))}
            </tbody>
          </table> 
        </div>
      </div>
    </div>
  );
};
export default Stores;
