
import React, { useState, useEffect } from 'react';
import LoginForm from '@/components/LoginForm';
import BonusDashboard from '@/components/BonusDashboard';
import BonusHourCheck from '@/components/BonusHourCheck';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [sessionExpiry, setSessionExpiry] = useState<Date | null>(null);

  // Check if it's bonus hour
  const isBonusHour = () => {
    const now = new Date();
    const currentDay = now.getDay(); // 0 = Sunday, 6 = Saturday
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    return (currentDay === 6 && (currentHour > 22 || (currentHour === 22 && currentMinute >= 59))) || 
           (currentDay === 0 && currentHour === 0);
  };

  // Check session expiry
  useEffect(() => {
    if (sessionExpiry) {
      const checkExpiry = setInterval(() => {
        if (new Date() > sessionExpiry) {
          handleLogout();
        }
      }, 60000); // Check every minute

      return () => clearInterval(checkExpiry);
    }
  }, [sessionExpiry]);

  const handleLogin = (username: string, role: string) => {
    if (!isBonusHour()) {
      return; // Don't allow login outside bonus hours
    }

    setIsLoggedIn(true);
    setUserRole(role);
    
    // Set session to expire in 30 minutes
    const expiry = new Date();
    expiry.setMinutes(expiry.getMinutes() + 30);
    setSessionExpiry(expiry);

    console.log(`User ${username} (${role}) logged in at ${new Date().toLocaleString()}`);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole('');
    setSessionExpiry(null);
    console.log('User logged out');
  };

  // If not bonus hour, show the restriction message
  if (!isBonusHour()) {
    return <BonusHourCheck />;
  }

  // If bonus hour but not logged in, show login form
  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />;
  }

  // If logged in during bonus hour, show dashboard
  return <BonusDashboard userRole={userRole} onLogout={handleLogout} />;
};

export default Index;
