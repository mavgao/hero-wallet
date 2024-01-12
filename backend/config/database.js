const mysql = require("mysql");
const dbConfig = {
  host: "database-test.czj6t59kqakm.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "1234qwer",
  database: "hero_wallet_test",
  port: 3306,
};

const connection = mysql.createConnection(dbConfig);

module.exports = connection;
