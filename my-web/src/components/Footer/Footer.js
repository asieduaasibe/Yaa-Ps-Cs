import React from 'react';
import logo from "../../images/logo.png";
import "./Footer.css";
import facebook from "../../images/facebook.png";
import insta from "../../images/insta.png";



const Footer = () => {
  return (
    <div className='footer'>
      <div className='row'>
        <div className='col'>
          <img src={logo} alt='' className='logo' />
          <h3>MEETING HOURS</h3>
          <p>Monday to Friday  8AM - 6PM</p>
          <p> Sunday  2PM - 6PM</p>
        </div>
        <div className='col'>
          <h4 className='cols'>Office</h4>
          <p>Ritz Agbogba Road,Opposite Glory Oil Filling Station</p>
          <p className='email-id'>pawsnclawsgh@gmail.com</p>
          <p>+233 59 405 7497</p>
          <p>+233 59 392 9047 </p>
        </div>
        <div className='col'>
          <h4 className='cols'>Links</h4>
          <ul>
            <li><a href=''>Home</a></li>
            <li><a href=''>About</a></li>
            <li><a href=''>Products</a></li>
            <li><a href=''>Services</a></li>
            <li><a href=''>Tips & Updates</a></li>
            <li><a href=''>Book Appointment</a></li>
          </ul>
        </div>
        <div className='col'>
          <h4 className='cols'>Subscribe to get pet tips & insight</h4>
          <form>
            <input type='email' placeholder='Enter email address' required></input><button className='sub'>Subscribe</button>
          </form>
          <h5>PawsnClawsGH</h5>
          <div className='social-icon'>
            <a href='' ><img src={facebook} alt='' /></a>
            <a href=''><img src={insta} alt='' /></a>
          </div>
        </div>
      </div>
      <hr></hr>
      <p className='copyright'>&copy; 2024 Pasw&Claws. All Rights Reserved</p>
    </div>
  )
}

export default Footer




{/* <main>
<section className="banner">
  <img src={banner} alt="Banner Image" />
</section>
<section className="appointment">
  <h1>Book an Appointment</h1>
  <AppointmentForm />
</section>
</main> */}