import "../styles/LandingPageStyles.css";
import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";
import SignUpLink from "../components/SignUpLink";

const LandingPage = () => {
  return (
    <div className="container">
      <Logo />
      
      <div className="form-container">
        <h2 className="form-heading">ShePlays: Women's Football Hub</h2>
        <p className="form-subtext">Connect. Compete. Celebrate.</p>
        <LoginForm />
        <SignUpLink />
      </div>
    </div>
  );
};

export default LandingPage;
