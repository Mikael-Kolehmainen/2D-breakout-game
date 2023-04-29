<?php

namespace public_site\controller;

use api\model\Database;
use api\model\LeaderboardModel;
use api\manager\ServerRequestManager;

class LeaderboardController
{

  /** @var Database */
  private $db;

  public function __construct()
  {
    $this->db = new Database();
  }

  public function saveResults(): void
  {
    if (ServerRequestManager::issetUsername() && ServerRequestManager::issetUserTime()) {
      $leaderboardModel = new LeaderboardModel($this->db);
      $leaderboardModel->username = ServerRequestManager::postUsername();
      $leaderboardModel->userTime = ServerRequestManager::postUserTime();
      $leaderboardModel->save();
    }
  }

  public function getTopTenSortedResults(): array
  {
    $leaderboardModel = new LeaderboardModel($this->db);
    $results = $leaderboardModel->loadAll();

    usort($results, function($a, $b) {
      return $a->userTime - $b->userTime;
    });

    array_splice($results, 10);

    return $results;
  }
}
