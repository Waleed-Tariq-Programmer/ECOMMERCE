import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
import Card from "../Components/Card/Card";
import Heading from "../Components/Heading/Heading";
import "../App.css";

const Product = () => {
  const { cat } = useParams();
  const { setselectCategorie, categoryProduct, allProducts } =
    useContext(ProductContext);

  useEffect(() => {
    setselectCategorie(cat);
  }, [cat, setselectCategorie]);

  return (
    <>
      {cat ? <Heading title={cat} /> : <Heading title="All Products" />}
      <div className="product_display  mt-5 mb-5 container">
        {cat
          ? categoryProduct.map((item, index) => (
              <Card key={index} item={item} />
            ))
          : allProducts.map((item, index) => <Card key={index} item={item} />)}
      </div>
    </>
  );
};

export default Product;
