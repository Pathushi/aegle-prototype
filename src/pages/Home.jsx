import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container text-center mt-5">
            <h1>Welcome to Aegle</h1>
            <p>Universal Healthcare at Your Fingertips</p>
            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Find Doctors</h5>
                            <p className="card-text">Search for healthcare professionals near you.</p>
                            <Link className="btn btn-primary" to="/doctors">Find Doctors</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Emergency Info</h5>
                            <p className="card-text">Access critical emergency information and resources.</p>
                            <Link className="btn btn-secondary" to="/emergency">Emergency Info</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
