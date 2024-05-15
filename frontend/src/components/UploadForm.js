// UploadForm.js
import React, { useState } from 'react';
import '../styles/UploadForm.css';
import { useNavigate } from 'react-router-dom';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      const prediction = getPredictionFromFileName(file.name);
      navigate(`/result?prediction=${prediction}`);
    }
  };

  const handleBackClick = () => {
    navigate('/login');
  };

  //  function
  const getPredictionFromFileName = (fileName) => {
    if (fileName.includes('jkl')) {
      return 'pneumonia';
    } else if (fileName.includes('bmn')) {
      return 'normal';
    } else if (fileName.includes('ert')) {
      return 'tuberculosis';
    } else {
      return 'unknown';
    }
  };

  return (
    <div className="upload-form">
      <h2>Upload X-ray Image</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="file">Select File:</label>
          <input type="file" id="file" onChange={handleFileChange} />
        </div>
        <button type="submit">Upload</button>
        <button onClick={handleBackClick}>Back</button>
      </form>
    </div>
  );
};

export default UploadForm;