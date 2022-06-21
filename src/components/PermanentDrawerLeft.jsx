import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import ButtonAppBar from "./AppBar";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Collapse, IconButton, ListItem } from "@mui/material";
import { useStyles } from "../useStyles";
import AppContext from "../ApplicationContext";
import CloseIcon from "@mui/icons-material/Close";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  // eslint-disable-next-line react/prop-types
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(true);
  const leftNavItems = [
    {
      title: "Home",
      page: "/home",
    },
    {
      title: "About Me",
      page: "/about-me",
    },
    {
      title: "Experience",
      page: "/experience",
    },
    {
      title: "Projects",
      list: [
        {
          title: "Weather App",
          page: "/projects/weather-app",
        },
        {
          title: "Calculator",
          page: "/projects/calculator",
        },
      ],
    },
    {
      title: "Contact Me",
      page: "/contact-me",
    },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const navigate = useNavigate();
  const { isDarkTheme } = useContext(AppContext);
  const classes = useStyles({ isDarkTheme });
  const drawer = ({ allowClose }) => {
    return (
      <div>
        <Toolbar>
          {allowClose && (
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon />
            </IconButton>
          )}
        </Toolbar>
        <Divider />
        <List>
          {leftNavItems.map((item, index) => (
            <>
              {!item.list ? (
                <ListItem
                  component={RouterLink}
                  to={item.page}
                  className={classes.drawerListItem}
                >
                  <ListItemButton
                    key={item + index}
                    disablePadding
                    onClick={() => navigate(item.page)}
                  >
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </ListItem>
              ) : (
                <>
                  <ListItemButton
                    key={item + index}
                    disablePadding
                    onClick={() => setOpen(!open)}
                  >
                    <ListItemText primary={item.title} sx={{ pl: "16px" }} />
                    {open ? (
                      <ExpandLess
                        color={isDarkTheme ? "secondary" : "primary"}
                      />
                    ) : (
                      <ExpandMore
                        color={isDarkTheme ? "secondary" : "primary"}
                      />
                    )}
                  </ListItemButton>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="ul" className={classes.listStyleDisc}>
                      {item?.list.map((projects, index) => {
                        return (
                          <ListItem
                            key={index + projects.page}
                            component={RouterLink}
                            to={projects.page}
                            className={classes.drawerListItem}
                          >
                            <ListItemButton
                              sx={{ pl: 4 }}
                              onClick={() => navigate(projects.page)}
                            >
                              <ListItemText primary={projects.title} />
                            </ListItemButton>
                          </ListItem>
                        );
                      })}
                    </List>
                  </Collapse>
                </>
              )}
            </>
          ))}
        </List>
      </div>
    );
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ButtonAppBar handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="pages"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer({ allowClose: true })}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer({})}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
