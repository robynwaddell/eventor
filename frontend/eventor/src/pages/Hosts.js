import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Hosts() {
    const [hosts, setHosts] = useState([
        {
            userID: 1,
            name: "Host One",
            email: "hostone@example.com",
            phone: "123-456-7890",
            bio: "This is a bio for Host One.",
            picture: "https://via.placeholder.com/150"
        },
        {
            userID: 2,
            name: "Host Two",
            email: "hosttwo@example.com",
            phone: "098-765-4321",
            bio: "This is a bio for Host Two.",
            picture: "https://via.placeholder.com/150"
        },
        {
            userID: 3,
            name: "Host Three",
            email: "hostthree@example.com",
            phone: "234-567-8901",
            bio: "This is a bio for Host Three.",
            picture: "https://via.placeholder.com/150"
        },
        {
            userID: 4,
            name: "Host Four",
            email: "hostfour@example.com",
            phone: "345-678-9012",
            bio: "This is a bio for Host Four.",
            picture: "https://via.placeholder.com/150"
        },
        {
            userID: 5,
            name: "Host Five",
            email: "hostfive@example.com",
            phone: "456-789-0123",
            bio: "This is a bio for Host Five.",
            picture: "https://via.placeholder.com/150"
        },
        {
            userID: 6,
            name: "Host Six",
            email: "hostsix@example.com",
            phone: "567-890-1234",
            bio: "This is a bio for Host Six.",
            picture: "https://via.placeholder.com/150"
        },
        {
            userID: 7,
            name: "Host Seven",
            email: "hostseven@example.com",
            phone: "678-901-2345",
            bio: "This is a bio for Host Seven.",
            picture: "https://via.placeholder.com/150"
        },
        {
            userID: 8,
            name: "Host Eight",
            email: "hosteight@example.com",
            phone: "789-012-3456",
            bio: "This is a bio for Host Eight.",
            picture: "https://via.placeholder.com/150"
        },
        {
            userID: 9,
            name: "Host Nine",
            email: "hostnine@example.com",
            phone: "890-123-4567",
            bio: "This is a bio for Host Nine.",
            picture: "https://via.placeholder.com/150"
        }
    ]);

    useEffect(() => {
      const fetchHosts = async () => {
        try {
          const response = await axios.get('/hosts');
          setHosts(response.data);
        } catch (error) {
          console.error(error);
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
              <Link to={`/hosts/${host.userID}`}>View Details</Link>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Hosts;
