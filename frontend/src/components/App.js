import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout.jsx';

// Static imports for critical components
import Home from '../pages/Home.jsx';
import Login from '../pages/Auth/Login.jsx';
import Signup from '../pages/Auth/Signup.jsx';

// Lazy-loaded components
const About = React.lazy(() => import('../pages/About.jsx'));
const Contact = React.lazy(() => import('../pages/Contact.jsx'));
const KnowledgeCenter = React.lazy(() => import('../pages/KnowledgeCenter.jsx'));
const Forum = React.lazy(() => import('../pages/Forum.jsx'));
const Dashboard = React.lazy(() => import('../pages/Dashboard.jsx'));
const UserProfile = React.lazy(() => import('./UserProfile'));
const Settings = React.lazy(() => import('./Settings'));
const Notifications = React.lazy(() => import('./Notifications'));
const AdminDashboard = React.lazy(() => import('./AdminDashboard'));
const Feedback = React.lazy(() => import('./Feedback'));
const HelpCenter = React.lazy(() => import('./HelpCenter'));
const NotFound = React.lazy(() => import('../pages/NotFound.jsx'));

// Loading component
const Loading = () => <div className="loading-spinner">Loading...</div>;

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Non-lazy routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Lazy-loaded routes */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/knowledge-center" element={<KnowledgeCenter />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;