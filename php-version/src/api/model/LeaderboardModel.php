<?php

namespace api\model;

class LeaderboardModel
{
  private const TABLE_NAME = 'user_times';
  private const FIELD_ID = 'id';
  private const FIELD_USERNAME = 'username';
  private const FIELD_USER_TIME = 'user_time';

  /** @var int */
  public $id;

  /** @var string */
  public $username;

  /** @var int */
  public $userTime;

  /** @var Database */
  private $db;

  public function __construct($database)
  {
    $this->db = $database;
  }

  public function save(): int
  {
    return $this->db->insert(
      'INSERT INTO ' . self::TABLE_NAME .
        ' ( ' .
          self::FIELD_USERNAME . ', ' .
          self::FIELD_USER_TIME .
        ') VALUES (?, ?)',
      [
        ['ss'],
        [
          $this->username,
          $this->userTime
        ]
      ]
    );
  }

  /** @return LeaderboardModel[] */
  public function loadAll()
  {
    $records = $this->db->select('SELECT * FROM ' . self::TABLE_NAME);

    $leaderboardResults = [];
    $i = 0;
    foreach ($records as $record) {
      $leaderboardModel = new LeaderboardModel($this->db);
      $leaderboardResults[$i] = $leaderboardModel->mapFromDbRecord($record);

      $i++;
    }

    return $leaderboardResults;
  }

  /**
     * @param mixed[] $record Associative array of one db record
     * @return $this
     */
  public function mapFromDbRecord($record)
  {
    $this->id = $record[self::FIELD_ID];
    $this->username = $record[self::FIELD_USERNAME];
    $this->userTime = $record[self::FIELD_USER_TIME];

    return $this;
  }
}
