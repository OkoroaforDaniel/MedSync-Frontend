import React, { useState } from "react";
import axios from "axios";
import "./styles/Register.css";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [hospital, setHospital] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [affiliations, setAffilations] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://medsyncapi.onrender.com/api/v1/auth/register",
        {
          firstname,
          lastname,
          email,
          registrationNumber,
          hospital,
          qualifications,
          affiliations,
          username,
          password,
          role,
        }
      );
      console.log(data);
      history("/Doctors");
    } catch (e) {
      console.log(e);
      console.log(e.message);
      alert("An error occoured");
    }
  }

  return (
    <div className="RegisterForm">
      <h2 className="head">MedSync</h2>
      <div className="innerForm">
        <div className="InputForm">
          <h2 className="account">Create an Account</h2>
          <p className="enter">Enter your personal details to create account</p>
          <form action="" method="POST">
            <label>First Name</label>
            <input
              className="Input"
              type="text"
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
            ></input>

            <label>Last Name</label>
            <input
              className="Input"
              type="text"
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            ></input>

            <label>Email</label>
            <input
              className="Input"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>

            <label>Registration Number</label>
            <input
              className="Input"
              type="text"
              onChange={(e) => {
                setRegistrationNumber(e.target.value);
              }}
            ></input>

            <label>Hospital</label>
            <input
              className="Input"
              type="text"
              onChange={(e) => {
                setHospital(e.target.value);
              }}
            ></input>

            <label>Qualifications</label>
            <input
              className="Input"
              type="text"
              onChange={(e) => {
                setQualifications(e.target.value);
              }}
            ></input>

            <label>Affilations</label>
            <input
              className="Input"
              type="text"
              onChange={(e) => {
                setAffilations(e.target.value);
              }}
            ></input>

            <label>username</label>
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

            <label>Role</label>
            <input
              className="Input"
              type="text"
              onChange={(e) => {
                setRole(e.target.value);
              }}
            ></input>

            {/* <label className='checkbox' >
                <input className='checkboxInput' type='checkbox' />
                Remember me
                </label> */}
            <button onClick={submit}>Register</button>
          </form>
          <p>
            Already have an account? <Link to="/Login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
