const { db } = require("./db");
const util = require("util");
const {
  TABLE_USER_TIMES,
  FIELD_USERNAME,
  FIELD_USER_TIME
} = require("./const");

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

const getUserTimes = async () => {
  return new Promise((resolve, reject) => {
    const query = db.query(`SELECT * FROM ${TABLE_USER_TIMES}`);
    const results = [];
    query.on('error', (err) => {
      reject(err);
    });
    query.on('result', (row) => {
      results.push(row);
    });
    query.on('end', () => {
      resolve(results);
    });
  });
};

module.exports = {
  saveUserTime,
  getUserTimes
};
