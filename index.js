const express = require('express');
const logger = require('morgan')
const bodyParser = require('body-parser');
const { userRoutes } = require('./server/routes');
const app = express();

app.use(logger("dev"));

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.json({"message": `Server is running!`})
})

app.get("/api", (_, res) => res.json({"message": "Welcome to the API"}));

app.use("/api/users", userRoutes);

app.listen(3000);

module.exports = app;