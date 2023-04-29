<?php

use public_site\controller\ErrorController;
use public_site\controller\HomeController;
use public_site\controller\LeaderboardController;
use api\manager\ServerRequestManager;

require __DIR__ . "/src/inc/bootstrap.php";

session_start();

$uri = ServerRequestManager::getUriParts();

if ($uri[2] != "ajax") {
  echo "
    <!DOCTYPE html>
    <html>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <link rel='icon' type='image/x-icon' href='/src/public_site/media/icons/favicon.svg'>
        <link href='/src/public_site/styles/css/main.css' rel='stylesheet' type='text/css'>
  ";
}

switch ($uri[2]) {
  case "":
    showHome();
    break;
  case "ajax":
    if (ServerRequestManager::isPost() || ServerRequestManager::isGet()) {
      header('Content-type: Application/json, charset=UTF-8');
      switch ($uri[3]) {
        case "save-game-results":
          saveGameResultsToLeaderboard();
          break;
        case null: default:
          header("HTTP/1.1 404 Not Found");
          exit();
      }
    }
    break;
  case "error":
    showError("Error title", "This is the error page.", "/index.php");
    break;
  default:
    showError(
      "404 Not Found",
      "The page you're looking for doesn't exist.",
      "/index.php"
    );
    exit();
}

if ($uri[2] != "ajax") {
  echo "
      </body>
    </html>
  ";
}

function showHome()
{
  $homeController = new HomeController();
  $homeController->showHomePage();
}

function saveGameResultsToLeaderboard()
{
  $leaderboardController = new LeaderboardController();
  $leaderboardController->saveResults();
}

function showError($title, $message, $link): void
{
  $errorController = new ErrorController($title, $message, $link);
  $errorController->showErrorPage();
}
