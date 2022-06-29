import {
  createTheme,
  ThemeProvider,
  PaletteMode,
  CssBaseline,
} from "@mui/material";
import * as React from "react";
import AppContext from "./ApplicationContext";
import { NavigationBar } from "./components/NavigationBar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { AboutMe } from "./components/AboutMe";
import { ContactMe } from "./components/ContactMe";
import { Experience } from "./components/Experience";
import { ErrorFallback } from "./components/ErrorFallback";
import { WeatherSearch } from "./components/WeatherApp/WeatherSearchUI";
import { Calculator } from "./components/Calculator/Calculator";
import { Minesweeper } from "./components/MineSweeper/Game";
import { ToDoApp } from "./components/ToDo/ToDoApp";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

export const App = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState<boolean>(false);
  const dark = {
    palette: {
      mode: "dark" as PaletteMode,
    },
  };
  const light = {
    palette: {
      mode: "light" as PaletteMode,
    },
  };
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <AppContext.Provider
        value={{
          isDarkTheme,
          setIsDarkTheme,
        }}
      >
        <ThemeProvider
          theme={isDarkTheme ? createTheme(dark) : createTheme(light)}
        >
          <CssBaseline />
          <Router>
            <NavigationBar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/about-me" element={<AboutMe />}></Route>
              <Route path="/contact-me" element={<ContactMe />}></Route>
              <Route path="/experience" element={<Experience />}></Route>
              <Route
                path="/projects/weather-app"
                element={<WeatherSearch />}
              ></Route>
              {/* <Route path="/projects/calculator" element={<Calculator />}></Route> */}
              <Route path="/projects/todo" element={<ToDoApp />}></Route>
              <Route
                path="/projects/mine-sweeper"
                element={<Minesweeper />}
              ></Route>
            </Routes>
            <Footer />
          </Router>
        </ThemeProvider>
      </AppContext.Provider>
    </ErrorBoundary>
  );
};
