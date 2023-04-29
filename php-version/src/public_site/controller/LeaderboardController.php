<?php

namespace public_site\controller;

use api\model\Database;
use api\model\LeaderboardModel;
use api\manager\ServerRequestManager;

class LeaderboardController
{
  /** @var int */
  public $id;

  /** @var string */
  public $username;

  /** @var int */
  public $user_time;

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
      $leaderboardModel->user_time = ServerRequestManager::postUserTime();
      $leaderboardModel->save();
    }
  }
}
