import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import KnowledgeCenter from './KnowledgeCenter';
import Forum from './Forum';
import Dashboard from './Dashboard';
import Login from './Login';
import Signup from './Signup';
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
          {/* Add more routes here as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
