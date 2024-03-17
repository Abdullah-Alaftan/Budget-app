import React, { ChangeEvent, FormEvent, useState } from "react";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";

type SavingWrapperProps = {
  savingsTarget: number;
  currentSavings: number;
  setSavingTarget: (value: number) => void;
  setCurrentSaving: (value: number) => void;
  progress: number;
};

export default function SavingWrapper({
  savingsTarget,
  currentSavings,
  setSavingTarget,
  setCurrentSaving,
  progress,
}: SavingWrapperProps) {
  const [tempTarget, setTempTarget] = useState<number | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTempTarget(Number(e.target.value));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (tempTarget !== null) {
      setSavingTarget(tempTarget);
    }
    setTempTarget(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Set target</p>
        <input
          type="number"
          name="resource"
          placeholder="Add amount"
          value={tempTarget ?? ""}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
        <p>Current savings: {currentSavings}</p>
        <p>Target: {savingsTarget}</p>

        <Grid>
          <Box sx={{ position: "relative", display: "inline-flex" }}>
            <CircularProgress variant="determinate" value={progress} />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="caption"
                component="div"
                color="text.secondary"
              >{`${Math.round(progress)}%`}</Typography>
            </Box>
          </Box>
        </Grid>
      </form>
    </div>
  );
}
