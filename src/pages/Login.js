import React, { useEffect, useReducer, useState } from 'react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import './LogIn.css';

const emailReducer = (state, action) => {
    switch (action.type) {
        case 'SET_EMAIL':
            return { value: action.value, valid: action.value.includes('@'),touched:true};
        case 'RESET_TOUCHED':
        return { ...state, touched: false };
        default:
            return state;
    }
};

const passwordReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PASSWORD':
            return { value: action.value, valid: action.value.length >= 6,touched:true };
        case 'RESET_TOUCHED':
        return { ...state, touched: false };
        default:
            return state;
    }
};

const Login = (props) => {
    const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', valid: false });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', valid: false });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        // Check if user is already logged in when component mounts
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
            setIsLoggedIn(true);
            props.setIsLoggedIn(true);
        }
    }, []); // Empty dependency array ensures this effect runs only once, when the component mounts

    const loginHandler = () => {
        // Here you can add logic to validate email and password
        // For simplicity, let's assume the login is successful if both fields are non-empty
        if (emailState.value.trim() === '' || passwordState.value.trim() === '') {
            setError('Please provide both email and password.');
            return;
        }

        // Simulate successful login by setting isLoggedIn to true
        setIsLoggedIn(true);
        // Store login state in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        props.setIsLoggedIn(true);
        dispatchEmail({ type: 'SET_EMAIL', value:''})
        dispatchPassword({ type: 'SET_PASSWORD', value:'' })
    };

    const logoutHandler = () => {
        // Clear login state from localStorage
        localStorage.removeItem('isLoggedIn');
        // Update isLoggedIn state to false
        setIsLoggedIn(false);
        props.setIsLoggedIn(false);
        dispatchEmail({ type: 'RESET_TOUCHED' });
        dispatchPassword({ type: 'RESET_TOUCHED' });
    };
    
    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <Button onClick={logoutHandler} >Log Out</Button>
                </div>
            ) : (
                <div>
                    <Card>
                    <form className='form'>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='email'
                            id='email'
                            value={emailState.value}
                            onChange={(e) => dispatchEmail({ type: 'SET_EMAIL', value: e.target.value })}
                        />
                       {emailState.touched && !emailState.valid && <p style={{ color: 'red' }}>Invalid email format</p>}

                        <label htmlFor='password'>Password:</label>
                        <input
                            type='password'
                            id='password'
                            value={passwordState.value}
                            onChange={(e) => dispatchPassword({ type: 'SET_PASSWORD', value: e.target.value })}
                        />
                       {passwordState.touched && !passwordState.valid && <p style={{ color: 'red' }}>Password must be at least 6 characters long</p>}
                        <Button type='button' onClick={loginHandler}>
                            Log In
                        </Button>
                    </form>
                    </Card>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            )}
        </div>
    );
};

export default Login;
