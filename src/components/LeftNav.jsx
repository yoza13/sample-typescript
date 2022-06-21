import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import React, { useContext, useState } from "react";
import AppContext from "../ApplicationContext";
import { useStyles } from "../useStyles";

export default function LeftNav() {
  const { setPage, isDarkTheme, isLeftNavOpen } = useContext(AppContext);
  const classes = useStyles({ isDarkTheme });
  const leftNavItems = [
    {
      title: "Home",
      page: "home",
    },
    {
      title: "About Me",
      page: "about-me",
    },
    {
      title: "Experience",
      page: "experience",
    },
    {
      title: "Projects",
      list: [
        {
          title: "Weather App",
          page: "projects/weather-app",
        },
        {
          title: "Calculator",
          page: "projects/calculator",
        },
      ],
    },
    {
      title: "Contact Me",
      page: "contact-me",
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <Box className={classes.leftNav} role="presentation">
      {isLeftNavOpen && (
        <List>
          {leftNavItems.map((item, index) => (
            <>
              {!item.list ? (
                <ListItemButton
                  key={item + index}
                  disablePadding
                  onClick={() => {
                    setPage(item.page);
                  }}
                >
                  <ListItemText secondary={item.title} />
                </ListItemButton>
              ) : (
                <>
                  <ListItemButton
                    key={item + index}
                    disablePadding
                    onClick={() => setOpen(!open)}
                  >
                    <ListItemText secondary={item.title} />
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
                          <ListItemButton
                            key={index + projects.page}
                            sx={{ pl: 4 }}
                            onClick={() => {
                              setPage(projects.page);
                            }}
                          >
                            <ListItem button={false}>
                              <ListItemText secondary={projects.title} />
                            </ListItem>
                          </ListItemButton>
                        );
                      })}
                    </List>
                  </Collapse>
                </>
              )}
            </>
          ))}
        </List>
      )}
    </Box>
  );
}
