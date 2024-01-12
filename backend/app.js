const express = require("express");
const db = require("./config/database");

db.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
