import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
import { CiHeart } from "react-icons/ci";
import Review from "../Components/Review/Review";
import Heading from "../Components/Heading/Heading";
import { CartContext } from "../Context/CartContext";
import { FavouriteContext } from "../Context/FavouriteContext";

const ProductDetail = () => {
  const { id } = useParams();
  const {addItemToCart} = useContext(CartContext)
  const {addToFavourite} = useContext(FavouriteContext)
  const { getID , singleProduct} = useContext(ProductContext);
  useEffect(() => {
    getID(id);
  }, [id, getID]);

  const {
    title,
    description,
    category,
    price,
    stock,
    reviews = [],
    thumbnail,
    rating,
    availabilityStatus,
    
  } = singleProduct;


  return (
    <>
      <div className="product_image_area section-padding40">
        <div className="container">
          <div className="row s_product_inner">
            <div className="col-lg-5">
            <img src= {thumbnail} alt="Product image"/>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="s_product_text">
                <h3>{title}</h3>
                <h2>${price}</h2>
                <ul className="list">
                  <li>
                    <a href="#">
                      <span>Category</span> : {category}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Availability</span> : {availabilityStatus}
                    </a>
                  </li>
                </ul>
                <p>
                  {description}
                </p>
                <div className="card_area">
                  <div className="add_to_cart">
                    <button  className="btn" onClick={addItemToCart}>
                      add to cart
                    </button>
                    <button  className="like_us" onClick={()=>addToFavourite(singleProduct)}>
                      <CiHeart className="heart" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Heading title="Review" />
      <Review review = {reviews} rating = {rating}/>
    </>
  );
};

export default ProductDetail;
