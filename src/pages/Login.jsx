import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Password" />
        </div>
        <Link to="/" className="btn btn-primary">Login</Link>
      </form>
    </div>
  );
}

export default Login;
