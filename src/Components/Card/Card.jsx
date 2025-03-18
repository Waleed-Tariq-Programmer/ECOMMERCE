import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from "../../Context/CartContext";
import "./Card.css";

const Card = ({ item }) => {
  const { addItemToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addItemToCart(item);
  };

  return (
    <div className="card product-card">
      <Link to={`productDetail/${item.id}`}>
        <img src={item.thumbnail} className="card-img-top" alt="" />
      </Link>
      <div className="card-body text-center">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-price">${item.price}</p>
        <button onClick={handleAddToCart} className="btn btn_card btn-primary">
          <FaCartShopping />
        </button>
      </div>
    </div>
  );
};

export default Card;
