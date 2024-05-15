// RegistrationPage.js
import React from 'react';
import Header from '../components/Header';
import RegistrationForm from '../components/RegistrationForm';

const RegistrationPage = ({ onRegister }) => {
  return (
    <div>
      <Header />
      <RegistrationForm onSubmit={onRegister} />
    </div>
  );
};

export default RegistrationPage;