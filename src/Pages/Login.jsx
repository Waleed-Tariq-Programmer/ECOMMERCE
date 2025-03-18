import React, { useState } from "react";
import "../App.css";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Data/Firebase';

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [userDetail, setUserDetail] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation to ensure fields are not empty
    if (!userDetail.email || !userDetail.password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    try {
      const res = await signInWithEmailAndPassword(auth, userDetail.email, userDetail.password);
      const user = res.user;

      setSuccessMessage("Login Successful");
      setErrorMessage("");

      setUserDetail({
        email: "",
        password: "",
      });

      navigate("/");
    } catch (err) {
      console.error("Error during sign-in:", err);
      setSuccessMessage("");
      setErrorMessage("Failed to login. Please check your email and password.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetail((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-xl-7 col-lg-8">
          <div className="login-form">
            <div className="login-heading">
              <span>Login</span>
              <p>Enter Login details to get access</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <div className="single-input-fields">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="Email address"
                    onChange={handleChange}
                    name="email"
                    value={userDetail.email}
                    required
                  />
                </div>
                <div className="single-input-fields">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    onChange={handleChange}
                    name="password"
                    value={userDetail.password}
                    required
                  />
                </div>
              </div>
              {errorMessage && <div className="error-message">{errorMessage}</div>}
              {successMessage && <div className="success-message">{successMessage}</div>}
              <div className="login-footer">
                <p>
                  Don’t have an account? <NavLink to={"/sign"}>Sign Up</NavLink> here
                </p>
                <button type="submit" className="submit-btn3">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
