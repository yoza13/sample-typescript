import React, { useContext, useEffect, useState } from "react";
import { Box, Container } from "@mui/material";

import GameContext from "./GameContext";
import settings from "./settings.json";
import { getRandomInteger } from "./helper";
import Cell from "./Cell";

export default function Panel() {
  const {
    setGameState,
    setFlagsMarked,
    gameState,
    newGame,
    resetGame,
    cellStates,
    setCellStates,
    toggle,
    skillLevel,
  } = useContext(GameContext);

  const [boardValues, setBoardValues] = useState([]);
  const [flagsBoard, setFlagsBoard] = useState([]);
  const [minePositions, setMinePositions] = useState([]);

  const createBoard = (rows, columns) => {
    let board = [];

    for (let i = 1; i <= rows; i++) {
      let row = [];
      for (let j = 1; j <= columns; j++) {
        row.push(false);
      }
      board.push(row);
    }

    return board;
  };
  const countMines = (x, y, boardValues) => {
    const rowsGrid = settings[skillLevel].xFieldsCount - 1;
    const columnsGrid = settings[skillLevel].yFieldsCount - 1;
    const rows = [x - 1, x, x + 1];
    const cols = [y - 1, y, y + 1];
    let adjacentMines = 0;

    rows.forEach((row) => {
      if (row >= 0 && row <= rowsGrid) {
        cols.forEach((col) => {
          if (col >= 0 && col <= columnsGrid) {
            if (boardValues[row][col] === "Mine") {
              adjacentMines++;
            }
          }
        });
      }
    });

    return adjacentMines;
  };
  const boardSetup = () => {
    const rows = settings[skillLevel].xFieldsCount;
    const columns = settings[skillLevel].yFieldsCount;
    const mines = settings[skillLevel].bombsCount;

    const boardValues = createBoard(rows, columns);
    const cellStates = createBoard(rows, columns);
    const flagsBoard = createBoard(rows, columns);

    let mineCount = mines;
    let minePositions = [];
    while (mineCount > 0) {
      let i = getRandomInteger(1, rows) - 1;
      let j = getRandomInteger(1, columns) - 1;

      if (!minePositions.some((position) => position === `${i},${j}`)) {
        boardValues[i][j] = "Mine";
        minePositions.push(`${i},${j}`);
        mineCount--;
      }
    }

    for (let x = 0; x < rows; x++) {
      for (let y = 0; y < columns; y++) {
        if (boardValues[x][y] !== "Mine") {
          boardValues[x][y] = countMines(x, y, boardValues);
        }
      }
    }

    setBoardValues(boardValues);
    setCellStates(cellStates);
    setFlagsBoard(flagsBoard);
    setMinePositions(minePositions);
  };
  const lostGame = () => {
    const updatedCellStates = [...cellStates];
    minePositions.forEach((position) => {
      const x = position.split(",")[0];
      const y = position.split(",")[1];

      updatedCellStates[x][y] = true;
    });

    setCellStates(updatedCellStates);
    setGameState("lost");
  };

  const countFlagsMarked = (updatedFlagsBoard) => {
    const flagsMarked = updatedFlagsBoard.reduce((flagsMarked, row) => {
      const rowValue = row.reduce((acc, currentValue) => {
        if (currentValue === true) {
          return acc + 1;
        } else {
          return acc;
        }
      }, 0);
      return flagsMarked + rowValue;
    }, 0);
    setFlagsMarked(flagsMarked);
  };
  const updateFlagsBoard = (x, y, flaggedState) => {
    const updatedFlagsBoard = [...flagsBoard];
    updatedFlagsBoard[x][y] = flaggedState;
    countFlagsMarked(updatedFlagsBoard);
  };
  const checkAdjacentCells = (x, y) => {
    const rows = [x - 1, x, x + 1];
    const cols = [y - 1, y, y + 1];
    const updatedCellState = [...cellStates];

    rows.forEach((row) => {
      if (row >= 0 && row <= 8) {
        cols.forEach((col) => {
          if (col >= 0 && col <= 8) {
            if (
              cellStates[row][col] === false &&
              flagsBoard[row][col] === false
            ) {
              if (boardValues[row][col] === 0) {
                updatedCellState[row][col] = true;
                checkAdjacentCells(row, col);
              } else if (boardValues[row][col] !== "Mine") {
                updatedCellState[row][col] = true;
              }
            }
          }
        });
      }
    });
    setCellStates(updatedCellState);
  };
  const flagCellsWithMines = () => {
    const updatedFlagsBoard = [...flagsBoard];

    minePositions.forEach((position) => {
      const x = position.split(",")[0];
      const y = position.split(",")[1];
      flagsBoard[x][y] = true;
    });
    setFlagsMarked(minePositions.length);
    setFlagsBoard(updatedFlagsBoard);
  };
  const checkForWin = () => {
    const rows = settings["beginner"].xFieldsCount;
    const columns = settings["beginner"].yFieldsCount;
    const mines = settings["beginner"].bombsCount;
    const updatedCells = [...cellStates];
    const revealedCells = updatedCells.reduce((cellsRevealed, row) => {
      const rowValue = row.reduce((acc, currentValue) => {
        if (currentValue === true) {
          return acc + 1;
        } else {
          return acc;
        }
      }, 0);
      return cellsRevealed + rowValue;
    }, 0);

    const totalCells = rows * columns - mines;

    if (revealedCells === totalCells) {
      setGameState("won");
      flagCellsWithMines();
      toggle();
    }
  };

  const renderBoard = () => {
    let x = -1;

    return (
      <Container>
        {boardValues.map((row, ind) => {
          x++;
          let y = -1;
          return (
            <Box key={row + ind}>
              {row.map((cell, index) => {
                y++;
                const cellClass = {
                  Mine: "bomb",
                  0: "zero",
                  1: "blue",
                  2: "green",
                  3: "red",
                  4: "purple",
                  5: "magenta",
                  6: "turquoise",
                  7: "black",
                  8: "yellow",
                };
                return (
                  <Cell
                    key={cell + index}
                    xCoord={x}
                    yCoord={y}
                    value={cell}
                    iconClass={cellClass[cell]}
                    lostGame={lostGame}
                    updateFlagsBoard={updateFlagsBoard}
                    checkAdjacentCells={checkAdjacentCells}
                    updateFlagsMarked={setFlagsMarked}
                    revealed={cellStates[x][y]}
                    flagged={flagsBoard[x][y]}
                  ></Cell>
                );
              })}
            </Box>
          );
        })}
      </Container>
    );
  };

  useEffect(() => {
    boardSetup();
  }, []);

  useEffect(() => {
    boardSetup();
  }, [skillLevel]);

  useEffect(() => {
    if (gameState !== "won") {
      checkForWin();
    }
  }, [cellStates]);

  useEffect(() => {
    if (newGame === true) {
      resetGame();
      boardSetup();
    }
  }, [newGame]);

  return (
    <Container component="main" sx={{ mt: 2, mb: 4 }} onClick={() => toggle()}>
      {renderBoard()}
    </Container>
  );
}
