import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-area section-padding40">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-tittle mb-60 text-center pt-10">
              <h2>Our Story</h2>
              <p className="pera">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="about-img pb-bottom">
              <img src="./images/about1.png.webp" alt="About us" className="w-100" />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-tittle mb-60 text-center pt-10">
              <h2>Journey start from</h2>
              <p className="pera">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="about-img pb-bottom">
              <img src="./images/about2.png.webp" alt="Our journey" className="w-100" />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-tittle text-center pt-10">
              <h2>2020</h2>
              <p className="pera">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
