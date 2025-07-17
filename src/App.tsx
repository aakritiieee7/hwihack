import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Layout/Navigation';
import HomePage from './components/Pages/HomePage';
import ScanPage from './components/Pages/ScanPage';
import InsightsPage from './components/Pages/InsightsPage';
import TeamPage from './components/Pages/TeamPage';
import AuthPage from './components/Pages/AuthPage'; // Import the new AuthPage

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // State for navigation highlighting
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication status
  const [userToken, setUserToken] = useState<string | null>(null); // Stores JWT token
  const [userId, setUserId] = useState<string | null>(null);     // Stores user ID
  const [username, setUsername] = useState<string | null>(null); // Stores username

  useEffect(() => {
    // On app load, check if a token, userId, and username exist in localStorage
    // This allows the user to stay logged in across sessions
    const token = localStorage.getItem('token');
    const storedUserId = localStorage.getItem('userId');
    const storedUsername = localStorage.getItem('username');

    if (token && storedUserId && storedUsername) {
      setIsAuthenticated(true);
      setUserToken(token);
      setUserId(storedUserId);
      setUsername(storedUsername);
    }
  }, []); // Run once on component mount

  // Callback function to handle successful login from AuthPage
  const handleLoginSuccess = (token: string, id: string, name: string) => {
    setIsAuthenticated(true);
    setUserToken(token);
    setUserId(id);
    setUsername(name);
  };

  // Function to handle user logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserToken(null);
    setUserId(null);
    setUsername(null);
    // Remove stored credentials from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    // Optionally, redirect the user to the login page after logout
    // navigate('/login'); // This would require `useNavigate` hook in App.tsx
  };

  // A simple component to protect routes that require authentication
  const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Pass authentication state and logout handler to Navigation component */}
        <Navigation 
          currentPage={currentPage} 
          onPageChange={setCurrentPage} 
          isAuthenticated={isAuthenticated} 
          onLogout={handleLogout}
          username={username}
        />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<AuthPage onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/team" element={<TeamPage />} />

          {/* Protected Routes - only accessible if isAuthenticated is true */}
          <Route path="/scan" element={<PrivateRoute><ScanPage /></PrivateRoute>} />
          <Route path="/insights" element={<PrivateRoute><InsightsPage /></PrivateRoute>} />
          
          {/* Fallback for any unknown routes */}
          <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;