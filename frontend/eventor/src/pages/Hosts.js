import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Hosts() {
    const [hosts, setHosts] = useState([]);

    useEffect(() => {
        const fetchHosts = async () => {
            try {
                const response = await axios.get('https://localhost:7192/User/GetAllHosts');
                setHosts(response.data.$values); // Assuming response.data is an array of host objectsc
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching hosts:', error);
            }
        };

        fetchHosts();
    }, []);

    return (
        <div>
            <div className='host-img'>
                <div className='host-img-overlay'>
                    <h2 className='hosts-title'>Hosts</h2>
                </div>
            </div>
            <div className="host-list">
                {hosts.map(host => (
                    <div key={host.userID} className="host-card">
                        <h3>{host.name}</h3>
                        <p>Email: {host.email}</p>
                        <p>Phone: {host.phone}</p>
                        <Link to={`/hosts/${host.userId}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hosts;
