import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError("Both email and password are required.");
      return;
    }

    // Example login logic (you can replace with actual logic)
    if (email !== "test@example.com" || password !== "password") {
      setError("Invalid credentials. Please try again.");
    } else {
      setError("");
      // Proceed with login (e.g., redirect, set auth state)
      console.log("Logged in successfully");
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          id="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          id="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Login</button>

        {error && <div className="error-message">{error}</div>}

        {/* OR Separator */}
        <div className="separator">
          <hr className="line" />
          <span className="or-text">OR</span>
          <hr className="line" />
        </div>

        {/* Forgot Password */}
        <div className="forgot-password">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

