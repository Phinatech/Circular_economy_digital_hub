import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Add temporary page components
const Home = () => <h1>Home Page</h1>;
const Login = () => <h1>Login Page</h1>;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* Add routes for all your navbar links */}
        <Route path="/circular-solutions" element={<h1>Circular Solutions</h1>} />
        <Route path="/e-waste" element={<h1>E-Waste</h1>} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;