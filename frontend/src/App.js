import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import UploadPage from './pages/UploadPage';
import ResultPage from './pages/ResultPage';
import './index.css';
import { loginUser, registerUser, uploadImage } from './services/api';

const App = () => {
  const [, setIsLoggedIn] = useState(false);

  const handleLogin = async (username, password) => {
    try {
      const response = await loginUser(username, password);
      if (response.message === 'Login successful') {
        setIsLoggedIn(true);
        alert('Successfully Logged In');
        // Redirect to /upload route
        window.location.href = '/upload';
      } else {
        alert(response.error);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again.');
    }
  };

  const handleRegister = async (username, password, email) => {
    try {
      const response = await registerUser(username, password, email);
      if (response.message === 'User registered successfully') {
        alert('Registration Successful');
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred during registration. Please try again.');
    }
  };

  const handleUpload = async (file) => {
    try {
      const response = await uploadImage(file);
      const prediction = response.prediction;
      // Redirect to the result page and pass the prediction as a query parameter
      window.location.href = `/result?prediction=${prediction}`;
    } catch (error) {
      console.error('Error during file upload:', error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/register" element={<RegistrationPage onRegister={handleRegister} />} />
        <Route path="/upload" element={<UploadPage onUpload={handleUpload} />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
};

export default App;