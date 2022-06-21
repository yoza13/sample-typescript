import React, { useContext, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Avatar, Switch, useMediaQuery } from "@mui/material";
import Yash from "../Yash.jpg";
import AppContext from "../ApplicationContext";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function ButtonAppBar() {
  const { isDarkTheme, setIsDarkTheme, isLeftNavOpen, setIsLeftNavOpen } =
    useContext(AppContext);
  const matches = useMediaQuery("(max-width:1024px)");
  useEffect(() => {
    if (!matches) setIsLeftNavOpen(true);
  }, [matches, setIsLeftNavOpen]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          {matches && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setIsLeftNavOpen(!isLeftNavOpen)}
            >
              {isLeftNavOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}
          <Avatar alt="Yash Oza" src={Yash} />
          &nbsp; &nbsp; &nbsp;
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Yash Oza
          </Typography>
          <>
            <Switch
              onChange={() => setIsDarkTheme(!isDarkTheme)}
              checked={isDarkTheme}
            />
            <NightlightOutlinedIcon />
          </>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
