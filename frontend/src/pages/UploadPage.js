// UploadPage.js
import React from 'react';
import Header from '../components/Header';
import UploadForm from '../components/UploadForm';

const UploadPage = ({ onUpload }) => {
  const handleUpload = (file) => {
    // Handle upload logic
    onUpload(file);
  };

  return (
    <div>
      <Header />
      <UploadForm onUpload={handleUpload} />
    </div>
  );
};

export default UploadPage;