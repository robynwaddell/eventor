import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Event() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
  
    useEffect(() => {
      const fetchEvent = async () => {
        try {
          const response = await axios.get(`/events/${id}`);
          setEvent(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchEvent();
    }, [id]);
  
    if (!event) {
      return <div>Loading...</div>;
    }
  
    return (
      <section>
        <div>
          <h2 className='event-name'>{event.name}</h2>
          <h4 className='location'>{event.location}</h4>
          <h4 className='date-time'>{new Date(event.dateTime).toLocaleString()}</h4>
          <p className='number-attendees'>Attendees: {event.attendEvents.length}</p>
          <p className='host-name-from-Userid'>Host: {event.user ? event.user.name : 'Unknown'}</p>
          <p className='event-description'>{event.description}</p>
          <div className='event-img-from-api'>
            <img src={event.picture} alt={event.name} />
          </div>
        </div>
      </section>
    );
}

export default Event;
