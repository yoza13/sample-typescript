import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import TimerIcon from "@mui/icons-material/Timer";
import DoneIcon from "@mui/icons-material/Done";
import FlagIcon from "@mui/icons-material/Flag";
import SignalCellular0BarIcon from "@mui/icons-material/SignalCellular0Bar";
import GameContext from "./GameContext";
import settings from "./settings.json";

export default function Details() {
  const {
    seconds,
    flagsMarked,
    cellStates,
    resetGame,
    gameState,
    toggle,
    pauseButtonClicked,
    setPauseButtonClicked,
    resetTimer,
    setNewGame,
    skillLevel,
  } = useContext(GameContext);
  const [markedCells, setMarkedCells] = useState(0);

  useEffect(() => {
    let i = 0;
    cellStates.forEach((row) => {
      row.forEach((cell) => {
        if (cell) i++;
      });
    });
    setMarkedCells(i);
  }, [cellStates]);

  return (
    <Container>
      <Card>
        <Stack direction="row" sx={{ justifyContent: "space-evenly", mb: 3 }}>
          <Box>
            <IconButton color="primary" aria-label="timer" component="span">
              <TimerIcon />
            </IconButton>
            <Typography variant="caption" paragraph={true}>
              Timer
            </Typography>
            <Typography variant="body1">
              {new Date(seconds * 1000).toISOString().slice(14, 19)}
            </Typography>
          </Box>
          <Box>
            <IconButton
              color="primary"
              aria-label="opened-fields"
              component="span"
            >
              <DoneIcon />
            </IconButton>

            <Typography variant="caption" paragraph={true}>
              Opened Fields
            </Typography>
            <Typography variant="body1">{`${markedCells}/${
              settings[skillLevel].xFieldsCount *
                settings[skillLevel].yFieldsCount -
              settings[skillLevel].bombsCount
            }`}</Typography>
          </Box>
          <Box>
            <IconButton
              color="primary"
              aria-label="flag-count"
              component="span"
            >
              <FlagIcon />
            </IconButton>
            <Typography variant="caption" paragraph={true}>
              Mines Marked
            </Typography>
            <Typography variant="body1">{`${flagsMarked}-${settings[skillLevel].bombsCount}`}</Typography>
          </Box>
          <Box>
            <IconButton
              color="primary"
              aria-label="total-cells"
              component="span"
            >
              <SignalCellular0BarIcon />
            </IconButton>
            <Typography variant="caption" paragraph={true}>
              Grid Size
            </Typography>
            <Typography variant="body1">{`${settings[skillLevel].xFieldsCount}x${settings[skillLevel].yFieldsCount}`}</Typography>
          </Box>
        </Stack>
        <Stack sx={{ width: "50%", margin: "auto", marginBottom: "16px" }}>
          {gameState === "lost" && (
            <Button
              variant="contained"
              onClick={() => {
                setNewGame(true);
                resetGame();
                resetTimer();
              }}
              sx={{ mb: 1 }}
            >
              Play Again
            </Button>
          )}
          {!pauseButtonClicked && seconds > 0 && (
            <Button
              variant="contained"
              onClick={() => {
                toggle();
                setPauseButtonClicked(true);
              }}
              sx={{ mb: 1 }}
            >
              Pause
            </Button>
          )}
          {pauseButtonClicked && (
            <Button
              variant="contained"
              onClick={() => {
                toggle();
                setPauseButtonClicked(false);
              }}
              sx={{ mb: 1 }}
            >
              Continue
            </Button>
          )}
        </Stack>
      </Card>
    </Container>
  );
}
