import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import appleProducts from '../data/appleProducts';
import { useCartContext } from '../hook/useCartContext';

const ProductPage = () => {
  const { dispatch } = useCartContext();

  const { id } = useParams();
  const product = appleProducts.find((p) => p.id === parseInt(id));
  const [quantity, setCantidad] = useState(1);

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  const handleAddToCart = () => {
    dispatch({ type: 'addItem', product: { ...product, quantity } });
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img
        src={product.image}
        className="card-img-top img-"
        alt={product.name}
      />

      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p>
          <strong>Precio:</strong>
          {product.price} $
        </p>
        <div>
          <button onClick={() => setCantidad(quantity - 1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setCantidad(quantity + 1)}>+</button>
        </div>
        <button className="btn btn-success" onClick={handleAddToCart}>
          Add item to cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
