import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import HomePage from './pages/HomePage';
import ProductoPage from './pages/ProductoPage';
import CarritoPage from './pages/CarritoPage';

import { useCarrito } from './hook/useReducer';

function App() {
  const { carrito, dispatch } = useCarrito();

  return (
    <Router>
      <Navbar carrito={carrito} />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/producto/:id"
            element={<ProductoPage dispatch={dispatch} />}
          />
          <Route
            path="/carrito"
            element={<CarritoPage carrito={carrito} dispatch={dispatch} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
