import React from "react";
import { Link } from "react-router-dom"; // For navigation
import ForgotPw from "../components/ForgotPw"; // Import the ForgotPw form component
import SignUpLink from "../components/SignUpLink";
import "../styles/ForgotPwPageStyles.css";
import RevisedLogo from "../components/RevisedLogo";

const ForgotPasswordPage = () => {
  return (
    <div className="forgot-password-page">
      <RevisedLogo size="small"/>
      {/* Login Button at the top-right */}
      <div className="top-right">
        <Link to="/" className="login-button">Login</Link>
      </div>
      
      {/* ForgotPw Form */}
      <ForgotPw />  {/* Include the ForgotPw form */}
      <SignUpLink/>
    </div>
  );
};

export default ForgotPasswordPage;
