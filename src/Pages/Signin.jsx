import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../Data/Firebase";
import "../App.css";


const SignUp = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [userDetail, setUserDetail] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        userDetail.email,
        userDetail.password,
      );
      const user = res.user;

      await updateProfile(user, {
        displayName: userDetail.name,
        email: userDetail.email,
        phoneNumber: userDetail.phoneNumber,
      });

      const userRef = doc(db, "User", user.uid);

      await setDoc(userRef, {
        name: userDetail.name,
        phoneNumber: userDetail.phoneNumber,
        email: userDetail.email,
        password: userDetail.password,
      });

      setSuccessMessage("Registration Successful");

      setUserDetail({
        name: "",
        phoneNumber: "",
        email: "",
        password: "",
      });

      navigate("/login");
    } catch (err) {
      setErrorMessage(err.message);
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
      <div className="row d-flex align-items-center justify-content-center custom-center">
        <div className="col-xl-6 col-lg-8">
          <form className="register-form text-center" onSubmit={handleSubmit}>
            <div className="register-heading">
              <span>Sign Up</span>
              <p>Create your account to get full access</p>
            </div>

            <div className="input-box">
              <div className="single-input-fields">
                <label>Full name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter full name"
                  required
                  value={userDetail.name}
                  onChange={handleChange}
                />
              </div>
              <div className="single-input-fields">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  required
                  value={userDetail.email}
                  onChange={handleChange}
                />
              </div>
              <div className="single-input-fields">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Enter phone number"
                  required
                  value={userDetail.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="single-input-fields">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  required
                  value={userDetail.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
            {successMessage && (
              <div className="success-message">{successMessage}</div>
            )}

            <div className="register-footer">
              <p>
                Already have an account? <NavLink to="/login">Login</NavLink>{" "}
                here
              </p>
              <button type="submit" className="submit-btn3">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
