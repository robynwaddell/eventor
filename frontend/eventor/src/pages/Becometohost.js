import React, { useState } from 'react';
import Cookies from 'js-cookie';
import '../style/User.css';

const Becometohost = () => {
    const [isHost, setIsHost] = useState(Cookies.get('userRole') === 'host');

    const becomeHostMember = async () => {
        let userid = Cookies.get('userId');
        try {
            const response = await fetch(`https://localhost:7192/User/Makehost?id=${Cookies.get('userId')}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },

            });
            console.log(response);
            if (!response.ok) {
                throw new Error('Failed to become host member');
            }
            setIsHost(true);
            alert('Congratulations! You are now a host member.');
            Cookies.set('userRole', 'host', { expires: 7, path: '/' }); 

        } catch (error) {
            console.error('Error becoming host member:', error.message);
            alert('Failed to become host member. Please try again later.');
        }
    };

    return (
        <main className="main-container">
            <div className="overlay"></div>
            <div className='form-container'>
                <h2>To be a host member</h2>
                <p>Username: {Cookies.get('username')}</p>
                <p>Email: {Cookies.get('email')}</p>
                {isHost ? (
                    <p>You are already a host member.</p>
                ) : (
                    <button onClick={becomeHostMember}>Become a Host Member</button>
                )}
            </div>
        </main>
    );
};

export default Becometohost;
