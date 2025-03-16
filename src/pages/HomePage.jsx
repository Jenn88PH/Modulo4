import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="row">
      {productos.map((producto, index) => (
        <div key={index} className="col-md-4 mb-4">
          <div className="card h-100">
            <img className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text"></p>
              <p className="card-text">
                <strong>Precio:</strong>
              </p>
              <Link to={`/producto/${index}`} className="btn btn-primary">
                Ver Detalles
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
