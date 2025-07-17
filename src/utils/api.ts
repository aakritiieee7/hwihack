import axios from 'axios';
import { ScanResult, ScanHistory, MaterialDistribution } from '../types';

// ✅ Make sure this BASE_URL matches your backend server's address and port
const BASE_URL = 'http://localhost:8000/api'; 

// Create an Axios instance. This allows us to configure Axios once
// and then use this configured instance for all our API calls.
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Request Interceptor: This function will be called before every request made by axiosInstance.
// It's used here to add the JWT token to the request headers if available.
axiosInstance.interceptors.request.use(
  (config) => {
    // Get the token from localStorage
    const token = localStorage.getItem('token');
    // If a token exists, add it to the Authorization header
    if (token) {
      // The format is 'Bearer <token>' as expected by our backend middleware
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config; // Return the modified config
  },
  (error) => {
    // Handle request errors (e.g., network issues)
    return Promise.reject(error);
  }
);

export const api = {
  // Use axiosInstance for all API calls that interact with the backend
  // The token will automatically be attached by the interceptor for protected routes.
  
  // This endpoint might not be strictly necessary if analysis is always done via upload
  async getScanResult(): Promise<ScanResult> {
    const response = await axiosInstance.get(`/scan`); 
    return response.data;
  },

  async getScanHistory(): Promise<ScanHistory[]> {
    const response = await axiosInstance.get(`/scan-history`);
    return response.data;
  },

  // Material distribution might not need a token if it's public data,
  // but using axiosInstance ensures consistency.
  async getMaterialDistribution(): Promise<MaterialDistribution> {
    const response = await axiosInstance.get(`/material-distribution`); 
    return response.data.data;
  },

  async uploadImage(file: File): Promise<ScanResult> {
    const formData = new FormData();
    formData.append('image', file);

    const response = await axiosInstance.post(`/scan`, formData, { 
      headers: {
        'Content-Type': 'multipart/form-data', // Important for file uploads
      },
    });
    return response.data;
  }
};
