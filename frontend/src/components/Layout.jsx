import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import ThemeToggle from './ThemeToggle'; // Importing ThemeToggle

import Footer from './Footer';
import './Layout.css'; // Optional CSS

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <ThemeToggle /> {/* Adding ThemeToggle for theme switching */}

      <main className="main-content">
        <Outlet /> {/* Renders child routes */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
