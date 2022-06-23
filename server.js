const express = require("express");
var cors = require("cors");

const { WeatherSearch } = require("./src/controllers/WeatherSearch");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use(cors({ origin: "http://localhost:8080" }));

app.post("/api/weather-search", (req, res) => {
  WeatherSearch(req, res);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
