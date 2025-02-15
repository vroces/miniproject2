import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUpPage from "./pages/SignUpPage";
import Dashboard from "./pages/Dashboard";
import PlayerCardsPage from "./pages/PlayerCardsPage";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/player-cards" element={<PlayerCardsPage />} /> {/* Correct syntax */}
        
      </Routes>
    </Router>
  );
}

export default App;
