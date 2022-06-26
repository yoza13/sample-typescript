/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import { Box, Button } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import TourIcon from "@mui/icons-material/Tour";
import GameContext from "./GameContext";

export default function Cell({
  value,
  xCoord,
  yCoord,
  lostGame,
  flagged,
  revealed,
  updateFlagsBoard,
  iconClass,
  checkAdjacentCells,
}) {
  const { cellStates, setCellStates } = useContext(GameContext);
  const [bombClicked, setBombClicked] = useState(false);

  const checkValue = () => {
    if (value === 0) {
      checkAdjacentCells(xCoord, yCoord);
    } else if (value === "Mine") {
      lostGame();
      setBombClicked(true);
    }
  };
  const clickedCell = (click) => {
    if (click === "click") {
      updateCellStates(xCoord, yCoord);
      checkValue();
    } else if (click === "contextmenu") {
      updateFlagsBoard(xCoord, yCoord, !flagged);
    }
  };
  const updateCellStates = (x, y) => {
    const updatedCellStates = [...cellStates];
    updatedCellStates[x][y] = true;

    setCellStates(updatedCellStates);
  };

  const showValue = () => {
    return revealed === true ? (
      <Box component="span" sx={{ color: iconClass }}>
        {value === "Mine" ? <AdbIcon /> : value}
      </Box>
    ) : (
      <Box>&nbsp;</Box>
    );
  };
  return (
    <Button
      variant="outlined"
      id={`${xCoord}-${yCoord}`}
      onClick={(event) => {
        event.preventDefault();
        clickedCell(event.type);
      }}
      onContextMenu={(event) => {
        event.preventDefault();
        clickedCell(event.type);
      }}
      disabled={bombClicked ? true : false}
    >
      {flagged === true && <TourIcon />}
      {showValue()}
    </Button>
  );
}
