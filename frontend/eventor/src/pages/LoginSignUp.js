import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'; 
import { useNavigate } from 'react-router-dom';
import '../style/User.css';

const LoginSignUp = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [form, setForm] = useState({
        username: '',
        password: '',
        name: '',
        email: '',
        phone: '',
        role: 'guest'
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false); 
    const navigate = useNavigate();

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
        
        const url = isLogin 
            ? `https://localhost:7192/User/login?username=${form.username}&password=${form.password}`
            : 'https://localhost:7192/User/Register';

        const options = isLogin 
            ? {}
            : {
                headers: {
                    'Content-Type': 'application/json',
                }
            };

        try {
            const response = await axios.post(url, isLogin ? null : form, options);
            
            const data = response.data;
            setIsLoading(false); 
            setError('');

            Cookies.set('token', data.token, { expires: 7, path: '/' }); 
            Cookies.set('username', form.username, { expires: 7, path: '/' }); 
            Cookies.set('userId', data.userId, { expires: 7, path: '/' }); 
            Cookies.set('userRole', data.role, { expires: 7, path: '/' });

            if(data.role === 'host')
                navigate('/events'); 
            else
                navigate('/'); 

        } catch (error) {
            console.error('Error:', error.message);
            setIsLoading(false); 
            setError(isLogin ? 'Invalid username or password' : 'Error registering user');
        }
    };

    return (
        <div className="form-container">
            <h2>{isLogin ? 'Login' : 'Register'}</h2>
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <>
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
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone:</label>
                            <input
                                type="text"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Role:</label>
                            <select name="role" value={form.role} onChange={handleChange} required>
                                <option value="host">Host</option>
                                <option value="guest">Guest</option>
                            </select>
                        </div>
                    </>
                )}
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
                    {isLoading ? (isLogin ? 'Logging in...' : 'Registering...') : (isLogin ? 'Login' : 'Register')}
                </button>
            </form>
            <p>
                {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                <button onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'Sign up' : 'Login'}
                </button>
            </p>
        </div>
    );
};

export default LoginSignUp;
