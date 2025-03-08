import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Contact from '../pages/Contact.jsx';
import KnowledgeCenter from '../pages/KnowledgeCenter.jsx';
import Forum from '../pages/Forum.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import Login from '../pages/Auth/Login.jsx';
import Signup from '../pages/Auth/Signup.jsx';
import NotFound from '../pages/NotFound.jsx';
import Layout from './components/Layout.jsx';

// Components
import UserProfile from './UserProfile';
import Settings from './Settings';
import Notifications from './Notifications';
import AdminDashboard from './AdminDashboard';
import Feedback from './Feedback';
import HelpCenter from './HelpCenter';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/knowledge-center" element={<KnowledgeCenter />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;