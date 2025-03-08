import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <UserProvider>
                <App />
            </UserProvider>
        </ThemeProvider>
    </React.StrictMode>
);