import React, { useState } from "react";
import { createTheme, Fab, ThemeProvider } from "@mui/material";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { ErrorBoundary } from "react-error-boundary";
import { AppContextProvider } from "./ApplicationContext";
import ButtonAppBar from "./components/AppBar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import ContactMe from "./components/ContactMe";
// import WeatherSearch from "./components/WeatherApp/WeatherSearch";
import WeatherSearchUI from "./components/WeatherApp/WeatherSearchUI";
import Calculator from "./components/Calculator/Calculator";
import PermanentDrawerLeft from "./components/PermanentDrawerLeft";
import ErrorFallback from "./components/ErrorFallback";
import Footer from "./components/Footer";
import ToDoApp from "./components/ToDo/ToDoApp";
import Minesweeper from "./components/MineSweeper/Game";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isLeftNavOpen, setIsLeftNavOpen] = useState(true);
  const dark = {
    palette: {
      mode: "dark",
    },
  };
  const light = {
    palette: {
      mode: "light",
    },
  };
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AppContextProvider
          value={{
            isDarkTheme,
            setIsDarkTheme,
            isLeftNavOpen,
            setIsLeftNavOpen,
          }}
        >
          <ThemeProvider
            theme={isDarkTheme ? createTheme(dark) : createTheme(light)}
          >
            <Router>
              <Fab
                color="primary"
                aria-label="back"
                sx={{ bottom: "60", right: "30", position: "fixed" }}
                onClick={() => window.scrollTo(0, 0)}
              >
                <ArrowUpwardIcon />
              </Fab>
              <ButtonAppBar />
              <PermanentDrawerLeft />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/about-me" element={<AboutMe />}></Route>
                <Route path="/experience" element={<Experience />}></Route>
                <Route path="/contact-me" element={<ContactMe />}></Route>
                {/* <Route
                  path="/projects/weather-app"
                  element={<WeatherSearch />}
                ></Route> */}
                <Route
                  path="/projects/weather-app"
                  element={<WeatherSearchUI />}
                ></Route>
                <Route
                  path="/projects/calculator"
                  element={<Calculator />}
                ></Route>
                <Route path="/projects/todo" element={<ToDoApp />}></Route>
                <Route
                  path="/projects/mine-sweeper"
                  element={<Minesweeper />}
                ></Route>
              </Routes>
              <Footer />
            </Router>
          </ThemeProvider>
        </AppContextProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
