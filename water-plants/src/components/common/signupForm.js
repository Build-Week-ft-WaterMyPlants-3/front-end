import React, { useState } from "react";
import "./signupForm.css";

function SignupForm() {
  const [userSignup, setUserSignup] = useState({
    User_name: "",
    phoneNumber: "",
    password: "",
  });

  const [accounts, setAccounts] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserSignup({ ...userSignup, [name]: value });
    // console.log(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAccount = { ...userSignup, id: new Date().getTime().toString() };

    setAccounts([...accounts, newAccount]);
    setUserSignup({ User_name: "", phoneNumber: "", password: "" });
  };
  console.log(accounts);

  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* {error} */}
      <h2>Sign Up</h2>

      <div className="label-box">
        <label htmlFor="name">User name:</label>
        <input
          type="text"
          name="username"
          id="username"
          autocomplete="off"
          value={userSignup.User_name}
          onChange={handleChange}
        />
      </div>

      <div className="label-box">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          autocomplete="off"
          value={userSignup.phoneNumber}
          onChange={handleChange}
        />
      </div>

      <div className="label-box">
        {" "}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          autocomplete="off"
          id="password"
          value={userSignup.password}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Sign Up</button>

      <div>
        {accounts.map((curElem) => {
          return (
            <div key={curElem.id}>
              <p>{curElem.username}</p>
            </div>
          );
        })}
      </div>
    </form>
  );
}

export default SignupForm;
