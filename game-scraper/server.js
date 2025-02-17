const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS for React frontend

const PORT = 5001;
const WFA_URL = "https://wfaprofootball.com/2025-schedule/"; // WFA schedule page

// Favicon route (avoids warning)
app.get('/favicon.ico', (req, res) => res.status(204));

app.get("/api/games", async (req, res) => {
  try {
    // Fetch the website's HTML
    const { data } = await axios.get(WFA_URL);
    const $ = cheerio.load(data);

    let games = [];

    // Find game details on the page (adjust selectors based on site structure)
    $("td.data-event").each((index, element) => {
      const teams = $(element).text().trim(); // Event (teams) from data-event
      const date = $(element).closest('tr').find("td.data-date").text().trim(); // Date from data-date

      // Ensure both teams and date are found before pushing to the array
      if (teams && date) {
        games.push({ teams, date });
      }
    });

    res.json({ games });
  } catch (error) {
    console.error("Error scraping games:", error.message);
    res.status(500).json({ error: "Failed to fetch games", details: error.message });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
