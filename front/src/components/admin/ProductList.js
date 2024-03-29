import React, { useEffect } from 'react'
import { MDBDataTable } from 'mdbreact'

import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../actions/productActions'
import {Link} from 'react-router-dom'

const ProductList = () => {
    const { loading, products, error } = useSelector(state => state.products);
    const alert = useAlert();
  
    const dispatch = useDispatch();
    useEffect(() => {
      if(error){
        return alert.error(error)
      }
      dispatch(getProducts());
      alert.success("OK")
    }, [dispatch]);

  const setProducts = () => {
    const data = {
      columns: [
        {
          label: "ID", //cabecera de la tabla
          field: "id", //identificador del campo
          sort: "asc", //orden ascendente
        },
        {
          label: "Nombre",
          field: "nombre",
          sort: "asc",
        },
        {
          label: "Precio",
          field: "precio",
          sort: "asc",
        },
        {
          label: "Inventario",
          field: "inventario",
          sort: "asc",
        },
        {
          label: 'Vendedor',
          field: 'vendedor',
          sort: 'asc'
        },
        {
          label: 'Acciones',
          field: 'actions',
      },
      ],
      rows: [] //Al dejarse vacío, habrán tantas filas como sean necesarias
    }

    products.forEach(product => {
      data.rows.push({
        id: product._id,
        nombre: product.name,
        precio: `$${product.price}`,
        inventario: product.stock,
        vendedor: product.seller,
        actions: <>
                    <Link to={`/product/${product._id}`} className="btn btn-primary py-1 px-2">
                        <i className="fa fa-eye"></i>
                    </Link><Link to="/" className="btn btn-warning py-1 px-2">
                    <i class="fa fa-pencil"></i>
                    </Link>

                    <Link to="/" className="btn btn-danger py-1 px-2">
                        <i className="fa fa-trash"></i>
                    </Link>


                </>
      });
    });

    return data;
  };

  return (
    <>
      <MetaData title={"All Products"} />
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          <>
            <h1 className="my-5">Productos registrados</h1>

            {loading ? (
              <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>
            ) : (
              <MDBDataTable
                data={setProducts()}
                className="px-3"
                bordered
                striped //Borde punteado
                hover
              />
            )}
          </>
        </div>
      </div>
    </>
  );
};

export default ProductList;
