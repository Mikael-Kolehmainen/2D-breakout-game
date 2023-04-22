const mysql = require("mysql");
const { dbAccess } = require("./dbAccess");

const db = mysql.createConnection(dbAccess);

module.exports = {
  db
};
