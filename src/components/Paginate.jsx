import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Paginate = (props) => {
  if (props.gamesDeals == 0) {
    return (
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className="page-item">
            <a
              className="page-link"
              href={`/testPages/${props.nameGame}/${Number(props.page) - 1}/${
                props.filter
              }/`}
            >
              Anterior
            </a>
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
            <a
              className="page-link"
              href={`/testPages/${props.nameGame}/${Number(props.page) - 1}/${
                props.filter
              }/`}
            >
              Anterior
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link " href="#">
              {props.page}
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              href={`/testPages/${props.nameGame}/${Number(props.page) + 1}/${
                props.filter
              }/`}
            >
              Siguiente
            </a>
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
            <a
              className="page-link"
              href={`/testPages/${props.nameGame}/${Number(props.page) + 1}/${
                props.filter
              }/`}
            >
              Siguiente
            </a>
          </li>
        </ul>
      </nav>
    );
  }
};
export default Paginate;
