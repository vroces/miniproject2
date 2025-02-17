import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/GamedayPageStyles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const GameDay = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTeam, setSelectedTeam] = useState(""); // Selected team for filtering
  const [uniqueTeams, setUniqueTeams] = useState([]); // Store unique teams for dropdown

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/games");
        const fetchedGames = response.data.games;

        // Extract unique teams for the dropdown
        const teams = [
          ...new Set(
            fetchedGames.flatMap((game) => game.teams.split(" vs ").map((team) => team.trim()))
          ),
        ]; // Extract unique teams
        setUniqueTeams(teams);

        setGames(fetchedGames);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching games:", error);
        setLoading(false);
      }
    };

    fetchGames();
  }, []); // Fetch games only once when the component mounts

  const handleTeamChange = (event) => {
    setSelectedTeam(event.target.value);
  };

  // Filter games by selected team
  const filteredGames = selectedTeam
    ? games.filter((game) =>
        game.teams.toLowerCase().includes(selectedTeam.toLowerCase())
      )
    : games;

  return (
    <div className="gameday-page-container">
      <Header />
      
      <div className="gameday-content">
        <h1>Welcome to GameDay</h1>
        
        {/* Dropdown for selecting a specific team */}
        <div className="team-filter">
          <label htmlFor="team-select">Filter by Team: </label>
          <select
            id="team-select"
            value={selectedTeam}
            onChange={handleTeamChange}
          >
            <option value="">All Teams</option>
            {uniqueTeams.map((team, index) => (
              <option key={index} value={team}>
                {team}
              </option>
            ))}
          </select>
        </div>

        {loading ? (
          <p>Loading games...</p>
        ) : (
          <div className="games-list">
            {filteredGames.map((game, index) => (
              <div className="game-card" key={index}>
                <h3>{game.teams}</h3>
                <p>{game.date}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default GameDay;
