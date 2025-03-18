import React from 'react';
import appleProducts from '../data/appleProducts'; // Asegúrate de importar correctamente la lista de products
import { useCartContext } from '../hook/useCartContext';

const Cart = () => {
  const { cart, dispatch } = useCartContext();

  const calcularTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Función para agregar un product al cart
  const agregarAlCart = (product) => {
    // Cuando se hace clic en un product, se agrega al cart con quantity 1
    dispatch({ type: 'addItem', product: { ...product, quantity: 1 } });
  };

  return (
    <div>
      <h2>Cart de Compras</h2>
      {cart.length === 0 ? (
        <p>No hay products en el cart.</p>
      ) : (
        <ul className="list-group">
          {cart.map((product) => (
            <li
              key={product.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>
                {product.name} - ${product.price} x {product.quantity}
              </span>
              <div>
                <button
                  className="btn btn-secondary mx-1"
                  onClick={() =>
                    dispatch({ type: 'ReduceItem', id: product.id })
                  }
                >
                  -
                </button>
                <button
                  className="btn btn-secondary mx-1"
                  onClick={() =>
                    dispatch({ type: 'IncreaseItem', id: product.id })
                  }
                >
                  +
                </button>
                <button
                  className="btn btn-danger mx-1"
                  onClick={() =>
                    dispatch({ type: 'RemoveItem', id: product.id })
                  }
                >
                  RemoveItem
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3 className="mt-3">Total: ${calcularTotal()}</h3>
    </div>
  );
};

export default Cart;
