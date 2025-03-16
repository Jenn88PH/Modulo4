import { useReducer } from 'react';

const carritoReducer = (state, action) => {
  switch (action.type) {
    case 'Agregar':
      return [...state, action.producto];
    case 'Eliminar':
      return state.filter((item) => item.nombre !== action.nombre);

    default:
      return state;
  }
};

export const useCarrito = () => {
  const [carrito, dispatch] = useReducer(carritoReducer, []);
  return { carrito, dispatch };
};
