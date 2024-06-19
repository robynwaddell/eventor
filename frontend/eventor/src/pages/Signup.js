import React, { useState } from 'react';
import Cookies from 'js-cookie'; 
import { useParams, useNavigate } from 'react-router-dom';
import '../style/User.css';
const Signup = () => {
    const [form, setForm] = useState({
        name: '',
        username: '',
        password: '',
        email: '',
        phone: '',
        role: 'guest'
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false); 
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        
        
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setIsLoading(true);  
            try {
                const response = await fetch('https://localhost:7192/User/Register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(form),
                });
                console.log(JSON.stringify(form));
                if (!response.ok) {
                    throw new Error('Failed to register');
                }
                const data = await response.json();
                console.log(data);
                setIsLoading(false);  
                
                console.log('User registered successfully:', form);
                Cookies.set('token', data.token, { expires: 7, path: '/' }); 
                Cookies.set('username', form.username, { expires: 7, path: '/' }); 
                Cookies.set('userId', data.userId, { expires: 7, path: '/' }); 
                Cookies.set('userRole', data.role, { expires: 7, path: '/' }); 
                navigate('/events'); 

            } catch (error) {
                console.error('Error registering user:', error.message);
                setIsLoading(false); 
                
            }
        }
    };

    return (
        <div className="form-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Role:</label>
                    <select name="role" value={form.role} onChange={handleChange} required>
                        <option value="host">Host</option>
                        <option value="guest">Guest</option>
                    </select>
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Registering...' : 'Register'}
                </button>
            </form>
        </div>
    );
};

export default Signup;
