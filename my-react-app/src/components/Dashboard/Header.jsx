import React from 'react';


function Header({ onLogout }) {


return (
  <header className="dashboard-header">
    <div className="header-title" onClick={() => window.location.reload()}>LAZY PANDA</div>

    <button className="circular-button" aria-label="User actions"></button>
    <button className="logout-button" onClick={onLogout}>Logout</button>

  </header>
  );
}

export default Header;
