import { Link } from "react-router-dom";

const SignUpLink = () => {
  return (
    <div className="sign-up-container">
      <p>
        Don't have an account? <Link to="/signup" className="sign-up-link">Sign up</Link>
      </p>
    </div>
  );
};

export default SignUpLink;
