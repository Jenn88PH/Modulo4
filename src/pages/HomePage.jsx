import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productosApple from '../data/productos';

const HomePage = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    //llamamos a los datos

    setTimeout(() => {
      setProductos(productosApple);
    }, 1000);
  }, []);

  return (
    <div className="row">
      {productos.length === 0 ? (
        <div className="col-12 text-center">
          <p className="alert alert-info">Cargando Productos...</p>
        </div>
      ) : (
        productos.map((producto, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <img
                src={producto.imagen}
                className="card-img-top"
                alt={producto.nombre}
              />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <p className="card-text">
                  <strong>Precio:</strong> ${producto.precio}
                </p>
                <Link to={`/producto/${index}`} className="btn btn-info">
                  Ver Detalles
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default HomePage;
