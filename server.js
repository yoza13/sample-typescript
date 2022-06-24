const express = require("express");
var cors = require("cors");

const { WeatherSearch } = require("./src/controllers/WeatherSearch");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use(
  cors({ origin: ["http://localhost:8080", "https://www.yashvoza.com"] })
);

app.post("/api/weather-search", (req, res) => {
  WeatherSearch(req, res);
});
app.get("/api/test-api", (req, res) => {
  res.send({ hi: "This is a Test" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
