import { AppContextProvider } from "./ApplicationContext";
import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import ButtonAppBar from "./components/AppBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import ContactMe from "./components/ContactMe";
import WeatherSearch from "./components/WeatherApp/WeatherSearch";
import Calculator from "./components/Calculator/Calculator";
import PermanentDrawerLeft from "./components/PermanentDrawerLeft";
import Footer from "./components/Footer";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

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
            <ButtonAppBar />
            <PermanentDrawerLeft />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/about-me" element={<AboutMe />}></Route>
              <Route path="/experience" element={<Experience />}></Route>
              <Route path="/contact-me" element={<ContactMe />}></Route>
              <Route
                path="/projects/weather-app"
                element={<WeatherSearch />}
              ></Route>
              <Route
                path="/projects/calculator"
                element={<Calculator />}
              ></Route>
            </Routes>
            <Footer />
          </Router>
        </ThemeProvider>
      </AppContextProvider>
    </>
  );
}

export default App;
