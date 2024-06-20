import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
      const fetchEvents = async () => {
        try {
          const response = await axios.get('/events');
          setEvents(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchEvents();
    }, []);
  
    return (
      <div>
        <div className='events-img'>
          <div className='events-img-overlay'>
            <h2 className='events-title'>Events</h2>
          </div>
        </div>
        <div className="event-list">
          {events.map(event => (
            <div key={event.eventID} className="event-card">
              <img src={event.picture} alt={event.name} className="event-image" />
              <div className="event-info">
                <h3>{event.name}</h3>
                <p>{event.location}</p>
                <p>{new Date(event.dateTime).toLocaleString()}</p>
                <Link to={`/events/${event.eventID}`}>
                <button>View Details</button>
              </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Events;