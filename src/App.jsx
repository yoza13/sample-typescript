import LeftNav from "./components/LeftNav";
import { AppContextProvider } from "./ApplicationContext";
import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import ButtonAppBar from "./components/AppBar";
import AppContainer from "./components/AppContainer";

function App() {
  const [page, setPage] = useState("home");
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
          page,
          setPage,
          isDarkTheme,
          setIsDarkTheme,
          isLeftNavOpen,
          setIsLeftNavOpen,
        }}
      >
        <ThemeProvider
          theme={isDarkTheme ? createTheme(dark) : createTheme(light)}
        >
          <ButtonAppBar />
          <LeftNav />
          <AppContainer />
        </ThemeProvider>
      </AppContextProvider>
    </>
  );
}

export default App;
