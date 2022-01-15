import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Paginate = (props) => {
  const [rootURL, setRootURL] = useState("../")

  const refreshPage = (e) => {
    let rutaNueva= e.target.href;
    //console.log(rutaNueva);
    
    window.location.href = rutaNueva;
    window.location.reload();
  }

  if (props.gamesDeals == 0) {
    return (
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className="page-item">
            <Link
              className="page-link"
              to={`${rootURL}${props.nameGame}/${Number(props.page) - 1}/${
                props.filter
              }/`} 
              onClick={refreshPage}
            >
              Anterior
            </Link>
          </li>
          <li className="page-item active">
            <a className="page-link " href="#">
              {props.page}
            </a>
          </li>
        </ul>
      </nav>
    );
  }
  if (props.page > 0) {
    return (
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className="page-item">
            <Link
              className="page-link"
              to={`${rootURL}${props.nameGame}/${Number(props.page) - 1}/${
                props.filter
              }/`}
              onClick={refreshPage}
            >
              Anterior
            </Link>
          </li>
          <li className="page-item active">
            <a className="page-link " href="#">
              {props.page}
            </a>
          </li>
          <li className="page-item">
            <Link
              className="page-link"
              to={`${rootURL}${props.nameGame}/${Number(props.page) + 1}/${
                props.filter
              }/`}
              onClick={refreshPage}
            >
              Siguiente
            </Link>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className="page-item active">
            <a className="page-link " href="#">
              {props.page}
            </a>
          </li>
          <li className="page-item">
            <Link
              className="page-link"
              to={`${rootURL}${props.nameGame}/${Number(props.page) + 1}/${
                props.filter
              }/`}
              onClick={refreshPage}
            >
              Siguiente
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
};
export default Paginate;
