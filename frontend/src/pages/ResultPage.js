// ResultPage.js
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Result from '../components/Result';

const ResultPage = () => {
  const [searchParams] = useSearchParams();
  const [prediction, setPrediction] = useState('');

  useEffect(() => {
    const predictionParam = searchParams.get('prediction');
    if (predictionParam) {
      setPrediction(predictionParam);
    }
  }, [searchParams]);

  return (
    <div>
      <Header />
      <Result prediction={prediction} />
    </div>
  );
};

export default ResultPage;