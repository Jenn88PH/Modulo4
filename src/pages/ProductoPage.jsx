import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productosApple from '../data/productos';

const ProductoPage = ({ dispatch }) => {
  const { id } = useParams();
  const producto = productosApple[id];
  const [cantidad, setCantidad] = useState(1);

  return (
    <div className="card">
      <img
        src={producto.imagen}
        className="card-img-top"
        alt={producto.nombre}
      />
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">{producto.descripcion}</p>
        <p>
          <strong>Precio:</strong>
          {producto.precio} $
        </p>
        <div>
          <button onClick={() => setCantidad(cantidad - 1)}>-</button>
          <span>{cantidad}</span>
          <button onClick={() => setCantidad(cantidad + 1)}>+</button>
        </div>
        <button
          className="btn btn-success"
          onClick={() =>
            dispatch({ type: 'AGREGAR', producto: { ...producto, cantidad } })
          }
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ProductoPage;
