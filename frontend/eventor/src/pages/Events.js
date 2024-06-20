import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('https://localhost:7192/api/Event');
                setEvents(response.data.$values);
                console.log(response.data.$values);
            } catch (error) {
                console.error('Error fetching events:', error);
                // Optionally, you can set a default error state or handle it in UI
            }
        };

        fetchEvents();
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div>
            <div className='events-img'>
                <div className='events-img-overlay'>
                    <h2 className='events-title'>Events</h2>
                </div>
            </div>
            <div className="event-list">
                {events.map(event => (
                    <div key={event.eventId} className="event-card">
                        <img src={event.picture} alt={event.name} className="event-image" />
                        <div className="event-info">
                            <h3>{event.name}</h3>
                            <p>{event.location}</p>
                            <p>{new Date(event.dateTime).toLocaleString()}</p>
                            <Link to={`/event/${event.eventId}`}>View Details</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Events;