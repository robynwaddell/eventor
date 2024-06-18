import React from 'react';
import { Link } from 'react-router-dom';

const Denied = () => {
    return (
        <div>
            <h2>Permission Denied</h2>
            <p>You do not have permission to access this page.</p>
            <p><Link to="/">Return to Home</Link></p>
            <p><Link to="/Becometohost">Do you want to become Host?</Link></p>
        </div>
    );
};

export default Denied;
