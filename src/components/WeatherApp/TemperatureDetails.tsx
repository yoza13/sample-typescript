import * as React from "react";
import { Box, Card, Container, Stack, Switch, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

interface WeatherData {
  icon: string;
  main: string;
}
interface TemperatureDetails {
  name?: string;
  main?: {
    temp: number;
    feels_like: number;
    temp_max: number;
    temp_min: number;
  };
  weather?: WeatherData[];
}

const TemperatureDetails = (tempDetails: TemperatureDetails) => {
  const [tempUnit, setTempUnit] = React.useState<string>("C");
  const [tempValue, setTempValue] = React.useState<number>(
    tempDetails.main.temp
  );
  const [feelLikeTempValue, setFeelsLikeTempValue] = React.useState<number>(
    tempDetails.main.feels_like
  );
  const [maxTemp, setMaxTemp] = React.useState<number>(
    tempDetails.main.temp_max
  );
  const [minTemp, setMinTemp] = React.useState<number>(
    tempDetails.main.temp_min
  );
  const iconCode = tempDetails.weather[0].icon;
  const changeTempUnitsToF = () => {
    setTempValue((tempValue * 9) / 5 + 32);
    setFeelsLikeTempValue((feelLikeTempValue * 9) / 5 + 32);
    setMaxTemp((maxTemp * 9) / 5 + 32);
    setMinTemp((minTemp * 9) / 5 + 32);
    setTempUnit("F");
  };
  const changeTempUnitsToC = () => {
    setTempValue(((tempValue - 32) * 5) / 9);
    setFeelsLikeTempValue(((feelLikeTempValue - 32) * 5) / 9);
    setMaxTemp(((maxTemp - 32) * 5) / 9);
    setMinTemp(((minTemp - 32) * 5) / 9);
    setTempUnit("C");
  };
  const changeMetrics = () => {
    if (tempUnit === "C") {
      changeTempUnitsToF();
    } else {
      changeTempUnitsToC();
    }
  };
  return (
    <Container>
      <Card sx={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <Box sx={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <Stack direction="row">
            <Box sx={{ width: "50%" }}>
              <img
                id="wicon"
                src={`http://openweathermap.org/img/w/${iconCode}.png`}
                alt="Weather icon"
              />
            </Box>
            <Stack sx={{ float: "right" }}>
              <Typography variant="h4">
                {tempValue.toFixed(2)}° {tempUnit}
              </Typography>
              <Typography variant="h5">
                {tempDetails.name} <LocationOnOutlinedIcon />
              </Typography>
            </Stack>
          </Stack>
          <Stack sx={{ alignItems: "center", marginTop: "2rem" }}>
            <Typography variant="h6">{tempDetails.weather[0].main}</Typography>
            <Typography variant="h6">
              {maxTemp.toFixed(2)}/{minTemp.toFixed(2)}
            </Typography>
            <Typography variant="h6">
              Feels Like {feelLikeTempValue.toFixed(2)}° {tempUnit}
            </Typography>
          </Stack>
        </Box>
      </Card>
      <Stack direction="row">
        <Typography variant="body1">°C</Typography>
        <Switch onChange={changeMetrics} />
        <Typography variant="body1">°F</Typography>
      </Stack>
    </Container>
  );
};

export default TemperatureDetails;
