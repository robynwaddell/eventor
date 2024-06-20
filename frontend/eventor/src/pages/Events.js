import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Events() {
    const [events, setEvents] = useState([
        {
            eventID: 1,
            name: "Event One",
            location: "New York, NY",
            dateTime: new Date().toISOString(),
            picture: "https://via.placeholder.com/150"
        },
        {
            eventID: 2,
            name: "Event Two",
            location: "Los Angeles, CA",
            dateTime: new Date().toISOString(),
            picture: "https://via.placeholder.com/150"
        },
        {
            eventID: 3,
            name: "Event Three",
            location: "Chicago, IL",
            dateTime: new Date().toISOString(),
            picture: "https://via.placeholder.com/150"
        },
        {
            eventID: 4,
            name: "Event Four",
            location: "Houston, TX",
            dateTime: new Date().toISOString(),
            picture: "https://via.placeholder.com/150"
        },
        {
            eventID: 5,
            name: "Event Five",
            location: "Phoenix, AZ",
            dateTime: new Date().toISOString(),
            picture: "https://via.placeholder.com/150"
        },
        {
            eventID: 6,
            name: "Event Six",
            location: "Philadelphia, PA",
            dateTime: new Date().toISOString(),
            picture: "https://via.placeholder.com/150"
        }
    ]);

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
                <Link to={`/events/${event.eventID}`}>View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Events;
