import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login Data:', formData);
        // Add authentication logic later



        // Adding  state for errors
        const [errors, setErrors] = useState({});

        const validateForm = () => {
            const newErrors = {};
            if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
            if (formData.password.length < 6) newErrors.password = 'Minimum 6 characters';
            setErrors(newErrors);
            return Object.keys(newErrors).length === 0;
        };

        // Update submit handler
        const handleSubmit = (e) => {
            e.preventDefault();
            if (validateForm()) {
                // Submit logic
            }
        };
    };

    return (
        <div className="auth-container">
            <h2>Login to CircularHub</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                    />
                </div>
                <button type="submit" className="auth-button">Login</button>
            </form>
            <p className="auth-switch">
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
        </div>
    );
};

export default Login;