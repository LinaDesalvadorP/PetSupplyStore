import React from "react";
import MetaData from './layout/MetaData';

const Home = () => {
  return (
    <>
      <MetaData title="Home" />
      <h1 id="encabezado_productos">Última colección</h1>

      <section id="productos" className="container mt-5">
        <div className="row">
          {/*Producto 1*/}
          <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
              <img
                className="card-img-top mx-auto"
                src="./images/FaldaLentejuelasVerdeOscuro.jpg"
                alt="Falda lentejuelas verde"
              ></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto">
                  <a href="http://localhost:3000">Falda de lentejuelas</a>
                </h5>
                <div className="rating mt-auto">
                  <div className="rating-outer">
                    <div className="rating-inner"></div>
                  </div>
                  <span id="No_de_opiniones"> 5 reviews</span>
                </div>
                <p className="card-text">$72.000</p>
                <a
                  href="http://localhost:3000"
                  id="view_btn"
                  className="btn btn-block"
                >
                  Ver detalle
                </a>
              </div>
            </div>
          </div>

          {/*Producto 1*/}
          <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
              <img
                className="card-img-top mx-auto"
                src="./images/FaldaLentejuelasVerdeOscuro.jpg"
                alt="Falda lentejuelas verde"
              ></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto">
                  <a href="http://localhost:3000">Falda de lentejuelas</a>
                </h5>
                <div className="rating mt-auto">
                  <div className="rating-outer">
                    <div className="rating-inner"></div>
                  </div>
                  <span id="No_de_opiniones"> 5 reviews</span>
                </div>
                <p className="card-text">$72.000</p>
                <a
                  href="http://localhost:3000"
                  id="view_btn"
                  className="btn btn-block"
                >
                  Ver detalle
                </a>
              </div>
            </div>
          </div>

          {/*Producto 1*/}
          <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
              <img
                className="card-img-top mx-auto"
                src="./images/FaldaLentejuelasVerdeOscuro.jpg"
                alt="Falda lentejuelas verde"
              ></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto">
                  <a href="http://localhost:3000">Falda de lentejuelas</a>
                </h5>
                <div className="rating mt-auto">
                  <div className="rating-outer">
                    <div className="rating-inner"></div>
                  </div>
                  <span id="No_de_opiniones"> 5 reviews</span>
                </div>
                <p className="card-text">$72.000</p>
                <a
                  href="http://localhost:3000"
                  id="view_btn"
                  className="btn btn-block"
                >
                  Ver detalle
                </a>
              </div>
            </div>
          </div>

          {/*Producto 1*/}
          <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
              <img
                className="card-img-top mx-auto"
                src="./images/FaldaLentejuelasVerdeOscuro.jpg"
                alt="Falda lentejuelas verde"
              ></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto">
                  <a href="http://localhost:3000">Falda de lentejuelas</a>
                </h5>
                <div className="rating mt-auto">
                  <div className="rating-outer">
                    <div className="rating-inner"></div>
                  </div>
                  <span id="No_de_opiniones"> 5 reviews</span>
                </div>
                <p className="card-text">$72.000</p>
                <a
                  href="http://localhost:3000"
                  id="view_btn"
                  className="btn btn-block"
                >
                  Ver detalle
                </a>
              </div>
            </div>
          </div>

          {/*Producto 1*/}
          <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
              <img
                className="card-img-top mx-auto"
                src="./images/FaldaLentejuelasVerdeOscuro.jpg"
                alt="Falda lentejuelas verde"
              ></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto">
                  <a href="http://localhost:3000">Falda de lentejuelas</a>
                </h5>
                <div className="rating mt-auto">
                  <div className="rating-outer">
                    <div className="rating-inner"></div>
                  </div>
                  <span id="No_de_opiniones"> 5 reviews</span>
                </div>
                <p className="card-text">$72.000</p>
                <a
                  href="http://localhost:3000"
                  id="view_btn"
                  className="btn btn-block"
                >
                  Ver detalle
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
