import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios'; // We'll use axios to send requests to our backend
import { useNavigate } from 'react-router-dom'; // To redirect the user after login

interface AuthPageProps {
  // Callback function to inform the parent component (App.tsx) about successful login
  onLoginSuccess: (token: string, userId: string, username: string) => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and registration forms
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // To display success or error messages
  const [loading, setLoading] = useState(false); // To show loading state
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Make sure this URL matches your backend server's address and port
  const API_BASE_URL = 'http://localhost:8000/api'; 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    setMessage(''); // Clear previous messages
    setLoading(true); // Set loading state to true

    try {
      if (isLogin) {
        // Handle user login
        const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
        setMessage(response.data.message); // Display success message
        // Store authentication token, userId, and username in local storage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.userId);
        localStorage.setItem('username', response.data.username);
        // Call the parent's success callback
        onLoginSuccess(response.data.token, response.data.userId, response.data.username);
        // Redirect to the home page or dashboard after successful login
        navigate('/'); 
      } else {
        // Handle user registration
        const response = await axios.post(`${API_BASE_URL}/register`, { username, email, password });
        setMessage(response.data.message); // Display success message
        // After successful registration, switch to the login form
        setIsLogin(true); 
      }
    } catch (error: any) {
      // Handle errors from the API
      setMessage(error.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg border border-gray-100"
      >
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            {isLogin ? 'Sign in to your account' : 'Create a new account'}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <button
              type="button" // Use type="button" to prevent form submission
              onClick={() => setIsLogin(!isLogin)}
              className="font-medium text-[#00EB88] hover:text-green-600"
            >
              {isLogin ? 'register a new account' : 'sign in to an existing account'}
            </button>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#00EB88] focus:border-[#00EB88] focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
          )}
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#00EB88] focus:border-[#00EB88] focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#00EB88] focus:border-[#00EB88] focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#00EB88] hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00EB88] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                isLogin ? 'Sign in' : 'Register'
              )}
            </button>
          </div>
        </form>
        {message && (
          <p className={`mt-2 text-center text-sm ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default AuthPage;
