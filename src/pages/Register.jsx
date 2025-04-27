import { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      {!showForm ? (
        <button className="btn btn-primary btn-lg" onClick={handleShowForm}>
          Register
        </button>
      ) : (
        <div className="card shadow p-5" style={{ maxWidth: '600px', width: '100%' }}>
          <h2 className="text-center mb-5">Register</h2>
          <form>
            <div className="mb-4">
              <input type="text" className="form-control form-control-lg" placeholder="Full Name" />
            </div>
            <div className="mb-4">
              <input type="email" className="form-control form-control-lg" placeholder="Email" />
            </div>
            <div className="mb-4">
              <input type="password" className="form-control form-control-lg" placeholder="Password" />
            </div>
            <Link to="/doctors" className="btn btn-primary btn-lg w-100">Register</Link>
          </form>
        </div>
      )}
    </div>
  );
}

export default Register;
