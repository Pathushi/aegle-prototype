import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate(); // Initialize navigation

  const handleLogin = () => {
    navigate('/home'); // Navigate to the home page
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-5" style={{ maxWidth: '600px', width: '100%' }}>
        <h2 className="text-center mb-5">Login</h2>
        <form>
          <div className="mb-4">
            <input type="email" className="form-control form-control-lg" placeholder="Email" />
          </div>
          <div className="mb-4">
            <input type="password" className="form-control form-control-lg" placeholder="Password" />
          </div>
          <button type="button" className="btn btn-primary btn-lg w-100" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
