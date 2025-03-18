import { createContext, useContext, useMemo, useReducer } from 'react';

const initialState = [];
const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'addItem': {
      const productExistente = state.find(
        (item) => item.id === action.product.id
      );
      if (productExistente) {
        return state.map((item) =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + action.product.quantity }
            : item
        );
      } else {
        return [...state, action.product];
      }
    }
    case 'RemoveItem':
      return state.filter((item) => item.id !== action.id);
    case 'IncreaseItem':
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    case 'ReduceItem': {
      return state
        .map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    }
    default:
      return state;
  }
};

export const useCartContext = () => useContext(CartContext);

// Provide Context to App
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={useMemo(() => ({ cart, dispatch }), [cart])}>
      {children}
    </CartContext.Provider>
  );
};
