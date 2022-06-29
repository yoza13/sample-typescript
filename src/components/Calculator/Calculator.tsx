import * as React from "react";
import { Box, Stack, Container, Card, CardHeader } from "@mui/material";
import AppContext from "../../ApplicationContext";
import { useStyles } from "../../useStyles";
import { ButtonPanel } from "./ButtonPanel";

export const Calculator: React.FC = () => {
  const { isDarkTheme } = React.useContext(AppContext);
  const classes = useStyles({ isDarkTheme });
  const [value, setValue] = React.useState<string>("0");
  const [addedValues, setAddedValues] = React.useState<string[]>([]);
  const [operator, setOperator] = React.useState<string>("");
  return (
    <Container className={classes.appContainer}>
      <Card raised={true} className={classes.contentBox}>
        <CardHeader
          title="Calculator"
          subheader="Click the button and perform desired calculation"
        />
        <Stack className={classes.calculatorBox}>
          <Box>
            <input className={classes.displayField} value={value} />
          </Box>
          <ButtonPanel
            setValue={setValue}
            value={value}
            addedValues={addedValues}
            setAddedValues={setAddedValues}
            operator={operator}
            setOperator={setOperator}
          />
        </Stack>
      </Card>
    </Container>
  );
};
