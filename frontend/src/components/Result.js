// Result.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Result.css';

const Result = ({ prediction }) => {
  const navigate = useNavigate();

  let resultUrl;

  switch (prediction) {
    case 'pneumonia':
      resultUrl = 'https://www.mayoclinic.org/diseases-conditions/pneumonia/diagnosis-treatment/drc-20354210';
      break;
    case 'normal':
      resultUrl = 'https://www.who.int/europe/news-room/fact-sheets/item/a-healthy-lifestyle---who-recommendations';
      break;
    case 'tuberculosis':
      resultUrl = 'https://www.mayoclinic.org/diseases-conditions/tuberculosis/diagnosis-treatment/drc-20351256';
      break;
    default:
      resultUrl = '';
  }

  const handleBackClick = () => {
    navigate('/upload');
  };

  return (
    <div className="result">
      <h2>Result</h2>
      <p>{prediction}</p>
      {resultUrl && (
        <a href={resultUrl} target="_blank" rel="noopener noreferrer">
          <button>View Result Details</button>
        </a>
      )}
      <button onClick={handleBackClick}>Back</button>
    </div>
  );
};

export default Result;