import React, { createContext, useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import dashboard components
import UserDashboard from './User/index';
import AdminDashboard from './Admin/index';
// import SuperAdminDashboard from './components/SuperAdmin/SuperAdminDashboard';

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');

  const handleLogin = (id, password) => {
    // Simulated login logic with predefined credentials
    if (id === 'user' && password === 'userpass') {
      setIsLoggedIn(true);
      setUserRole('user');
      document.body.style.backgroundColor = 'rgb(221, 221, 221)';
      document.body.style.backgroundImage = 'none';
    } else if (id === 'admin' && password === 'adminpass') {
      setIsLoggedIn(true);
      setUserRole('admin');
      document.body.style.backgroundColor = 'rgb(221, 221, 221)';
      document.body.style.backgroundImage = 'none';
    } else if (id === 'superadmin' && password === 'superadminpass') {
      setIsLoggedIn(true);
      setUserRole('superadmin');
      document.body.style.backgroundColor = 'rgb(221, 221, 221)';
      document.body.style.backgroundImage = 'none';
    } else {
      // If the login credentials are invalid, do not set isLoggedIn and userRole
      alert('Sorry!!1 The details you provided are invalid');
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userRole, handleLogin }}>
      <Router>
        <div>
          {isLoggedIn ? (
            <>
              {/* Render the appropriate dashboard component based on the userRole */}
              {userRole === 'user' && <UserDashboard />}
              {userRole === 'admin' && <AdminDashboard />}
              {/* {userRole === 'superadmin' && <SuperAdminDashboard />} */}
            </>
          ) : (
            <Routes>
              {/* Login route */}
              <Route path="/" element={<LoginPage />} />
              <Route path='/user' element={<UserDashboard />}/>
              <Route path='/admin' element={<AdminDashboard />}/>

              
            </Routes>
          )}
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

// Login page component
function LoginPage() {
  const { handleLogin } = useAuth();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const id = e.target.elements.id.value;
    const password = e.target.elements.password.value;
    handleLogin(id, password);
  };

  return (
    <div>
      <div className='login'>
        <h2>LOGIN</h2>
        <form onSubmit={handleFormSubmit}>
          <input type="text" placeholder="User ID" name='id' />
          <input type="password" placeholder="Password" name='password' />
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
}

// ... Other dashboard components ...
