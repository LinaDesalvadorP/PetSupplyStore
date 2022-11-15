import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <Link to="/">
              <img src="../images/coala.png" alt="Coala Store Logo"></img>
            </Link>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <div className="input-group">
            <input
              type="text"
              id="search_field"
              className="form-control"
              placeholder="Que producto busca?"
            ></input>
            <div className="input-group-append">
              <button id="search-btn" className="btn">
                <i
                  className="fa fa-search fa-2x text-white"
                  aria-hidden="true"
                ></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <div className="ml-4 dropdown d-inline">
            <Link
              to="#!"
              className="btn dropdown-toggle text-white mr-4"
              type="button"
              id="dropDownMenu"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span>Panel de control</span>
            </Link>
            <div className="dropdown-menu" aria-labelledby="dropDownMenu">
              <Link className="dropdown-item" to="/dashboard">
                Dashboard
              </Link>
              <Link className="dropdown-item" to="/">
                Pedidos
              </Link>
              <Link className="dropdown-item" to="/">
                Mi cuenta
              </Link>
              <Link className="dropdown-item" to="/">
                Cerrar Sesion
              </Link>
            </div>
          </div>

          <Link to="/carrito">
            <i
              className="fa fa-shopping-cart fa-2x text-white"
              aria-hidden="true"
            ></i>
            <span className="ml-1" id="cart_count">
              2
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
