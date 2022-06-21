import { Container } from "@mui/material";
import React, { useContext } from "react";
import Home from "./Home";
import Experience from "./Experience";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import WeatherApp from "./WeatherApp/WeatherSearch";
import AppContext from "../ApplicationContext";
import { useStyles } from "../useStyles";
import Calculator from "./Calculator/Calculator";

export default function AppContainer() {
  const { page } = useContext(AppContext);
  const classes = useStyles();

  const renderComponent = () => {
    if (page === "home") return <Home />;
    if (page === "about-me") return <AboutMe />;
    if (page === "contact-me") return <ContactMe />;
    if (page === "experience") return <Experience />;
    if (page === "projects/weather-app") return <WeatherApp />;
    if (page === "projects/calculator") return <Calculator />;
  };

  return (
    <Container className={classes.appContainer}>{renderComponent()}</Container>
  );
}
