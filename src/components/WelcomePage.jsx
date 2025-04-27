import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function WelcomePage() {
    const navigate = useNavigate(); // Initialize navigation

    const handleRegister = () => {
        navigate('/register'); // Navigate to the register form
    };

    const handleLogin = () => {
        navigate('/login'); // Navigate to the login page
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="welcome-page container text-center">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <img 
                                    src="https://i.pinimg.com/236x/13/32/0d/13320dbd14258adb2c26e3fd3e735ba6.jpg" 
                                    alt="About Us" 
                                    className="card-img-top mb-3"
                                />
                                <h5 className="card-title">About Us</h5>
                                <p className="card-text">Learn more about Aegle and our mission to provide universal healthcare at your fingertips.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <img 
                                    src="https://i.pinimg.com/236x/06/98/55/069855e21a5291f96dc395c46e7d6cf1.jpg" 
                                    alt="Our Services" 
                                    className="card-img-top mb-3"
                                />
                                <h5 className="card-title">Our Services</h5>
                                <p className="card-text">Explore the wide range of healthcare services we offer to meet your needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={handleRegister} className="btn btn-primary">Register</button>
                <button onClick={handleLogin} className="btn btn-secondary">Login</button>
            </div>
        </div>
    );
}

export default WelcomePage;
