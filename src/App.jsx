import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import DoctorList from './pages/DoctorList';
import AppointmentBooking from './pages/AppointmentBooking';
import VideoConsultation from './pages/VideoConsultation';
import PatientRecords from './pages/PatientRecords';
import EmergencyInfo from './pages/EmergencyInfo';
import AboutUs from './pages/AboutUs';
import WelcomePage from './components/WelcomePage';
import DoctorProfile from './pages/DoctorProfile';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            {/* <Link className="navbar-brand" to="/">Home</Link> */}
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              </ul>
            </div>
          </div>
        </nav>
        <div className="content">
          <Header />
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/doctors" element={<DoctorList />} />
            <Route path="/book" element={<AppointmentBooking />} />
            <Route path="/consult" element={<VideoConsultation />} />
            <Route path="/records" element={<PatientRecords />} />
            <Route path="/emergency" element={<EmergencyInfo />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/doctor/:id" element={<DoctorProfile />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
