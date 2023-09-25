import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Register/styles/Register.css";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const history = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
    const {data} =  await axios.post("https://medsyncapi.onrender.com/api/v1/auth/login", {
        username,
        password,
      });
      history("/Doctors");
      console.log(data);

    } catch (e) {
      alert("Wrong Login details")
      console.log(e);
    }
  }
  return (
    <div className="CenteredForm">
    <div className="RegisterForm">
      <h2 className="head">MedSync</h2>
      <div className="innerForm">
        <div className="InputForm">
          <h2 className="account">Login to Your Account</h2>
          <p className="enter">Enter your username & password to login</p>
          <form action="" method="POST">
            <label>Username</label>
            <input
              className="Input"
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></input>

            <label>Password</label>
            <input
              className="Input"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <label className="checkbox">
              <input className="checkboxInput" type="checkbox" />
              Remember me
            </label>
            <button onClick={submit}>Login</button>
          </form>
          <p>
            Don't have account? <Link to="/Register">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
