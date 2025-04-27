import { Link } from 'react-router-dom';

function DoctorList() {
  return (
    <div className="container mt-5">
      <h2>Available Doctors</h2>
      <ul className="list-group mt-4">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Dr. Anura Perera (Cardiologist)
          <Link className="btn btn-success" to="/book">Book</Link>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Dr. Nimal Silva (Dermatologist)
          <Link className="btn btn-success" to="/book">Book</Link>
        </li>
      </ul>
    </div>
  );
}

export default DoctorList;
