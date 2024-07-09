import React from 'react';
import './App.css';
import AppointmentForm from './components/AppointmentForm';

function App() {
  return (
    <div className="App">
      <header>
        <div className="header-container">
          <img src="images/logo.png" alt="Animal Care Logo" className="logo" />
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Veterinary & Pet Care</a></li>
              <li><a href="#">Pet Products</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>

            </nav>
        </div>
      </header>
      <main>
        <section className="banner">
          <img src="images/banner.jpg" alt="Banner Image" />
        </section>
        <section className="appointment">
          <h1>Book an Appointment</h1>
          <AppointmentForm />
        </section>
      </main>
      <footer>
        <img src="images/logo.png" alt="Animal Care Logo" className="footer-logo" />
        <p>&copy; 2024 Animal Care. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
