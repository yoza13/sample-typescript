import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useStyles } from "../useStyles";

export default function Footer() {
  const classes = useStyles();
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
