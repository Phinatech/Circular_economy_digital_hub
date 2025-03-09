import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import RequireAuth from './components/auth/RequireAuth'; // Add this import

// Core pages (non-lazy loaded)
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Marketplace from './pages/Marketplace';

// Lazy-loaded pages
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const KnowledgeCenter = React.lazy(() => import('./pages/KnowledgeCenter'));
const Forum = React.lazy(() => import('./pages/Forum'));
const DashboardPage = React.lazy(() => import('./pages/Dashboard/DashboardPage'));
const UserProfile = React.lazy(() => import('./components/UserProfile'));
const Settings = React.lazy(() => import('./components/Settings'));
const Notifications = React.lazy(() => import('./components/Notifications'));
const AdminDashboard = React.lazy(() => import('./components/AdminDashboard'));
const Feedback = React.lazy(() => import('./components/Feedback'));
const HelpCenter = React.lazy(() => import('./components/HelpCenter'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const WasteMatching = React.lazy(() => import('./pages/WasteMatching')); // Add this import
const Analytics = React.lazy(() => import('./pages/Analytics')); // Add this import
const Education = React.lazy(() => import('./pages/Education')); // Add this import

function App() {
    return (
        <ErrorBoundary>
            <ThemeProvider>
                <AuthProvider>
                    <Layout>
                        <Suspense fallback={<LoadingSpinner />}>
                            <Routes>
                                {/* Public Routes */}
                                <Route path="/" element={<Home />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/signup" element={<Signup />} />
                                <Route path="/marketplace" element={<Marketplace />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/knowledge-center" element={<KnowledgeCenter />} />
                                <Route path="/forum" element={<Forum />} />
                                <Route path="/help-center" element={<HelpCenter />} />
                                <Route path="/waste-matching" element={<WasteMatching />} /> {/* Add this route */}
                                <Route path="/analytics" element={<Analytics />} /> {/* Add this route */}
                                <Route path="/education" element={<Education />} /> {/* Add this route */}

                                {/* Protected Routes */}
                                <Route element={<RequireAuth />}>
                                    <Route path="/dashboard" element={<DashboardPage />} />
                                    <Route path="/user-profile" element={<UserProfile />} />
                                    <Route path="/settings" element={<Settings />} />
                                    <Route path="/notifications" element={<Notifications />} />
                                    <Route path="/admin-dashboard" element={<AdminDashboard />} />
                                    <Route path="/feedback" element={<Feedback />} />
                                </Route>

                                {/* 404 Catch-all */}
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </Suspense>
                    </Layout>
                </AuthProvider>
            </ThemeProvider>
        </ErrorBoundary>
    );
}

export default App;