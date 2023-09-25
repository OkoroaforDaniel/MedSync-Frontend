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
      <h1 className="Doctorh1">MedSync</h1>
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
            <span className="sideNavIcon">Create patient file</span>
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
            <span className="sideNavIcon">Contact</span>
          </div>
          <div className="spanDiv3">
          <Link className="link" to='/Register' >
          <i class="fa-solid fa-rectangle-list" style={{color: "#222e3a"}}></i>
            <span className="sideNavIcon">Register</span>
            </Link>
          </div>

          
          <div className="spanDiv3">
          <Link className="link" to='/Login'>
          <i class="fa-solid fa-right-to-bracket" style={{color: "#222e3a"}}></i>
            <span className="sideNavIcon">Login</span>
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
                  Sales | <span className="Today">Today</span>
                </p>
                <div className="cartIcon">
                  <i
                    class="fa-solid fa-cart-plus fa-2xl"
                    style={{ color: "#d175ea" }}
                  ></i>
                  <div className="increase">
                    <h1>145</h1>
                    <p>
                      <span>12% </span>Increase
                    </p>
                  </div>
                </div>
              </div>
              <div className="RevenueDiv">
                <p>
                  Revenue | <span className="Month">This month</span>
                </p>
                <div className="cartIcon">
                  <i
                    className="fa-solid fa-dollar-sign fa-2xl"
                    style={{ color: "#bd52cb" }}
                  ></i>
                  <div className="increase">
                    <h1>3,260</h1>
                    <p>
                      <span>8% </span>Increase
                    </p>
                  </div>
                </div>
              </div>
              <div className="CustomerDiv" id="CustomerDiv">
                <p>
                  Customer | <span className="Year">This Year</span>
                </p>
                <div className="cartIcon">
                  <i
                    class="fa-solid fa-users fa-2xl"
                    style={{ color: "#d869d5" }}
                  ></i>
                  <div className="increase">
                    <h1>1200</h1>
                    <p>
                      <span>12% </span>Decrease
                    </p>
                  </div>
                </div>
              </div>




            </div>

            {/* <div className="RRT"> */}
            <div className="Report">
              <h4>
                Report <span className="spanReport"> / Today</span>
              </h4>
              <p>100</p>
              <p>80</p>
              <p>60</p>
              <p>40</p>
              <p>20</p>
              <p>0</p>
            </div>
            <div className="RecentSale" id="RecentSale">
              <h4>
                Recent Sale<span className="spanReport"> / Today</span>
              </h4>
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Customer</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#2147</td>
                    <td>Bridie Kessler</td>
                    <td>Ut voluptatem id earum et</td>
                    <td>$64</td>
                    <td>Pending</td>
                  </tr>
                  <tr>
                    <td>#2457</td>
                    <td>Brandon Jacob</td>
                    <td> At recusandae consectetur</td>
                    <td>$47</td>
                    <td>Approved</td>
                  </tr>
                  <tr>
                    <td>#2049</td>
                    <td>Ashleigh Langosh</td>
                    <td>Blanditiis dolor omnis similique</td>
                    <td>$147</td>
                    <td>Rejected</td>
                  </tr>
                  <tr>
                    <td>#2644</td>
                    <td>Angus Grady</td>
                    <td>At praesentium minu</td>
                    <td>$67</td>
                    <td>Approved</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="TopSale">
              <h4>
                Top Sales <span className="spanReport"> / Today</span>
              </h4>
            </div>
            {/* </div> */}
          </div>

          {/* </div> */}
          <div className="RANU">
            <div className="Activity">
            <h4>Recent Activity <span className="spanToday"> | Today</span></h4>
            <p><span className="mins">32 mins</span> Quia quae rerum explicabo officiis beatae</p>
            <p><span className="mins">56 mins</span> Voluptatem blanditiis blanditiis eveniet</p>
            <p><span className="mins">2 hrs</span> Voluptates corrupti molestias voluptatem</p>
            <p><span className="mins">1 day</span> Est sit eum reiciendis exercitationem</p>
            </div>

            <div className="newUpdate">
            <h4>News & Updates <span className="spanNewUpdate"> | Today</span></h4>
            <div className="news1">
            <img className="newsImg1" src={news1} alt="news1" />
            <div className="newsh4">
                <h4>Nihil blanditiis at in nihil autem</h4>
                <p>Sit recusandae non aspernatur laboriosam.<br /> Quia enim eligendi sed ut harum...</p>
            </div>
            </div>

            <div className="news2">
            <img className="newsImg2" src={news2} alt="news2" />
            <div className="newsh4">
                <h4>Quidem autem et impedit</h4>
                <p>Illo nemo neque maiores vitae officiis <br /> cum eum turos elan dries werona nande...</p>
            </div>
            </div>

            <div className="news3">
            <img className="newsImg3" src={news3} alt="news3" />
            <div className="newsh4">
                <h4>Id quia et et ut maxime similique occaecati ut</h4>
                <p>Fugiat voluptas vero eaque accusantium <br /> eos. Consequuntur sed ipsam et totam...</p>
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