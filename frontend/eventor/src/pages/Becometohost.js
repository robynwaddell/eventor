import React, { useState } from 'react';
import Cookies from 'js-cookie';

const Becometohost = () => {
    const [isHost, setIsHost] = useState(Cookies.get('userRole') === 'host');

    const becomeHostMember = async () => {
        let userid = Cookies.get('userID');
        try {
            const response = await fetch('https://api.example.com//users/${userid}/become-host', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${Cookies.get('token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: Cookies.get('userId') }), 
            });
            if (!response.ok) {
                throw new Error('Failed to become host member');
            }
            setIsHost(true);
            alert('Congratulations! You are now a host member.');
        } catch (error) {
            console.error('Error becoming host member:', error.message);
            alert('Failed to become host member. Please try again later.');
        }
    };

    return (
        <div>
            <h2>User Profile</h2>
            <p>Username: {Cookies.get('username')}</p>
            <p>Email: {Cookies.get('email')}</p>
            {isHost ? (
                <p>You are already a host member.</p>
            ) : (
                <button onClick={becomeHostMember}>Become a Host Member</button>
            )}
        </div>
    );
};

export default Becometohost;
