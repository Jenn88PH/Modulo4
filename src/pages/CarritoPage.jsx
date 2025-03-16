import React from 'react';

const Carrito = ({ carrito, dispatch }) => {
  return (
    <div>
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul className="list-group">
          {carrito.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {item.nombre} - ${item.precio}
              <button
                className="btn btn-danger"
                onClick={() =>
                  dispatch({ type: 'ELIMINAR', nombre: item.nombre })
                }
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Carrito;
