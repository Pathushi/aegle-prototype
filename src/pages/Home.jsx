import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to Aegle</h1>
      <p>Universal Healthcare at Your Fingertips</p>
      <div className="d-grid gap-3 mt-4">
        <Link className="btn btn-success" to="/login">Login</Link>
        <Link className="btn btn-success" to="/register">Register</Link>
        <Link className="btn btn-success" to="/doctors">Find Doctors</Link>
        <Link className="btn btn-success" to="/emergency">Emergency Info</Link>
      </div>
    </div>
  );
}

export default Home;
