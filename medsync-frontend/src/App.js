import React from 'react';
import './App.css';
import Landing from './Components/Landing/Landing';
import Doctors from './Components/Doctors/Doctors';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import Patients from './Components/Doctors/Patients/Patients';
import ReferPatient from './Components/Doctors/ReferPatient/ReferPatient';
import TreatmentHistory from './Components/Doctors/TreatmentHistory/TreatmentHistory';
import PatientFile from './Components/Doctors/PatientFile/PatientFile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
  <div className="App">
   <Router> 
   <Routes>
	  	<Route path="/" element={<Landing />} />
      <Route path="/Doctors" element={<Doctors />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
	  <Route path="/Profile" element={<Profile />} />
    <Route path='/Doctors/Patients' element={<Patients />} />
    <Route path='/Doctors/ReferPatient' element={<ReferPatient />} />
    <Route path='/Doctors/TreatmentHistory' element={<TreatmentHistory />} />
    <Route path='/Doctors/PatientFile' element={<PatientFile />} />
   </Routes>
    </Router>
    </div>
  );
}

export default App;
