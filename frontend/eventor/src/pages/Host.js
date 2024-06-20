import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Host() {
    const { id } = useParams();
    const [host, setHost] = useState(null);
  
    useEffect(() => {
      const fetchHost = async () => {
        try {
          const response = await axios.get(`/hosts/${id}`);
          setHost(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchHost();
    }, [id]);
  
    if (!host) {
      return <div>Loading...</div>;
    }
  
    return (
      <section>
        <div>
          <h2 className='host-name'>{host.name}</h2>
          <p className='email'>Email: {host.email}</p>
          <p className='phone'>Phone: {host.phone}</p>
          <p className='bio'>{host.bio}</p> {/* Assuming there's a bio field */}
          <div className='host-img-from-api'>
            <img src={host.picture} alt={host.name} />
          </div>
        </div>
      </section>
    );
}

export default Host;
