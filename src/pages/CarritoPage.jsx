import React from 'react';

const Carrito = ({ carrito, dispatch }) => {
  let total = 0;
  carrito.forEach((item) => {
    total += item.precio * item.cantidad;
  });

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
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
                    dispatch({ type: 'Eliminar', nombre: item.nombre })
                  }
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-3">
            <h4>Total: ${total}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;
