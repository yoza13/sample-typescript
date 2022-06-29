import * as React from "react";
import { Typography, Box } from "@mui/material";
import AppContext from "../ApplicationContext";
import { useStyles } from "../useStyles";

export const Footer: React.FC = () => {
  const { isDarkTheme } = React.useContext(AppContext);
  const classes = useStyles({ isDarkTheme });
  return (
    <Box className={classes.footer}>
      <Typography variant="body2">Made by Yash Oza</Typography>
    </Box>
  );
};
