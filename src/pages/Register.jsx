import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Full Name" />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Password" />
        </div>
        <Link to="/doctors" className="btn btn-primary">Register</Link>
      </form>
    </div>
  );
}

export default Register;
