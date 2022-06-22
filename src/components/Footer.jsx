import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import AppContext from "../ApplicationContext";
import { useStyles } from "../useStyles";

export default function Footer() {
  const { isDarkTheme } = useContext(AppContext);
  const classes = useStyles({ isDarkTheme });
  return (
    <Container className={classes.footer}>
      <Typography
        align="center"
        sx={{ fontSize: "24px", letterSpacing: "1.5px" }}
      >
        Made by Yash Oza
      </Typography>
    </Container>
  );
}
