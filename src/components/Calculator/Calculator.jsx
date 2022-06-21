import {
  Box,
  Stack,
  Container,
  Typography,
  Slide,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import { useStyles } from "../../useStyles";
import ButtonPanel from "./ButtonPanel";

export default function Calculator() {
  const classes = useStyles();
  const [value, setValue] = useState("0");
  const [addedValues, setAddedValues] = useState([]);
  const [operator, setOperator] = useState();
  return (
    <Container className={classes.contentBox}>
      <Slide direction="left" in={true}>
        <Typography
          variant="h5"
          variantMapping={{ h5: "h1" }}
          sx={{ fontWeight: "bold" }}
          align="center"
        >
          Calculator
        </Typography>
      </Slide>
      <Slide direction="right" in={true}>
        <Divider className={classes.dividerStyle} />
      </Slide>
      <Stack className={classes.calculatorBox}>
        <Box>
          <input className={classes.displayField} value={value} />
        </Box>
        <ButtonPanel
          buttonClick={setValue}
          value={value}
          addedValues={addedValues}
          setAddedValues={setAddedValues}
          operator={operator}
          setOperator={setOperator}
        />
      </Stack>
      <Typography variant="body1" className={classes.calculatorWarning}>
        Note :- Please use button click. Keyboard typing in progress
      </Typography>
    </Container>
  );
}
