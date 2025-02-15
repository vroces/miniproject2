import { Link } from "react-router-dom";

const SignInLink = () => {
    return (
      <div className="sign-up-container">
        <p>Have an account? <Link to="/" className="sign-in-link">Sign in</Link></p>
      </div>
    );
  };
  
  export default SignInLink;
  