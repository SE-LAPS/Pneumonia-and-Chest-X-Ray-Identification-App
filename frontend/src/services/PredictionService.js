// PredictionService.js
import { uploadImage } from './api';

const predictImage = async (file) => {
  try {
    const response = await uploadImage(file);
    const { prediction } = response;
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

    return { prediction, resultUrl };
  } catch (error) {
    console.error('Error predicting image:', error);
    throw new Error('Failed to predict image');
  }
};

export default predictImage;