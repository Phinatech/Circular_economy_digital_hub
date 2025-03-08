import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages (use "../pages" to go up one level from "components")
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import KnowledgeCenter from '../pages/KnowledgeCenter';
import Forum from '../pages/Forum';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';

// Components (already in the "components" directory)
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;