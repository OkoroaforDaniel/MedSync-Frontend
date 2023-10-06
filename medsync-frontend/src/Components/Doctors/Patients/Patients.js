import React from "react";
import "./styles/Patients.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Patients = () => {

    
  return (
    <div className="patientForm">
      <div>
        <h1 className="patientH1">Patient Medical Record</h1>
        <p className="TitleH2" id="TitleH2">Patient Information</p>
        <div className="detail1">
          <div className="detailLeft">
            <p className="patientTH">Name</p>
            <p className="patientTD">Myranda Yuryichev</p>
            <p className="patientTH">Phone</p>
            <p className="patientTD">07015362538</p>
            <p className="patientTH">Address</p>
            <p className="patientTD">No 50 ilom street woji port Harcourt</p>
          </div>
          <div className="detailRight">
            <p className="patientTH">Birth Date</p>
            <p className="patientTD">06 - 10 - 2023</p>
            <p className="patientTH">Weight</p>
            <p className="patientTD">179</p>
            <p className="patientTH">Height</p>
            <p className="patientTD">900</p>
          </div>
        </div>
      </div>

      <hr id='line2'/>
      <h2 className="TitleH2">In Case of Emergency</h2>
        <div className="detail2">
          <div className="detailLeft">
          <p className="patientTH">Name</p>
            <p className="patientTD">chima okon</p>
            <p className="patientTH">Phone</p>
            <p className="patientTD">00067628223</p>
            <p className="patientTH">Address</p>
            <p className="patientTD">No 50 ilom street woji port Harcourt</p>
          </div>
          <div className="detailRight">
          <p className="patientTH">Address</p>
          <p className="patientTD">No 50 ilom street woji port Harcourt</p>
        <p className="patientTH">Work Phone</p>
        <p className="patientTD">+2348975488</p>
          </div>
        </div>


        <hr id='line2'/>
        <h2 className="TitleH2">General Medical History</h2>
        <div className="detail3">
          <div className="detailLeft">
            <p className="patientTH">Chicken Pox (Varicella):</p>
            <p className="patientTD">option</p>
            <p className="patientTH">Have you had the Hepatitis B vaccination?</p>
            <p className="patientTD">option</p>
            <p className="patientTH">List any Medical Problems</p>
            <p className="patientTD">Malaria, ultrices</p>
          </div>
          <div className="detailRight">
            <p className="patientTH">Measles</p>
            <p className="patientTD">Option</p>

            <p className="patientTH">serial Number</p>
            <p className="patientTD">000077864417</p>
          </div>
        </div>
    </div>
  );
};

export default Patients;
