import { Box, Stack, Container, Card, CardHeader } from "@mui/material";
import React, { useState } from "react";
import { useStyles } from "../../useStyles";
import ButtonPanel from "./ButtonPanel";

export default function Calculator() {
  const classes = useStyles();
  const [value, setValue] = useState("0");
  const [addedValues, setAddedValues] = useState([]);
  const [operator, setOperator] = useState();
  return (
    <Container className={classes.appContainer}>
      <Box className={classes.contentBox}>
        <Card>
          <CardHeader
            title="Calculator"
            subheader="Click the button and perform desired calculation"
          />
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
        </Card>
      </Box>
    </Container>
  );
}
