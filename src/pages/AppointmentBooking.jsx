import { Link } from 'react-router-dom';

function AppointmentBooking() {
  return (
    <div className="container mt-5 text-center">
      <h2>Appointment Confirmed!</h2>
      <p>Your appointment has been successfully booked.</p>
      <Link className="btn btn-primary mt-3" to="/consult">Start Video Consultation</Link>
    </div>
  );
}

export default AppointmentBooking;
