import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TechStack from './TechStack';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <Header onLogout={handleLogout} />

      <div className="dashboard-content">
        <TechStack />
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
