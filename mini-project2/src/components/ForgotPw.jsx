// ForgotPw.jsx
import { useState } from "react";

const ForgotPw = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email address.");
      setMessage(""); // Clear success message
      return;
    }

    // Simulate backend logic here (API call, etc.)
    if (email === "test@example.com") {
      setMessage("An email with reset instructions has been sent.");
      setError(""); // Clear error message
    } else {
      setError("Email not found. Please try again.");
      setMessage(""); // Clear success message
    }
  };

  return (
    <div className="forgotpw-form">
      <h2 className="form-heading">Forgot Your Password?</h2>
      <p className="form-subtext">Enter your email to reset your password.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>

      {error && <div className="error-message">{error}</div>}
      {message && <div className="success-message">{message}</div>}
    </div>
  );
};

export default ForgotPw;
