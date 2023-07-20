import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();

  const handleLogin = (role) => {
    // Simulated login logic
    setIsLoggedIn(true);
    setUserRole(role);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Simulated logout logic
    setIsLoggedIn(false);
    setUserRole('');
  };

   // Get the background color based on the user role
   const getDashboardBackgroundColor = () => {
    switch (userRole) {
      case 'admin':
        return 'lightblue';
      case 'superadmin':
        return 'lightgreen';
      default:
        return 'white';
    }
  };


  return (
    <div>
      <div className='login'>
        <h2>LOGIN</h2>
        <input type="text"placeholder="User ID"/>
        <input type="password"placeholder="Password"/>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}

export default Login