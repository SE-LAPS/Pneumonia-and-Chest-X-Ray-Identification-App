// LoginPage.js
import React from 'react';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';

const LoginPage = ({ onLogin }) => {
  return (
    <div>
      <Header />
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export default LoginPage;