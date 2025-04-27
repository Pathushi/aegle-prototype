import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container">
        <Link className="navbar-brand text-white" to="/">Aegle</Link>
        <div>
          <Link className="btn btn-outline-light me-2" to="/login">Login</Link>
          <Link className="btn btn-light" to="/register">Register</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
