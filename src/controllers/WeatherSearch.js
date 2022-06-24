const axios = require("axios").default;
const appToken = "356ff24d62590793f00f5de022e88895";

async function WeatherSearch(request, response) {
  const { state, city, zip } = request.body;
  const query = [];
  if (state) query.push(state);
  if (city) query.push(city);
  if (zip) query.push(zip);
  const { data: latitudeData } = await axios({
    method: "GET",
    url: "http://api.openweathermap.org/geo/1.0/direct",
    params: {
      q: city,
      limit: 1,
      appId: appToken,
    },
  });
  const { data: weatherData } = await axios({
    method: "GET",
    url: "https://api.openweathermap.org/data/2.5/weather",
    params: {
      appId: appToken,
      units: "metric",
      lat: latitudeData[0].lat,
      lon: latitudeData[0].lon,
    },
  });

  response.send({
    weatherData,
  });
}

module.exports = {
  WeatherSearch,
};
