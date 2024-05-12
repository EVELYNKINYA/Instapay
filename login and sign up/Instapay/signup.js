import React, { useState } from 'react';
import './auth.css';

function Signup() {
  const [signupData, setSignupData] = useState({ email: '', firstName: '', lastName: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignupInputChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    if (!signupData.email || !signupData.firstName || !signupData.lastName || !signupData.password) {
      setErrorMessage('Please enter all required information');
      return;
    }
    if (!isValidEmail(signupData.email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });

      if (response.ok) {
        console.log('Signup successful');
        setErrorMessage('');
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setErrorMessage('An error occurred during signup.');
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <form onSubmit={handleSignupSubmit}>
      <h2>Sign Up</h2>
      <input type="email" name="email" placeholder="Email" value={signupData.email} onChange={handleSignupInputChange} required />
      <input type="text" name="firstName" placeholder="First Name" value={signupData.firstName} onChange={handleSignupInputChange} required />
      <input type="text" name="lastName" placeholder="Last Name" value={signupData.lastName} onChange={handleSignupInputChange} required />
      <input type="password" name="password" placeholder="Password" value={signupData.password} onChange={handleSignupInputChange} required />
      <button type="submit">Sign Up</button>
      {errorMessage && <div className="error">{errorMessage}</div>}
    </form>
  );
}

export default Signup;
