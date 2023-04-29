<?php

namespace public_site\controller;

class HomeController
{
  public function showHomePage(): void
  {
    echo "
        <script src='/src/api/js/data/Data.js' defer></script>
        <script src='/src/public_site/js/common/const.js' defer></script>
        <script src='/src/public_site/js/common/utils.js' defer></script>
        <script src='/src/public_site/js/classes/Ball.js' defer></script>
        <script src='/src/public_site/js/classes/Brick.js' defer></script>
        <script src='/src/public_site/js/classes/Bricks.js' defer></script>
        <script src='/src/public_site/js/classes/Paddle.js' defer></script>
        <script src='/src/public_site/js/classes/UIText.js' defer></script>
        <script src='/src/public_site/js/game.js' defer></script>
        <script src='/src/public_site/js/saveToLeaderboard.js' defer></script>
      </head>
      <div>
        <h1>Breakout Game</h1>
        <div class='game'>
          <p class='game-state' id='game-state'></p>
          <canvas id='gameCanvas' width='480' height='320'></canvas>
          <button class='btn center restart-btn' type='button' id='restart-btn'>START</button>
          <p class='center' id='game-result'>Your result: </p>
        </div>";
        $this->showLeaderboard();
    echo "
      </div>
    ";
  }

  private function showLeaderboard(): void
  {
    echo "
      <div class='leaderboard'>
        <h2>Leaderboard</h2>
        <h3>Save your result to the leaderboard</h3>
        <label for='username'>Name: </label>
        <input type='text' name='username' max='10' required id='username-input' />
        <input type='submit' value='SUBMIT' class='btn' id='save-result-btn' disabled />
        <table>
            <tr>
              <td>Placement</td>
              <td>Name</td>
              <td>Time (s)</td>
            </tr>
        </table>
      </div>
    ";
  }
}
