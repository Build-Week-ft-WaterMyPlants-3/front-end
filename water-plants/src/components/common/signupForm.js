import React, { useState } from "react";
import "./signupForm.css";

function SignupForm(SignUp, error) {
  const [details, setDetails] = useState({
    username: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    e.prevenDefault();
    SignUp(details);
  };

  return (
    <form className="form" onChange={handleChange}>
      {/* {error} */}
      <h2>Login</h2>

      <div className="label-box">
        <label htmlFor="name">User name:</label>
        <input type="text" name="name" id="name" />
      </div>

      <div className="label-box">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" name="phoneNumber" id="phoneNumber" />
      </div>

      <div className="label-box">
        {" "}
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>

      <button type="onChange" value="SignUp">
        Sign Up
      </button>
    </form>
  );
}

export default SignupForm;
