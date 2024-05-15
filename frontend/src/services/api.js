// api.js
const BASE_URL = 'http://127.0.0.1:5000';

// Function to handle errors from API responses
const handleErrors = async (response) => {
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  return response.json();
};

// Function to handle user login
export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    return handleErrors(response);
  } catch (error) {
    throw new Error('Failed to login');
  }
};

// Function to handle user registration
export const registerUser = async (username, password, email) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, email }),
    });
    return handleErrors(response);
  } catch (error) {
    throw new Error('Failed to register');
  }
};

// Function to upload X-ray image
export const uploadImage = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch(`${BASE_URL}/upload`, {
      method: 'POST',
      body: formData,
    });
    const data = await handleErrors(response);
    console.log('Data received from backend:', data); 
    return data;
  } catch (error) {
    console.error('Error uploading image:', error); 
    throw new Error('Failed to upload image');
  }
};