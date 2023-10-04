import React, { useState } from "react";
import "./styles/Doctors.css";
import medsync14 from "../Images/medsync14.jpeg";
import news1 from "../Images/news-1.jpeg";
import news2 from "../Images/news-2.jpeg";
import news3 from "../Images/news-3.jpeg";
import NavBar from "../NavBar/NavBar.js";
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Doctors = () => {

  const [navIcon, setNavIcon] = useState(false);

  function handleNavClick () {
    setNavIcon(!navIcon);
  }

  const sideNavClass = navIcon ? "sideNavActive" : "sideNav";

  const mainBodyClass = navIcon ? "mainBody2" : "mainBody";
  
  return (
    <div>
    <div className="navDoctor">
	  <div>
      <h1 className="Doctorh1"><Link to='/'>MedSync</Link></h1>
    </div>

	  <div className="SearchInput">
    <div className="NavDiv">
    <i className="NavIcon" onClick={handleNavClick} class="fa-solid fa-bars fa-xl toggle-sidebar-btn"></i>
    </div>
    <div>
    <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
	  
    <span className="searchIcon">
      <i
        class="fa-solid fa-magnifying-glass"
        style={{ color: "#d9dbdd" }}
      ></i>
    </span>
    </div>
        </div>

        <div className="BMP">
          <span className="bellIcon">
            <i
              class="fa-regular fa-bell fa-xl"
              style={{ color: "#6398f2" }}
            ></i>
          </span>
          <span className="messageIcon">
            <i
              class="fa-regular fa-message fa-xl"
              style={{ color: "#7e9dd3" }}
            ></i>
          </span>

	      
          <img className="profileDoctor" src={medsync14} alt="medsync14" />
	        <span className="Drp">Dr. Name</span> 
	      
        </div>
      </div>

      <div className="Body">
        <div className={sideNavClass}>
          <div className="spanDiv">
          <i class="fa-solid fa-square-poll-horizontal" style={{color: "#222e3a"}}></i>
            <span className="sideNavIcon">Dashboard</span>
          </div>
          <div className="spanDiv1">
          <i class="fa-brands fa-squarespace" style={{color: "#222e3a"}}></i>
            <span className="sideNavIcon">Patients</span>
          </div>
          <div className="spanDiv1">
          <i class="fa-solid fa-list" style={{color: "#222e3a"}}></i>
            <span className="sideNavIcon">Refer patient</span>
          </div>
          <div className="spanDiv1">
          <i class="fa-solid fa-table" style={{color: "#222e3a"}}></i>
            <span className="sideNavIcon">Treatment history</span>
          </div>
          <div className="spanDiv1">
          <i class="fa-solid fa-chart-simple" style={{color: "#222e3a"}}></i>
            <button onclick="toggleClock()" id="patientFileButton" className="patientFileButton">
	  	<span className="sideNavIcon">Create patient file</span>
	    </button>
          </div>

          <div className="spanDiv2">
            <span>PAGES</span>
          </div>

          <Link className="link" to='/Profile'>
          <div className="spanDiv3">
          <i class="fa-solid fa-user" style={{color: "#222e3a"}}></i>
            <span className="sideNavIcon">Profile</span>
          </div>
          </Link>

          <div className="spanDiv3">
          <i class="fa-regular fa-address-card" style={{color: "#222e3a"}}></i>
            <span className="sideNavIcon">Contact Information</span>
          </div>
          <div className="spanDiv3">
          <Link className="link" to='/Register' >
          <i class="fa-solid fa-rectangle-list" style={{color: "#222e3a"}}></i>
            <span className="sideNavIcon">Register New Affiliation</span>
            </Link>
          </div>

          
          <div className="spanDiv3">
          <Link className="link" to='/Login'>
          <i class="fa-solid fa-right-to-bracket" style={{color: "#222e3a"}}></i>
            <span className="sideNavIcon">Log out</span>
            </Link>
          </div>
          
        </div>
        <div className={mainBodyClass}>
          <h2 id="mainBodyh2">Dashboard</h2>
          <p className="mainBodyP">Home / Dashboard</p>
          <div className="dashboardActivities">
          <div className="BelowDashboard">
            <div className="SRC">
              <div className="saleDiv">
                <p>
                  Patients | <span className="Today">Today</span>
                </p>
                <div className="cartIcon">
                  <i
                    class="fa-solid fa-users fa-2xl"
                    style={{ color: "#d175ea" }}
                  ></i>
                  <div className="increase">
                    <h1>45</h1>
                    <p>
                      <span>93% </span>Success rate
                    </p>
                  </div>
                </div>
              </div>
              <div className="RevenueDiv">
                <p>
                  Treatments | <span className="Month">This month</span>
                </p>
                <div className="cartIcon">
                  <i
                    className="fa-solid fa-users fa-2xl"
                    style={{ color: "#bd52cb" }}
                  ></i>
                  <div className="increase">
                    <h1>260</h1>
                    <p>
                      <span>80% </span>Success rate
                    </p>
                  </div>
                </div>
              </div>
              <div className="CustomerDiv" id="CustomerDiv">
                <p>
                  Treatments | <span className="Year">This Year</span>
                </p>
                <div className="cartIcon">
                  <i
                    class="fa-solid fa-users fa-2xl"
                    style={{ color: "#d869d5" }}
                  ></i>
                  <div className="increase">
                    <h1>1,200</h1>
                    <p>
                      <span>92% </span>Success rate
                    </p>
                  </div>
                </div>
              </div>




            </div>

            {/* <div className="RRT"> */}
            <div className="Report">
              <h4>
                Awaiting list <span className="spanReport"> / Today</span>
              </h4>
              <p>Daniel Ember</p>
              <p>Alison Drake</p>
              <p>Isreal Hilltop</p>
              <p>Fauzia Umar</p>
              <p>Adeola Adebowale</p>
              <p>Judas Iscariot</p>
            </div>
         
	  <div className="RecentSale" id="RecentSale">
	  <div className = "RecentTreatments">
	     <h4>
                Recent Treatments<span className="spanReport"> / This week</span>
      	    </h4> </div>

	  <div>
              <table>
                <thead>
                  <tr>
                    <th># / number</th>
                    <th>Patient</th>
                    <th>Diagnosis</th>
                    <th>Severity</th>
	  	    <th>Outcome</th>
                    <th>Admission status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>#2147</td>
                    <td>Bridie Kessler</td>
                    <td>Malaria fever</td>
                    <td>Mild</td>
	  	    <td>Successful</td>
                    <td>Discharged</td>
                  </tr>

                  <tr>
                    <td>#2457</td>
                    <td>Brandon Jacob</td>
                    <td>Heamophilia</td>
                    <td>Severe</td>
	  	    <td>Successful</td>
                    <td>Admitted</td>
                  </tr>

                  <tr>
                    <td>#2457</td>
                    <td>Ashleigh Langosh</td>
                    <td>Bacteriosis</td>
                    <td>Acute</td>
                    <td>Ongoing treatment</td>
                    <td>Discharged</td>
                  </tr>

                  <tr>
                    <td>#2457</td>
                    <td>Brandon Jacob</td>
                    <td>Schistosomiasis</td>
                    <td>Severe</td>
                    <td>Ongoing treatment</td>
                    <td>Admitted</td>
                  </tr>

                </tbody>
              </table> </div>
            </div>

            <div className="TopSale">
	     <div classname="ScheduledProcedures">
              <h4>
                 Scheduled procedures <span className="spanReport"> / Today</span>
              </h4> </div>

	  	<div>	
	  	<table>
                <thead>
                  <tr>
                    <th># / number</th>
                    <th>Patient</th>
                    <th>Procedure</th>
                    <th>Urgency</th>
                    <th>Admission status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>#21</td>
                    <td>Irvin Naue</td>
                    <td>Appendectomy</td>
                    <td>Urgent</td>
                    <td>On admission</td>
                  </tr>

	  	   <tr>
                    <td>#28</td>
                    <td>Trishia Doe</td>
                    <td>Coronary artery bypass grafting (CABG)</td>
                    <td>Very urgent</td>
                    <td>Incomming</td>
                  </tr>

	  	   <tr>
                    <td>#36</td>
                    <td>Ja'affar Ahmed</td>
                    <td>Colon resection</td>
                    <td>Extremely urgenct</td>
                    <td>On admission</td>
                  </tr>

	  	    <tr>
                    <td>#53</td>
                    <td>Amina Habib</td>
                    <td>Appendectomy</td>
                    <td>Not urgent</td>
                    <td>Not admitted</td>
                  </tr>
	  	</tbody>
	  	</table> </div>


            </div>
          </div>


	  <div className="RANU">

            <div className="newUpdate">
            <h4>News & Updates <span className="spanNewUpdate"> | Today</span></h4>
            <div className="news1">
            <img className="newsImg1" src={news1} alt="news1" />
            <div className="newsh4">
                <h4>HIV cure now readily available</h4>
                <p>Doctor in Namabia realese novel cure to the <br /> dreaded HIV disease for mass production. Says...</p>
            </div>
            </div>

            <div className="news2">
            <img className="newsImg2" src={news2} alt="news2" />
            <div className="newsh4">
                <h4>Ground breaking research on breast cancer</h4>
                <p>Women around the globe never felt happier and more relaxed about the future as medical<br /> team make breakthrough in Russia...</p>
            </div>
            </div>

            <div className="news3">
            <img className="newsImg3" src={news3} alt="news3" />
            <div className="newsh4">
                <h4>Eye health never got better</h4>
                <p>Opthamologists show us how to better care for our eyes, as they reveal new line <br /> of medication and lenses...</p>
            </div>
            </div>
            </div>
            
          </div>
          </div>
        </div>
      </div>

    </div>
  );
};
export default Doctors;
