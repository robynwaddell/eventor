import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Editevent = () => {
    const { id } = useParams();  
    //const [event, setEvent] = useState(null); 
    const [isLoading, setIsLoading] = useState(true);  
    const [error, setError] = useState('');
    const [event, setEvent] = useState({
        name: '',
        location: '',
        dateTime: '',
        category: '',
        description: '',
        picture: ''
    });
    const navigate = useNavigate();
    console.log(useParams());
   
    const fetchEvent = async () => {
        try { 
            const response = await fetch(`https://localhost:7192/api/Event/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch event');
            }
            const eventData = await response.json();
            setEvent(eventData);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching event:', error.message);
            setError('Failed to fetch event');
            setIsLoading(false);
        }
    };

    useEffect(() => {
        
        const token = Cookies.get('token');
        if (!token) {
            navigate('/login');
        } else {
            fetchEvent(); 
        }
    }, [navigate], id);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent({
            ...event,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const form = {
                name: event.name,
                location: event.location,
                dateTime: event.dateTime,
                category: event.category,
                description: event.description,
                picture: event.picture
            };
            console.log(JSON.stringify(form));
            const token = Cookies.get('token');
            const response = await fetch(`https://localhost:7192/api/Event/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                },
                body: JSON.stringify(form),
            });
            if (!response.ok) {
                throw new Error('Failed to update event');
            }
            console.log('Event updated successfully:', event);
            navigate('/events'); 
        } catch (error) {
            console.error('Error updating event:', error.message);
            setError('Failed to update event');
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
            <h2>Edit Event</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={event.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Location:</label>
                    <input
                        type="text"
                        name="location"
                        value={event.location}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Date and Time:</label>
                    <input
                        type="datetime-local"
                        name="dateTime"
                        value={event.dateTime}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Category:</label>
                    <input
                        type="text"
                        name="category"
                        value={event.category}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={event.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div>
                    <label>Picture:</label>
                    <input
                        type="text"
                        name="picture"
                        value={event.picture}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Update Event</button>
            </form>
        </div>
    );
};

export default Editevent;
