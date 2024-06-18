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
        if (!token) {
            navigate('/login'); 
        } else {
            fetchEvents();  
        }
    }, [navigate]);

    const fetchEvents = async () => {
        try {
            const response = await fetch('https://api.example.com/events');
            if (!response.ok) {
                throw new Error('Failed to fetch events');
            }
            const eventData = await response.json();
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
                const response = await fetch(`https://api.example.com/events/${eventId}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${Cookies.get('token')}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to delete event');
                }
                setEvents(events.filter(event => event.id !== eventId));
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
                        <tr key={event.id}>
                            <td><Link to={`/events/${event.id}`}>{event.name}</Link></td>
                            <td>{event.location}</td>
                            <td>{new Date(event.dateTime).toLocaleString()}</td>
                            <td>{event.category}</td>
                            <td>{event.picture && <img src={event.picture} alt={event.name} className="event-picture" />}</td>
                            <td>
                                {Cookies.get('userRole') === 'host' && (
                                    <>
                                        <Link to={`/events/edit/${event.id}`}>Edit</Link>
                                        {' '}
                                        <button onClick={() => handleDelete(event.id)}>Delete</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/events/add">Add Event</Link>
        </div>
    );
};

export default Events;
