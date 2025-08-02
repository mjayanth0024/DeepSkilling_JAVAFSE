import React, { useState } from 'react';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';
import LoginToggle from './components/LoginToggle';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div>
      <h1>Ticket Booking App</h1>
      <LoginToggle isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
      {isLoggedIn ? <UserPage /> : <GuestPage />}
    </div>
  );
}

export default App;
