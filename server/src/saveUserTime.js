const { db } = require("./db");
const util = require("util");

const TABLE_USER_TIMES = "user_times";
const FIELD_USERNAME = "username";
const FIELD_USER_TIME = "user_time";

const saveUserTime = async (username, time) => {
  const insertStmt = `INSERT INTO ${TABLE_USER_TIMES} (${FIELD_USERNAME}, ${FIELD_USER_TIME}) VALUES (?, ?)`;
  const values = [username, time];

  try {
    const result = await db.query(insertStmt, values);
    console.log(`User time successfully inserted to db.\n${util.inspect(result)}`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  saveUserTime
};
