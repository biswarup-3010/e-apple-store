import React from "react";
import "./SignUp.css";
import { isLoggedIn } from "./assets/Datasets/Dataset";
const SignUp = () => {
  const validateEmail = () => {
    const email = document.getElementById("email").value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      alert("Invalid email format. Please enter a valid email address.");
    } else {
      isLoggedIn[0] = "true";
      window.location.href = "/App.jsx";
    }
  };

  return (
    <center>
      <div className="all-content">
        <div className="main-container-signup">
          <p className="heading-signup">Name</p>
          <input
            type="text"
            className="input-data-line-signup"
            placeholder="Enter your name here"
            required
          />
        </div>
        <div className="main-container-signup">
          <p className="heading-signup">Email ID</p>
          <input
            id="email"
            name="email"
            className="input-data-line-signup"
            placeholder="sample@gmail.com"
            required
          />
        </div>
        <div className="main-container-signup">
          <p className="heading-signup">Password</p>
          <input type="password" className="input-data-line-signup" required />
        </div>
        <div className="main-container-signup submit-btn">
          <button
            type="submit"
            className="btn btn-success"
            onClick={validateEmail}
          >
            Sign Up
          </button>
        </div>
      </div>
    </center>
  );
};

export default SignUp;
