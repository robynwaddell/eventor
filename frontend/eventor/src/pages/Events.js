import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import '../style/User.css'; 

const Events = () => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get('token');
        //authentication
        console.log(token);
        if (!token) {
            navigate('/login'); 
        } else {
            
            fetchEvents();  
        }
        
    }, [navigate]);

    const fetchEvents = async () => {
        const userId = Cookies.get('userId');
        try {
            const response = await fetch(`https://localhost:7192/api/Event/user/${userId}`);
            console.log(`https://localhost:7192/api/Event/user/${userId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch events');
            }
            const eventDatas = await response.json();
            let eventData = eventDatas.$values;
            console.log(eventData);
            setEvents(eventData);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching events:', error.message);
            setError('Failed to fetch events');
            setIsLoading(false);
        }
    };

    const handleDelete = async (eventId) => {
        if (window.confirm('Are you sure you want to delete this event?')) {
            try {
                const response = await fetch(`https://localhost:7192/api/Event/${eventId}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${Cookies.get('token')}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to delete event');
                }
                setEvents(events.filter(event => event.eventId !== eventId));
            } catch (error) {
                console.error('Error deleting event:', error.message);
                setError('Failed to delete event');
            }
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Event List</h2>
            <table className="event-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Date and Time</th>
                        <th>Category</th>
                        <th>Picture</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map(event => (
                        <tr key={event.eventId}>
                            <td><Link to={`/edit-event/${event.eventId}`}>{event.name}</Link></td>
                            <td>{event.location}</td>
                            <td>{new Date(event.dateTime).toLocaleString()}</td>
                            <td>{event.category}</td>
                            <td>{event.picture && <img src={event.picture} alt={event.name} className="event-picture" />}</td>
                            <td>
                                {Cookies.get('userRole').toLowerCase() === 'host' && (
                                    <>
                                        <Link to={`/edit-event/${event.eventId}`}>Edit</Link>
                                        {' '}
                                        <button onClick={() => handleDelete(event.eventId)}>Delete</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {Cookies.get('userRole').toLowerCase() === 'host' && (
                                    <>
                                        <Link to="/create-event">Add Event</Link>
                                    </>
                                )}
            
        </div>
    );
};

export default Events;
