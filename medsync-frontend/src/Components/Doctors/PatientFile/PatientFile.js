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
	  <h4>Patient</h4>

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
	  
	  <div className="genderItems">
	  <label htmlFor="male">Male</label>
          <input className="genderInput" type="radio" id="male" name="gender" value="male" />
	  </div>
          
	  <div className="genderItems">
	  <label htmlFor="female">Female</label>
          <input className="genderInput" type="radio" id="female" name="gender" value="female" />
	  </div>
          
	  <div className="genderItems">
	  <label htmlFor="both">Both</label>
          <input className="genderInput" type="radio" id="both" name="gender" value="both" />
	  </div>
          
	  <div className="genderItems">
	  <label htmlFor="rather-not-say">Rather not say</label>
          <input className="genderInput" type="radio" id="rather-not-say" name="gender" value="rather-not-say" />
	  </div>
          
        </div>
      </div> {/* Patient gender closing */}
	
        <hr />
	
        {/* Next of kin */}
	  <h4>Emergency contact</h4>
	  <p>(Next of kin)</p>

	<div className="nextOfKinIdentity">

         <div className="firstName">
          <label htmlFor="firstName">Contact First Name:</label> <br />
          <input type="text" id="firstName" name="firstName" />
        </div>

          <div className="lastName">
          <label htmlFor="lastName">Contact Last Name:</label> <br />
          <input type="text" id="lastName" name="lastName" />
        </div>

        <div className="email">
          <label htmlFor="email">Contact Email:</label> <br />
          <input type="text" id="email" name="email" />
        </div>

        <div className="phoneNumber">
          <label htmlFor="phone">Contact Phone number:</label> <br />
          <input type="text" id="phone" name="phone" />
        </div>

      </div> {/* Next of kin identity closing */}


          <hr />

	<div className="nextOfKinGender">

          <label htmlFor="gender">Contact Gender:</label> <br />

          <div className="genderItems">
          <label htmlFor="male">Male</label>
          <input className="genderInput" type="radio" id="male" name="gender" value="male" />
          </div>

          <div className="genderItems">
          <label htmlFor="female">Female</label>
          <input className="genderInput" type="radio" id="female" name="gender" value="female" />
          </div>

          <div className="genderItems">
          <label htmlFor="both">Both</label>
          <input className="genderInput" type="radio" id="both" name="gender" value="both" />
          </div>

          <div className="genderItems">
          <label htmlFor="rather-not-say">Rather not say</label>
          <input className="genderInput" type="radio" id="rather-not-say" name="gender" value="rather-not-say" />
          </div> 
	  </div> {/* Next of kin gender closing */}

        {/* Next of kin closing */}

	  <hr />
      </form>
    </div>
  );
};

export default PatientFile;
