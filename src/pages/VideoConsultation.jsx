import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function VideoConsultation() {
    const videoRef = useRef(null);
    const [isCameraOn, setIsCameraOn] = useState(false);
    const [callEnded, setCallEnded] = useState(false);

    useEffect(() => {
        if (isCameraOn) {
            navigator.mediaDevices
                .getUserMedia({ video: true })
                .then((stream) => {
                    if (videoRef.current) {
                        videoRef.current.srcObject = stream;
                    }
                })
                .catch((error) => {
                    console.error('Error accessing camera:', error);
                });
        } else {
            if (videoRef.current && videoRef.current.srcObject) {
                const tracks = videoRef.current.srcObject.getTracks();
                tracks.forEach((track) => track.stop());
                videoRef.current.srcObject = null;
            }
        }
    }, [isCameraOn]);

    const toggleCamera = () => {
        setIsCameraOn((prev) => !prev);
    };

    const endCall = () => {
        setIsCameraOn(false); // Turn off the camera
        setCallEnded(true); // Mark the call as ended
        console.log('Call ended');
    };

    return (
        <div className="container mt-5 text-center">
            <h2>Video Consultation</h2>
            <p>Connecting you to the doctor...</p>
            <div className="mt-4">
                <video ref={videoRef} autoPlay playsInline className="border" style={{ width: '100%', maxWidth: '600px' }}></video>
            </div>
            {!callEnded ? (
                <>
                    <button className="btn btn-primary mt-3" onClick={toggleCamera}>
                        {isCameraOn ? 'Turn Off Camera' : 'Turn On Camera'}
                    </button>
                    <button className="btn btn-danger mt-3 ms-2" onClick={endCall}>
                        End Call
                    </button>
                </>
            ) : (
                <Link to="/" className="btn btn-success mt-3">
                    Return Home
                </Link>
            )}
        </div>
    );
}

export default VideoConsultation;
