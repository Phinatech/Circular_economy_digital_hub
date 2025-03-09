import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import ErrorBoundary from '../components/errorBoundary.jsx';
import Marketplace from '../pages/Marketplace.jsx';
import Home from '../pages/Home.jsx';
import Login from '../pages/Auth/Login.jsx';
import Signup from '../pages/Auth/Signup.jsx';
import DashboardPage from '../pages/Dashboard/DashboardPage';

// Lazy-loaded components
const About = React.lazy(() => import('../pages/About.jsx'));
const Contact = React.lazy(() => import('../pages/Contact.jsx'));
const KnowledgeCenter = React.lazy(() => import('../pages/KnowledgeCenter.jsx'));
const Forum = React.lazy(() => import('../pages/Forum.jsx'));
const Dashboard = React.lazy(() => import('../pages/Dashboard/DashboardPage.jsx'));
const UserProfile = React.lazy(() => import('../components/UserProfile/index.js'));
const Settings = React.lazy(() => import('../components/Settings/index.js'));
const Notifications = React.lazy(() => import('../components/Notifications/index.js'));
const AdminDashboard = React.lazy(() => import('../components/AdminDashboard/index.js'));
const Feedback = React.lazy(() => import('../components/Feedback/index.js'));
const HelpCenter = React.lazy(() => import('../components/HelpCenter/index.js'));
const NotFound = React.lazy(() => import('../pages/NotFound.jsx'));

// Loading component
const Loading = () => <div className="loading-spinner">Loading...</div>;

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Immediate routes */}
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="dashboard" element={
              <Suspense fallback={<Loading />}>
                <DashboardPage />
              </Suspense>
            } />

            {/* Lazy-loaded routes */}
            <Route path="about" element={<Suspense fallback={<Loading />}><About /></Suspense>} />
            <Route path="contact" element={<Suspense fallback={<Loading />}><Contact /></Suspense>} />
            <Route path="knowledge-center" element={<Suspense fallback={<Loading />}><KnowledgeCenter /></Suspense>} />
            <Route path="forum" element={<Suspense fallback={<Loading />}><Forum /></Suspense>} />
            <Route path="dashboard" element={<Suspense fallback={<Loading />}><Dashboard /></Suspense>} />
            <Route path="user-profile" element={<Suspense fallback={<Loading />}><UserProfile /></Suspense>} />
            <Route path="settings" element={<Suspense fallback={<Loading />}><Settings /></Suspense>} />
            <Route path="notifications" element={<Suspense fallback={<Loading />}><Notifications /></Suspense>} />
            <Route path="admin-dashboard" element={<Suspense fallback={<Loading />}><AdminDashboard /></Suspense>} />
            <Route path="feedback" element={<Suspense fallback={<Loading />}><Feedback /></Suspense>} />
            <Route path="help-center" element={<Suspense fallback={<Loading />}><HelpCenter /></Suspense>} />
            <Route path="*" element={<Suspense fallback={<Loading />}><NotFound /></Suspense>} />
          </Route>
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;