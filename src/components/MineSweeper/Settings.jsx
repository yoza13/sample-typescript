import React, { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import GameContext from "./GameContext";

export default function Settings() {
  const settings = [
    {
      level: "beginner",
      xFieldsCount: 8,
      yFieldsCount: 8,
      bombsCount: 10,
    },
    {
      level: "intermediate",
      xFieldsCount: 16,
      yFieldsCount: 16,
      bombsCount: 40,
    },
    {
      level: "expert",
      xFieldsCount: 30,
      yFieldsCount: 16,
      bombsCount: 99,
    },
  ];
  const { skillLevel, setSkillLevel, resetTimer } = useContext(GameContext);
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="body1">Select Skill Level</Typography>
      {settings.map((set) => {
        console.log(skillLevel);
        console.log(set);
        return (
          <Button
            key={set.level}
            variant={
              skillLevel.toLowerCase() === set.level ? "outlined" : "none"
            }
            onClick={() => {
              resetTimer();
              setSkillLevel(set.level);
            }}
          >
            {set.level}
          </Button>
        );
      })}
    </Box>
  );
}
