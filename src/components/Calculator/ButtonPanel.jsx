import { Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useContext } from "react";
import AppContext from "../../ApplicationContext";
import { useStyles } from "../../useStyles";

export default function ButtonPanel({
  setValue,
  value,
  addedValues,
  setAddedValues,
  operator,
  setOperator,
}) {
  const { isDarkTheme } = useContext(AppContext);
  const classes = useStyles({ isDarkTheme });
  const operate = ({ operation }) => {
    const updatedValues = addedValues.concat([value]);
    let result;
    if (operator) {
      const allValues = value.split(operator);
      if (operator === "+") {
        result = parseInt(allValues[0]) + parseInt(allValues[1]);
      } else if (operator === "-") {
        result = parseInt(allValues[0]) - parseInt(allValues[1]);
      } else if (operator === "*") {
        result = parseInt(allValues[0]) * parseInt(allValues[1]);
      } else if (operator === "/") {
        result = parseInt(allValues[0]) / parseInt(allValues[1]);
      }
    }
    setOperator(operation);
    if (operation === "=") {
      setValue(result);
    } else {
      setAddedValues(result !== undefined ? [result] : updatedValues);
      setValue(
        result !== undefined ? `${result}${operation}` : `${value}${operation}`
      );
    }
  };
  return (
    <Box className={classes.buttonPanel}>
      <Stack direction="row" className={classes.buttonStack}>
        <Button
          className={classes.buttons}
          onClick={() => {
            setAddedValues([]);
            setValue("0");
            setOperator("");
          }}
        >
          AC
        </Button>
        <Button
          className={classes.buttons}
          onClick={() => {
            setValue(
              [-1, -0].includes(Math.sign(value))
                ? Math.abs(value)
                : Math.abs(value) * -1
            );
          }}
        >
          +/-
        </Button>
        <Button
          className={classes.buttons}
          onClick={() => {
            const percentValue = value / 100;
            setValue(percentValue);
          }}
        >
          %
        </Button>
        <Button
          className={classes.buttons}
          onClick={() => operate({ operation: "/" })}
        >
          ÷
        </Button>
      </Stack>
      <Stack direction="row" className={classes.buttonStack}>
        <Button
          className={classes.buttons}
          onClick={() => setValue(`${value}7`)}
        >
          7
        </Button>
        <Button
          className={classes.buttons}
          onClick={() => setValue(`${value}8`)}
        >
          8
        </Button>
        <Button
          className={classes.buttons}
          onClick={() => setValue(`${value}9`)}
        >
          9
        </Button>
        <Button
          className={classes.buttons}
          onClick={() => operate({ operation: "*" })}
        >
          X
        </Button>
      </Stack>
      <Stack direction="row" className={classes.buttonStack}>
        <Button
          className={classes.buttons}
          onClick={() => setValue(`${value}4`)}
        >
          4
        </Button>
        <Button
          className={classes.buttons}
          onClick={() => setValue(`${value}5`)}
        >
          5
        </Button>
        <Button
          className={classes.buttons}
          onClick={() => setValue(`${value}6`)}
        >
          6
        </Button>
        <Button
          className={classes.buttons}
          onClick={() => operate({ operation: "-" })}
        >
          -
        </Button>
      </Stack>
      <Stack direction="row" className={classes.buttonStack}>
        <Button
          className={classes.buttons}
          onClick={() => setValue(`${value}1`)}
        >
          1
        </Button>
        <Button
          className={classes.buttons}
          onClick={() => setValue(`${value}2`)}
        >
          2
        </Button>
        <Button
          className={classes.buttons}
          onClick={() => setValue(`${value}3`)}
        >
          3
        </Button>
        <Button
          className={classes.buttons}
          onClick={() => operate({ operation: "+" })}
        >
          +
        </Button>
      </Stack>
      <Stack direction="row" className={classes.buttonStack}>
        <Button
          className={classes.buttons}
          onClick={() => setValue(`${value}0`)}
        >
          0
        </Button>
        <Button
          className={classes.buttons}
          onClick={() => setValue(`${value}.`)}
        >
          .
        </Button>
        <Button
          className={`${classes.buttons} wide`}
          onClick={() => operate({ operation: "=" })}
        >
          =
        </Button>
      </Stack>
    </Box>
  );
}
