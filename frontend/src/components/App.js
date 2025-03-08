import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import KnowledgeCenter from '../pages/KnowledgeCenter';
import Forum from '../pages/Forum';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import UserProfile from '../components/UserProfile';
import Settings from '../components/Settings';
import Notifications from '../components/Notifications';
import AdminDashboard from '../components/AdminDashboard';
import Feedback from '../components/Feedback';
import HelpCenter from '../components/HelpCenter';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/knowledge-center" component={KnowledgeCenter} />
          <Route path="/forum" component={Forum} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/user-profile" component={UserProfile} />
          <Route path="/settings" component={Settings} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/admin-dashboard" component={AdminDashboard} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/help-center" component={HelpCenter} />
          {/* Add more routes here as needed */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
