import React, { useState } from 'react';
import Cookies from 'js-cookie'; 
import '../style/User.css';

const Login = () => {
    const [form, setForm] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false); 

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
            const response = await fetch('https://api.example.com/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            if (!response.ok) {
                throw new Error('Login failed');
            }
            const data = await response.json();
            setIsLoading(false); 
            console.log('User logged in successfully:', data);
            setError('');

            
            Cookies.set('token', data.token, { expires: 7, path: '/' }); 
            

        } catch (error) {
            console.error('Error logging in:', error.message);
            setIsLoading(false); 
            setError('Invalid username or password');
        }
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
};

export default Login;