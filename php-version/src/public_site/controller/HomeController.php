<?php

namespace public_site\controller;

class HomeController
{
  public function showHomePage(): void
  {
    echo "
        <script src='/src/public_site/js/game.js' defer></script>
      </head>
      <div>
        <h1>Breakout Game</h1>
        <div class='game'>
          <p className={gameStateColor}>{gameState}</p>
          <canvas id='gameCanvas' width='480' height='320'></canvas>
          <button class='btn center restart-btn' type='button' onClick={restartClicked}>{startState}</button>
          <p class='center'>Your result: {props.gameTime}s</p>
        </div>
        <div class='leaderboard'>
          <h2>Leaderboard</h2>
          <h3>Save your result to the leaderboard</h3>
          <label for='username'>Name: </label>
          <input type='text' name='username' max='10' required onChange={(e) => saveUsername(e)} />
          <input type='submit' value='SUBMIT' class='btn' onClick={props.saveUserTime} disabled={disableSubmit} />
          <table>
            <tbody>
              <tr>
                <td>Placement</td>
                <td>Name</td>
                <td>Time (s)</td>
              </tr>
              {userTimesElements}
            </tbody>
          </table>
        </div>
      </div>
    ";
  }
}
