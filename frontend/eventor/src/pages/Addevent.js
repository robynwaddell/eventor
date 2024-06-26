import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  
import Cookies from 'js-cookie';
import '../style/User.css';

const Addevent = () => {
    const [form, setForm] = useState({
        name: '',
        location: '',
        dateTime: '',
        category: '',
        description: '',
        picture: ''
    });
    const [isLoading, setIsLoading] = useState(false);  
    const [error, setError] = useState('');
    const navigate = useNavigate();  

    useEffect(() => {
        
        const token = Cookies.get('token');
        if (!token) {
            
            navigate('/login');
        } else {
           
            const userRole = Cookies.get('userRole');
            if (userRole.toLowerCase() !== 'host') {
                navigate('/permission-denied');  
            }
        }
        
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);  
        try {
            const userId = Cookies.get('userId');
            const token = Cookies.get('token');

            form['userID'] = userId;
            console.log(JSON.stringify(form));
            const response = await fetch('https://localhost:7192/api/Event', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                },
                
                body: JSON.stringify(form),
            });
            if (!response.ok) {
                throw new Error('Failed to add event');
            }
            setIsLoading(false); 
            console.log('Event added successfully:', form);
            setError('');
            navigate('/profile'); 
        } catch (error) {
            console.error('Error adding event:', error.message);
            setIsLoading(false); 
            setError('Failed to add event');
        }
    };

    return (
        <main className="main-container">
            <div className="overlay"></div>
        <div>
            <h2>Add Event</h2>
            <form onSubmit={handleSubmit} className='form-container'>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Location:</label>
                    <input
                        type="text"
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Date and Time:</label>
                    <input
                        type="datetime-local"
                        name="dateTime"
                        value={form.dateTime}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Category:</label>
                    <input
                        type="text"
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>Picture:</label>
                    <input
                        type="text"
                        name="picture"
                        value={form.picture}
                        onChange={handleChange}
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Adding Event...' : 'Add Event'}
                </button>
            </form>
        </div>
        </main>
    );
};

export default Addevent;
