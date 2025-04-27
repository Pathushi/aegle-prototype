import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container text-center mt-5">
            <h1>Welcome to Aegle</h1>
            <p>Universal Healthcare at Your Fingertips</p>
            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="card">
                        <img 
                            src="https://i.pinimg.com/736x/de/20/37/de20372a7a222a686f9c57da676eeec3.jpg" 
                            alt="Find Doctors" 
                            className="card-img-top"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <div className="card-body">
                            <h5 className="card-title">Find Doctors</h5>
                            <p className="card-text">
                                Easily search for healthcare professionals based on specialty, location, and availability. 
                                Connect with trusted doctors to get the care you need.
                            </p>
                            <Link className="btn btn-primary" to="/doctors">Find Doctors</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <img 
                            src="https://i.pinimg.com/236x/5e/94/d4/5e94d4738c3ad8b52a1b60fb6f136ada.jpg" 
                            alt="Emergency Info" 
                            className="card-img-top"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <div className="card-body">
                            <h5 className="card-title">Emergency Info</h5>
                            <p className="card-text">
                                Quickly access critical emergency contact numbers, first aid tips, and nearby hospital locations. 
                                Be prepared for any situation with our comprehensive resources.
                            </p>
                            <Link className="btn btn-secondary" to="/emergency">Emergency Info</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
