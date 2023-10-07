import React from 'react';
import './styles/PatientFile.css'
import { Link, useNavigate, useLocation } from "react-router-dom";

const PatientFile = () => {
  return (

    <div id="patientFile">
	  <div className="title">
	  <h1>
	  	<Link to="/">MedSync</Link>
	  </h1> 

	  <Link className="backLink" to='/Doctors'>
            <i class="fa-solid fa-circle-arrow-left"></i>Doctors
            </Link>
	  </div>

      <form className='form'>
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

	  <br />
	  

      <div className="patientGender">

        <div className="gender">
          <label htmlFor="gender">Gender:</label> <br />

	  <select name="cars" id="cars">
  		<option value="male">Male</option>
  		<option value="female">Female</option>
  		<option value="both">Both</option>
  		<option value="anonymous">Rather not say</option>
	  </select>
	  
          
        </div>
      </div> {/* Patient gender closing */}

	  <br />

	<div className="patientDateOfBirth">
	  <label htmlFor="birthday">Date of birth:</label> <br />
	  <input type="date" id="birthday" name="birthday" />
	</div> {/* Patient date of birth closing */}
	
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


          <br />

	<div className="nextOfKinGender">

          <label htmlFor="gender">Contact Gender:</label> <br />

	   <select name="cars" id="cars">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="both">Both</option>
                <option value="anonymous">Rather not say</option>
          </select>
 
	  </div> {/* Next of kin gender closing */}

        {/* Next of kin closing */}

	  <hr />

	  {/* Medical history */}

	  <div className="medicalHistory">
	  	<h4>Medical history</h4>
	  	<label htmlFor="pastCases">Cases presented in the past:</label> <br />

		<textarea id="pastCases" name="pastCases" rows="4" cols="50">
	  	</textarea>
	  </div> {/* Medical history closing */}

	  <hr />

	  {/* Symptoms and investigations */}
	  <div className="symptomsAndInvestigations">
	  	<div className="symptoms">
	  		<label htmlFor="symptoms">Symptoms presented:</label> <br />

                	<textarea id="symptoms" name="symptoms" rows="6" cols="50">
                </textarea>
	  	</div>

	  	<div className="investigations">
                <label htmlFor="investigations">Investigations to be made:</label> <br />

                <textarea id="investigations" name="investigations" rows="6" cols="50">
                </textarea>
	  	</div>
	  </div> {/* Symptoms and Investigations closing */}

	  <br />

	  {/* Submit button */}

	  <div className="button">
	  	<button className="submitEntry">Save details</button>
	  </div> {/* button end */}

      </form>
    </div>
  );
};

export default PatientFile;
