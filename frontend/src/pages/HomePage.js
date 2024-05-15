// HomePage.js
import React from 'react';
import Header from '../components/Header';

const HomePage = () => {
  return (
    <div>
      <Header />
      <center><h2>Welcome to X-ray Identification App</h2></center>
      <center>
      <p>This is the Xray Identification of Pneumonia and Tuberculosis Application.</p>
      
        <img 
          src="https://marketing.webassets.siemens-healthineers.com/1800000000076797/d6017a5a0693/Large-display-for-Artis-zee-family_1800000000076797.gif" 
          alt="X-ray Display" 
          width="600px" 
          height="300px" 
        />
      </center>
    </div>
  );
};

export default HomePage;
