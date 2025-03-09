import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import ErrorBoundary from '../components/errorBoundary.jsx';

// Static imports for critical components
import Home from '../pages/Home.jsx';
import Login from '../pages/Auth/Login.jsx';
import Signup from '../pages/Auth/Signup.jsx';
import Marketplace from '../pages/Marketplace.jsx';

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
    <ErrorBoundary>
      <Router>
        <Routes>
          {/* Layout wraps all routes */}
          <Route path="/" element={<Layout />}>
            {/* Non-lazy routes */}
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />

            {/* Lazy-loaded routes with individual suspense */}
            <Route path="about" element={
              <Suspense fallback={<Loading />}>
                <About />
              </Suspense>
            }/>
            <Route path="contact" element={
              <Suspense fallback={<Loading />}>
                <Contact />
              </Suspense>
            }/>
            <Route path="knowledge-center" element={
              <Suspense fallback={<Loading />}>
                <KnowledgeCenter />
              </Suspense>
            }/>
            <Route path="forum" element={
              <Suspense fallback={<Loading />}>
                <Forum />
              </Suspense>
            }/>
            <Route path="marketplace" element={
              <Suspense fallback={<Loading />}>
                <Marketplace />
              </Suspense>
            }/>
            <Route path="dashboard" element={
              <Suspense fallback={<Loading />}>
                <Dashboard />
              </Suspense>
            }/>
            <Route path="user-profile" element={
              <Suspense fallback={<Loading />}>
                <UserProfile />
              </Suspense>
            }/>
            <Route path="settings" element={
              <Suspense fallback={<Loading />}>
                <Settings />
              </Suspense>
            }/>
            <Route path="notifications" element={
              <Suspense fallback={<Loading />}>
                <Notifications />
              </Suspense>
            }/>
            <Route path="admin-dashboard" element={
              <Suspense fallback={<Loading />}>
                <AdminDashboard />
              </Suspense>
            }/>
            <Route path="feedback" element={
              <Suspense fallback={<Loading />}>
                <Feedback />
              </Suspense>
            }/>
            <Route path="help-center" element={
              <Suspense fallback={<Loading />}>
                <HelpCenter />
              </Suspense>
            }/>
            <Route path="*" element={
              <Suspense fallback={<Loading />}>
                <NotFound />
              </Suspense>
            }/>
          </Route>
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;