import React from 'react'

 const Paginate = () => {
    return (
        <>
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link" type="button" name="prev">
              Anterior
            </button>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              {page}
            </a>
          </li>
          <li className="page-item">
            <button
              className="page-link"
              type="submit"
              name="next"
              onClick={nextPage}
            >
              Siguiente
            </button>
          </li>
        </ul>
      </nav>
    </>
    )
}
export default Paginate;
