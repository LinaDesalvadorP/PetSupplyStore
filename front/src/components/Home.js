import React, { useEffect } from "react";
import MetaData from "./layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import {Link} from "react-router-dom";
import {useAlert } from 'react-alert'

const Home = () => {
  const { loading, products, error } = useSelector((state) => state.products);
  const alert = useAlert();

  const dispatch = useDispatch();
  useEffect(() => {
    if(error){
      return alert.error(error)
    }
    dispatch(getProducts());
    alert.success("OK")
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <i className="fa fa-spinner" aria-hidden="true"></i>
      ) : (
        <>
          <MetaData title="Home" />
          <h1 id="encabezado_productos">Última colección</h1>

          <section id="productos" className="container mt-5">
            <div className="row">
              {products &&
                products.map((product) => (
                  <div
                    key={product._id}
                    className="col-sm-12 col-md-6 col-lg-3 my-3"
                  >
                    <div className="card p-3 rounded">
                      <img
                        className="card-img-top mx-auto"
                        src={product.images[0].url}
                        alt="Falda lentejuelas verde"
                      ></img>
                      <div className="card-body d-flex flex-column">
                        <h5 id="titulo_producto">
                          <Link to={`/product/${product._id}`}>{product.name}</Link>
                        </h5>
                        <div className="rating mt-auto">
                          <div className="rating-outer">
                            <div
                              className="rating-inner"
                              style={{ width: `${(product.score / 5) * 100}%` }}
                            ></div>
                          </div>
                          <span id="No_de_opiniones">
                            {product.numGrades} reviews
                          </span>
                        </div>
                        <p className="card-text">${product.price}</p>
                        <Link
                          to={`/product/${product._id}`}
                          id="view_btn"
                          className="btn btn-block"
                        >
                          Ver detalle
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Home;
