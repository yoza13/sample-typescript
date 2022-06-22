import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar, IconButton, Switch } from "@mui/material";
import Yash from "../Yash.jpg";
import AppContext from "../ApplicationContext";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { func } from "prop-types";

export default function ButtonAppBar({ handleDrawerToggle }) {
  const { isDarkTheme, setIsDarkTheme } = useContext(AppContext);
  const drawerWidth = 240;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
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

ButtonAppBar.propTypes = {
  handleDrawerToggle: func,
};
