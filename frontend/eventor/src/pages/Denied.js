import React from 'react';
import { Link } from 'react-router-dom';
import '../style/User.css';

const Denied = () => {
    return (
        <main className="main-container">
            <div className="overlay"></div>
        <div className='form-container'>
            <h2>Permission Denied</h2>
            <p>You do not have permission to access this page.</p>
            <p><Link to="/">Return to Home</Link></p>
            <p><Link to="/Becometohost">Do you want to become Host?</Link></p>
        </div>
        </main>
    );
};

export default Denied;
