import React, { useState } from "react";
import Backend from "./classes/Backend";
import Game from "./components/Game";
import Leaderboard from "./components/Leaderboard";
import "./styles/css/main.css";

// TODO:
// Known bugs
  // The ball and paddle are faster on faster devices
// Add jsdoc to code
// Write readme in Github

function App() {
  const [gameTime, setGameTime] = useState(null);
  const [username, setUsername] = useState("");

  const saveUserTime = async () => {
    if (gameTime != null) {
      window.location.reload();
      await Backend.postUserTime(username, gameTime);
    }
  };

  return (
    <div>
      <h1>Breakout Game</h1>
      <Game gameTime={gameTime} setGameTime={setGameTime} />
      <Leaderboard username={username} setUsername={setUsername} saveUserTime={saveUserTime} />
    </div>
  );
}

export default App;
