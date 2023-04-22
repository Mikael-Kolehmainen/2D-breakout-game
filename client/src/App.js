import React from "react";
import Game from "./components/Game";
import Leaderboard from "./components/Leaderboard";
import "./styles/css/main.css";

// TODO:
// Handle Game Over and Win state some other way than by alerting
  // Maybe a restart button?
// Add some randomness to ball movement
// Leaderboard
  // Ability to save score with initials
  // Leaderboard is shown below game
// Known bugs
  // The ball and paddle are faster on faster devices
// Clean the code
// Add jsdoc to code
// Write readme in Github

function App() {
  return (
    <div>
      <h1>Breakout Game</h1>
      <Game />
      <Leaderboard />
    </div>
  );
}

export default App;
