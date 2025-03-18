import React, { useContext } from 'react';
import Heading from '../Components/Heading/Heading';
import Card from '../Components/Card/Card';
import FavouriteCard from '../Components/Card/FavouriteCard';
import { ProductContext } from '../Context/ProductContext';
import { FavouriteContext } from '../Context/FavouriteContext';
import "../App.css"
const Home = () => {
  const { popularProducts } = useContext(ProductContext);
  const { favourite } = useContext(FavouriteContext);

  return (
    <div>
      <Heading title="Popular Products" />
      <div className="product_display mt-5 mb-5 container">
        {popularProducts.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      {favourite.length > 0 && (
        <>
          <Heading title="Favourite Products" />
          <div className="product_display mt-5 mb-5 container">
            {favourite.map((item, index) => (
              <FavouriteCard key={index} item={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
