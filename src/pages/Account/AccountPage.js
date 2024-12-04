import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebaseConfig';
import { useNavigate } from "react-router-dom";
import "./AccountPage.css";

const AccountPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("Account created:", user);
        navigate("/careerquiz");
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User signed in:", user);
        navigate("/careerquiz");
      }
    } catch (error) {
      setErrorMessage(error.message);
      console.error("Error:", error);
    }
  };

  return (
    <div className="account-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="intro">
          <h1>{isSignUp ? "Create Account" : "Sign In"}</h1>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="form-group">
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password*</label>
          <div className="password-container">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
        </div>
        <div className="links-container">

          <button
            type="button"
            className="create-account-link"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Already have an account? Sign In" : "Create Account"}
          </button>
        </div>
        <button type="submit" className="login-button">
          {isSignUp ? "Create Account" : "Log In"}
        </button>
      </form>
    </div>
  );
};

export default AccountPage;
