import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUpPage from "./pages/SignUpPage";
import Dashboard from "./pages/Dashboard";
import PlayerCardsPage from "./pages/PlayerCardsPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import { AuthProvider } from "./context/AuthContext";
import GameDay from "./pages/GameDay";
import WhereWePlayPage from "./pages/WhereWePlayPage";
import MasterYourGame from "./pages/MasterYourGame";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsService from "./pages/TermsService";
import Contact from "./pages/Contact";



function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/player-cards" element={<PlayerCardsPage />} /> {/* Correct syntax */}
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/gameday" element={<GameDay />} />
        <Route path="/where-we-play" element={<WhereWePlayPage />} />
        <Route path="/master-your-game" element={<MasterYourGame />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsService />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
