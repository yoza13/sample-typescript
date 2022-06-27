import React, { useContext } from "react";
import { Typography, Box } from "@mui/material";
import AppContext from "../ApplicationContext";
import { useStyles } from "../useStyles";

export default function Footer() {
  const { isDarkTheme } = useContext(AppContext);
  const classes = useStyles({ isDarkTheme });
  return (
    <Box className={classes.footer}>
      <Typography variant="body2">Made by Yash Oza</Typography>
    </Box>
  );
}
