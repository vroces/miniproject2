import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUpPage from "./pages/SignUpPage";
import Dashboard from "./pages/Dashboard";
import PlayerCardsPage from "./pages/PlayerCardsPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import { AuthProvider } from "./context/AuthContext";
import Gameday from "./pages/GameDay";
import WhereWePlay from "./pages/WhereWePlay";
import MasterYourGame from "./pages/MasterYourGame";



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
        <Route path="/gameday" element={<Gameday />} />
        <Route path="/where-we-play" element={<WhereWePlay />} />
        <Route path="/master-your-game" element={<MasterYourGame />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
