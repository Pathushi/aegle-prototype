import { Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/doctors" element={<DoctorList />} />
        <Route path="/book" element={<AppointmentBooking />} />
        <Route path="/consult" element={<VideoConsultation />} />
        <Route path="/records" element={<PatientRecords />} />
        <Route path="/emergency" element={<EmergencyInfo />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
