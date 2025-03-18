import React, { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Review.css";
const Review = ({ review, rating }) => {

  const renderStars = (rating) => {
    return Array(rating)
      .fill(0)
      .map((_, index) => <FaStar key={index} className="star" />);
  };
  return (
    <div
      className="tab-pane fade show  container"
      id="review"
      role="tabpanel"
      aria-labelledby="review-tab"
    >
      <div className="row">
        <div className="col-lg-6">
          <div className="row total_rate">
            <div className="col-6">
              <div className="box_total mb-5">
                <h5>Overall</h5>
                <h4>{rating}</h4>
                <h6>({review.length} reviews)</h6>
              </div>
            </div>
          </div>
          <div className="review_list">
            {review.map((item, index) => (
              <div className="review_item" key={index}>
                <div className="media">
                  <div className="media-body">
                    <h4>{item.reviewerName}</h4>
                    {renderStars(item.rating)}
                  </div>
                </div>
                <p>{item.comment}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="review_box">
            <h4>Add a Review</h4>

            <form className="row contact_form" noValidate="novalidate">
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Your Full name"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="number"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="1"
                    placeholder="Review"
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12 text-right">
                <button type="submit" className="btn">
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
