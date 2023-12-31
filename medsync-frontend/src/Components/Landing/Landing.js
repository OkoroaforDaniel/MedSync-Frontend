import React from 'react';
import './Styles/Landing.css';
// import MedSync from '../Images/medsync1.jpg';
import MedSync1 from '../Images/medsync12.png';
import MedSync2 from '../Images/medsync15.jpg';
import MedSync3 from '../Images/medsync13.jpeg';
import MedSync4 from '../Images/medsync14.jpeg';
import MedSync5 from '../Images/medsync16.jpg';
import MedSync6 from '../Images/medsync17.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';


const Landing = () => {
  return (
    <div className='LandingPage'>
            <div className='Header'>
                <NavBar />
            <div className='CaptionImg'>
                <div>
                    <h2 className='Caption'>
                        Your Trusted Source <br />for Medical Record<br /> Keeping
                    </h2>
                    <p className='text1'>
                        Welcome to MedSync where we help Doctors keep track <br /> of thier patients medical record, and also share <br /> information to make treatment more <br /> convenient.
                    </p>
                    <button className='GetStarted'><Link to='/Register'>Get Started</Link></button>

                    <div className='NumText'>
                        <div className='NumText1'>
                            <h1 className='num'>200k+</h1>
                            <p className='text'>Patients</p>
                        </div>
                        <Link className='link' to='/Doctors' >
                        <div className='NumText2'>
                            <h1 className='num'>50+</h1>
                            <p className='text'>Doctors</p>
                        </div>
                        </Link>

                        <div className='NumText3'>
                            <h1 className='num'>20+</h1>
                            <p className='text'>Nurse</p>
                        </div>
                    </div>
                </div>

                <div className='backgroundImg'>
                <div className='img1Background' id='img1Background'>

                </div>
                <img  className='MedSync1' src={MedSync1} alt='MedSync8' />
                </div>
            </div>
            
        </div>

        <div className='categoryDiv'>
            <h2 className='categoryH2'>
                What we have
            </h2>
            <div className='category2Div'>
                <div className='category1'>
                    <div className='backgroundIcon'>
                        <i class="fa-solid fa-laptop-medical fa-2xl" style={{color: '#0775F4'}}></i>
                    </div>
                    <h3 className='categoryH3'>
                    Electronic Health Record
                    </h3>
                    <p className='categoryP'>
                    Allowing healthcare providers <br />to store and organize patient <br /> medical data digitally.
                    </p>

                </div>
                <div className='category2'>
                <div className='backgroundIcon'>
                <i class="fa-solid fa-notes-medical fa-2xl" style={{color: '#0775F4'}}></i>
                </div>
                    <h3 className='categoryH3'>
                    Interoperability
                    </h3>
                    <p className='categoryP'>
                    Enabling <br />seamless data sharing and <br /> continuity of care.
                    </p>

                </div>
                <div className='category3'>
                <div className='backgroundIcon'>
                <i class="fa-solid fa-house-medical-flag fa-2xl" style={{color: '#0775F4'}}></i>
                    </div>
                    <h3 className='categoryH3'>
                    Secure Data Storage
                    </h3>
                    <p className='categoryP'>
                    Offer secure storage<br /> solutions to protect sensitive patient <br />information.
                </p>

                </div>
                <div className='category4'>
                <div className='backgroundIcon'>
                <i class="fa-solid fa-file-medical fa-2xl" style={{color: '#0775F4'}}></i>
                </div>
                    <h3 className='categoryH3'>
                    Data Analytics
                    </h3>
                    <p className='categoryP'>
                    Offering data analytics tools <br />to help healthcare professionals<br />gain insights from patient data.
                </p>

                </div>
            </div>
        </div>

        {/* Doctors section */}

        <h2 className='Meet'>Meet Our Specialists</h2>

        <div className='Specialist'>
        <div className='Doctor1'>
            <img className='ImageDoctor1' src={MedSync1} alt='MedSync2' />
	  <div>
            <h3>Dr. Comfort James</h3>
            <p>Optometrist: A passionate optometrist with a proven track record,<br/> and a lot of testimonials form satisfied patients.</p> </div>
        </div>

        <div className='Doctor2'>
            <img className='ImageDoctor2' src={MedSync3} alt='MedSync3' />
	  <div>
            <h2>Dr. Ben Jacob</h2>
            <p>Pediatrician: Cherry and always happy pediatrician, with a passion for his patients.<br/> It seems they pretend to be sick just to meet him.</p> </div>
        </div>

        <div className='Doctor3'>
            <img className='ImageDoctor3' src={MedSync4} alt='MedSync4' />
	  <div>
            <h2>Dr. John Endurance</h2>
            <p>Oncologist: Adept oncologist with a deep understanding of cancers.<br/> His devotion to his patients is simply amazing. </p> </div>
        </div>
        </div>

        {/* Why MedSync */}

        <div className='DesignationImg'>
            <div>
                <h3 className='h3Designation'>DESIGNATION</h3>
                <h2 className='h2Designation'>Why You Should Choose MedSync</h2>
                <div className='iconH4P'>
                    <div className='desIcon'>
                        <i class="fa-solid fa-plug fa-2xl" style={{color: '#ebecf0'}}></i>
                    </div>
                    <div className='desImg'>
                        <h4>Best Expert Doctors</h4>
                        <p>MedSync brings doctors from accross the world<br /> from various disciplines and years of experience<br /> on their sleeves</p>
                    </div>
                </div>

                <div className='iconH4P'>
                    <div className='desIcon'>
                        <i class="fa-solid fa-headset fa-2xl" style={{color: '#f0f2f5'}}></i>
                    </div>
                    <div className='desImg'>
                        <h4>24/7 Support & Health Care</h4>
                        <p> There is always a specialist available and trained to help you promote and<br/> maintain your physical, mental, and emotional well-being. </p>
                    </div>
                </div>

                <div className='iconH4P'>
                    <div className='desIcon'>
                        <i class="fa-solid fa-truck-medical fa-2xl" style={{color: '#edeff2'}}></i>
                    </div>
                    <div className='desImg'>
                        <h4>Emergency Service</h4>
                        <p> Got an emergency, don't worry. we have a full team of specialists available and ready to respond to critical,<br/> and urgent situations that arise, providing necessary and immediate attention.<br/>
We'll stay with you till everything gets better.</p>
                    </div>
                </div>
            </div>
            <div className='imgDiv'>
                <img className='imgDesignation' src={MedSync6} alt='MedSync' />
                <div className='AfterImg'></div>
            </div>
        </div>

    {/* Testimonial section */}

        <h4 className='testh4'>TESTIMIONAL</h4>
        <div className='Testimonial'>
            <div className='patient-container'>
            <img className='MedSync5' src={MedSync5} alt='MedSync5'/>
            <div className='patient1'>
            <p>
            Contrary to popular belief, an appointment with a doctor has been easy for me, as I can now <br/>fix one way ahead of time with a doctor I never knew before.
            </p>
            <h4>
                James David
            </h4>
            <p>Dallas, Texas.</p>

            </div>
            <div className='patient2'>
            <h4 className='Ifeoma'>
                Ifeoma David
            </h4>
            <p className='Abuja'>Abuja Gwagwalada</p>

            </div>

            </div>
            <div className='TestimonialDiv2'>
            {/* <h4 className='testh4'>TESTIMIONAL</h4> */}
            <h2 className='CaptionTest1'>What Patients Say</h2>
            <h2 className='CaptionTest2'>About Us</h2>

            </div>
        </div>

        <div className='subSend'>
            <div className='subscribeDiv'>
                <h2 className='SubText'>Subscribe to get information, latest news and other <br />interesting things about MedSync</h2>
                <i class="fa-regular fa-envelope fa-lg" style={{color: '#b0b2b5'}}></i>
                <input className='SubInput' placeholder='Your email'></input>
                <button className='SubButton'>Subscribe</button>
            </div>
            <div className='sendIcon'>
            <i class="fa-solid fa-paper-plane fa-2xl" style={{color: '#fbfcfe'}}></i>
            </div>
        </div>
        
        {/* Footer section */}

        <footer>
        <div className='footerDiv'>
            <div className='footerTitle'>
            <h2>MedSync</h2>
            <p>Get Register and save you <br /> medical record</p>
            </div>
            <div className='ServiceInfoContact'>
                <div className='Service'>
                <h4>Services</h4>
                <p>About</p>
                <p>Home</p>
                <p>Services</p>

                </div>
                <div className='Info'>
                <h4>information</h4>
                <p>Help/FAQ</p>
                <p>An Appointment</p>
                <p>Community</p>
                <p>Sign Up</p>

                </div>
                <div className='Contact'>
                <h4>Contact</h4>
                <p>+8867445</p>
                <p>medsync@gmail.com</p>

                </div>
            </div>
            <div className='footerIcon'>
            <i class="fa-brands fa-facebook fa-2xl" style={{color: '#d4d7de'}}></i>
            <i class="fa-brands fa-square-instagram fa-2xl" style={{color: '#d4d7de'}}></i>
            <i class="fa-brands fa-x-twitter fa-2xl" style={{color: '#d4d7de'}}></i>
            </div>
        </div>
        </footer>
    </div>
  )
}

export default Landing
