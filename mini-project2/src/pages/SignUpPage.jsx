import "../styles/SignUpPageStyles.css";
import Heading from "../components/Heading";
import SignUpForm from "../components/SignUpForm";
import SignInLink from "../components/SignInLink";

const SignUpPage = () => {
  return (
    <div className="form-page">
      <Heading />
      <div className="form-container">
        <SignUpForm />
        <SignInLink />
      </div>
    </div>
  );
};

export default SignUpPage;

