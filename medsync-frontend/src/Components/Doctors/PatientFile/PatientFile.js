import React from 'react';
import './styles/PatientFile.css'
import { Link, useNavigate, useLocation } from "react-router-dom";

const PatientFile = () => {
  return (

    <div id="patientFile">
	  <h1 className="title">
	  	<Link to="/">MedSync</Link>
	  </h1> <br />
      <form>
        {/* Patient information */}
      <div className="patientIdentity">

	 <div className="firstName">
          <label htmlFor="firstName">First Name:</label> <br />
          <input type="text" id="firstName" name="firstName" />
        </div>

	  <div className="lastName">
          <label htmlFor="lastName">Last Name:</label> <br />
          <input type="text" id="lastName" name="lastName" />
        </div>

        <div className="email">
          <label htmlFor="email">Email:</label> <br />
          <input type="text" id="email" name="email" />
        </div>

        <div className="phoneNumber">
          <label htmlFor="phone">Phone number:</label> <br />
          <input type="text" id="phone" name="phone" />
        </div>

      </div> {/* Patient identity closing */}

	  
          <hr />
	  

      <div className="patientGender">

        <div className="gender">
          <label htmlFor="gender">Gender:</label> <br />
	  <label htmlFor="male">Male</label>
          <input type="radio" id="male" name="gender" value="male" />
          
	  <label htmlFor="female">Female</label>
          <input type="radio" id="female" name="gender" value="female" />
          
	  <label htmlFor="both">Both</label>
          <input type="radio" id="both" name="gender" value="both" />
          
	  <label htmlFor="rather-not-say">Rather not say</label>
          <input type="radio" id="rather-not-say" name="gender" value="rather-not-say" />
          
        </div>
      </div> {/* Patient gender closing */}
	
        <hr />
	
        {/* ...other form fields... */}
        <div className="kingender">
          <label htmlFor="kingender">Gender:</label>
          <input type="radio" id="kingender-male" name="kingender" value="male" />
          <label htmlFor="kingender-male">Male</label>
          <input type="radio" id="kingender-female" name="kingender" value="female" />
          <label htmlFor="kingender-female">Female</label>
          <input type="radio" id="kingender-both" name="kingender" value="both" />
          <label htmlFor="kingender-both">Both</label>
          <input type="radio" id="kingender-rather-not-say" name="kingender" value="rather-not-say" />
          <label htmlFor="kingender-rather-not-say">Rather not say</label>
        </div>
        <hr />
        {/* ...other form fields... */}
      </form>
    </div>
  );
};

export default PatientFile;
