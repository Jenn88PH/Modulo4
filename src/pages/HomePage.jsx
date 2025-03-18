import React from 'react';
import { Link } from 'react-router-dom';
import appleProducts from '../data/appleProducts';

const HomePage = () => {
  return (
    <div className="row">
      {appleProducts.map((product) => (
        <div key={product.id} className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <img
              src={product.image}
              className="card-img-top"
              alt={product.name}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">
                <strong>Precio:</strong> ${product.price}
              </p>
              <Link to={`/product/${product.id}`} className="btn btn-info">
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
