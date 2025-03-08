import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css'; // Optional CSS

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        <Outlet /> {/* Renders child routes */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;