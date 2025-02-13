import logo from '../assets/logo.png'
import SlidingText from './SlidingText';
import "../styles/LandingPageStyles.css";


const Logo = () => {
  return (
    <>
    
    <div className="logo-container">
        
      <img src={logo} alt="Logo" className="logo" />
      <div className="sliding-text">
        <SlidingText/>
    </div>
    </div>
    
    </>
  );
};

export default Logo;
