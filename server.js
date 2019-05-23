const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// Basic route that sends the user first to the AJAX Page


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });