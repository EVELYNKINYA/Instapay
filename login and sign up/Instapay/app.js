import React, { useState } from 'react';
import Login from './login';
import Signup from './signup';

function App() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="container">
      <h1>Instapay</h1>
      {showSignup ? <Signup /> : <Login />}
      <p>
        {showSignup ? "Already have an account? " : "Do not have an account? "}
        <button onClick={() => setShowSignup(!showSignup)}>
          {showSignup ? "Login here" : "Sign up now!"}
        </button>
      </p>
    </div>
  );
}

export default App;
