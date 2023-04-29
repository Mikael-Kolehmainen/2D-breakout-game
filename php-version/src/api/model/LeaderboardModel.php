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
  public $user_time;

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
          $this->user_time
        ]
      ]
    );
  }
}
