import React from 'react';
import Header from './components/Dashboard/Header';
import Footer from './components/Dashboard/Footer';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h2>404 - Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <button onClick={handleGoBack}>Go back to Login page</button>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
