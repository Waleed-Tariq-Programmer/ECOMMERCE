      import React from 'react';
      import './Delivery.css';

      const Delivery = () => {
        return (
          <div className="categories-area section-padding40 gray-bg">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-cat mb-50">
                    <div className="cat-icon">
                      <img src="./images/services1.svg" alt="Fast & Free Delivery" />
                    </div>
                    <div className="cat-cap">
                      <h5>Fast & Free Delivery</h5>
                      <p>Free delivery on all orders</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-cat mb-50">
                    <div className="cat-icon">
                      <img src="./images/services2.svg" alt="Secure Payment" />
                    </div>
                    <div className="cat-cap">
                      <h5>Secure Payment</h5>
                      <p>Free delivery on all orders</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-cat mb-50">
                    <div className="cat-icon">
                      <img src="./images/services3.svg" alt="Money Back Guarantee" />
                    </div>
                    <div className="cat-cap">
                      <h5>Money Back Guarantee</h5>
                      <p>Free delivery on all orders</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-cat mb-50">
                    <div className="cat-icon">
                      <img src="./images/services4.svg" alt="Online Support" />
                    </div>
                    <div className="cat-cap">
                      <h5>Online Support</h5>
                      <p>Free delivery on all orders</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      };

      export default Delivery;
