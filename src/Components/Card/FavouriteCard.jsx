import React from "react";
import "./Card.css";

const FavouriteCard = ({ item }) => {
  return (
    <div className="card product-card">
      <img src={item.thumbnail} className="card-img-top" alt="" />
      <div className="card-body text-center">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-price">${item.price}</p>
      </div>
    </div>
  );
};

export default FavouriteCard;
